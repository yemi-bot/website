import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";

const CLIENTS_FILE = path.resolve(__dirname, "src/data/clients.json");

function readClientFile(): string[] {
  try {
    const raw = fs.readFileSync(CLIENTS_FILE, "utf8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.every((entry) => typeof entry === "string")) {
      return parsed;
    }
  } catch (error) {
    // fall through to default creation
  }
  return [];
}

function writeClientFile(clients: string[]) {
  const unique = Array.from(new Map(clients.map((name) => [name.toLowerCase(), name])).values());
  unique.sort((a, b) => a.localeCompare(b));
  fs.mkdirSync(path.dirname(CLIENTS_FILE), { recursive: true });
  fs.writeFileSync(CLIENTS_FILE, JSON.stringify(unique, null, 2));
}

const clientsApiPlugin = {
  name: "client-api",
  configureServer(server: any) {
    server.middlewares.use("/api/clients", (req: any, res: any, next: any) => {
      const sendJson = (status: number, payload: unknown) => {
        res.statusCode = status;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(payload));
      };

      if (req.method === "GET") {
        sendJson(200, readClientFile());
        return;
      }

      if (req.method === "POST" || req.method === "DELETE") {
        let raw = "";
        req.on("data", (chunk: Buffer) => {
          raw += chunk.toString();
        });
        req.on("end", () => {
          let name = "";
          try {
            const body = raw ? JSON.parse(raw) : {};
            if (typeof body.name === "string") {
              name = body.name.trim();
            }
          } catch (error) {
            sendJson(400, { error: "Invalid JSON body" });
            return;
          }

          if (!name) {
            sendJson(400, { error: "Client name is required" });
            return;
          }

          const existing = readClientFile();
          if (req.method === "POST") {
            const exists = existing.some(
              (entry) => entry.toLowerCase() === name.toLowerCase()
            );
            if (!exists) {
              existing.push(name);
              writeClientFile(existing);
            }
            sendJson(200, readClientFile());
            return;
          }

          const filtered = existing.filter(
            (entry) => entry.toLowerCase() !== name.toLowerCase()
          );
          if (filtered.length === existing.length) {
            sendJson(404, { error: "Client not found" });
            return;
          }
          writeClientFile(filtered);
          sendJson(200, readClientFile());
        });
        return;
      }

      if (req.method === "OPTIONS") {
        res.statusCode = 204;
        res.end();
        return;
      }

      next();
    });
  },
};

export default defineConfig({
  plugins: [react(), clientsApiPlugin],
  base: "/website/",
  css: {
    postcss: "./postcss.config.js",
  },
  server: {
    port: 5173,
  },
});
