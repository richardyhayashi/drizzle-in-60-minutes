import "dotenv/config";
import { db } from "./drizzle/db";
import { UserPreferencesTable, UserTable }from "./drizzle/schema";
import { asc, count, desc, eq, sql } from "drizzle-orm";

async function main() {
  console.log("***Delete Data***");

   const users = await db
      .delete(UserTable)
      .where(eq(UserTable.age, 30));

  console.log(users);
}

main();