import "dotenv/config";
import { db } from "./drizzle/db";
import { UserPreferencesTable, UserTable }from "./drizzle/schema";

async function main() {
  /*db.insert(UserPreferencesTable).values({
    emailUpdates: true,
    userId: "8be8a2a7-579d-484d-972a-d8b6c5a33e40",
  });*/

  const users = await db.query.UserTable.findMany({
    columns: { name: true, id: true },
    //limit: 1,
    //offset: 0,
    with: { preferences: true },
  });

  console.log(users);
}

main();