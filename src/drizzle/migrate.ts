/**
 * 
 */
import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const migrationClient = postgres(process.env.DATABASE_URL as string, { max: 1});

async function main() {
   console.log("Migration start...");

   await migrate(drizzle(migrationClient), {
      migrationsFolder: "./src/drizzle/migrations"
   });

   await migrationClient.end();

   console.log("Migration end...");
}

main();