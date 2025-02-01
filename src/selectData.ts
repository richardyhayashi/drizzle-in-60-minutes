import "dotenv/config";
import { db } from "./drizzle/db";
import { UserPreferencesTable, UserTable }from "./drizzle/schema";
import { asc, count, desc, eq, sql } from "drizzle-orm";

async function main() {
  console.log("***Query Data***");

  /**
   *
   */
  /* const users = await db
   .select({
      id: UserTable.id,
   })
   .from(UserTable); */

  /**
   *
   */
  /*const users = await db
     .select({
       id: UserTable.id,
       name: UserTable.name,
       age: UserTable.age,
     })
     .from(UserTable)
     .where(eq(UserTable.age, 25));*/

  /**
   *
   */
  /* const users = await db
    .select({
      id: UserTable.id,
      age: UserTable.age,
      emailUpdates: UserPreferencesTable.emailUpdates,
    })
    .from(UserTable)
    //.where(eq(UserTable.age, 25))
    .leftJoin(
      UserPreferencesTable,
      eq(UserPreferencesTable.userId, UserTable.id)
    ); */

  /**
   *
   */
  const users = await db
    .select({
      name: UserTable.age,
      count: count(UserTable.age),
    })
    .from(UserTable)
    .groupBy(UserTable.age);

  console.log(users);
}

main();