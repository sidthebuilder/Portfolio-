import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";
import { migrate } from "drizzle-orm/pglite/migrator";
import * as schema from "@shared/schema";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use PGlite for local database to remove external dependencies
const client = new PGlite();
export const db = drizzle(client, { schema });

// Helper to run migrations
export async function runMigrations() {
  try {
    const migrationsFolder = path.join(__dirname, "../migrations");
    await migrate(db, { migrationsFolder });
    console.log("Migrations applied successfully.");
  } catch (e) {
    console.error("Migration failed:", e);
  }
}
