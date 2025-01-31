import "dotenv/config";
import { db } from "./drizzle/db";
import { UserTable }from "./drizzle/schema";

async function main() {
   db.insert();
}

main();