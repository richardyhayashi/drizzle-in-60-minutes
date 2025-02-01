import "dotenv/config";
import { db } from "./drizzle/db";
import { UserPreferencesTable, UserTable }from "./drizzle/schema";
import { asc, count, desc, eq, sql } from "drizzle-orm";

async function main() {
  console.log("***Query Data***");

   const users = await db
      .update(UserTable).set({
         age: 30,
      })
      .where(eq(UserTable.age, 29));

  console.log(users);
}

main();