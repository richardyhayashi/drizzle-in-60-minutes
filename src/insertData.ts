import "dotenv/config";
import { db } from "./drizzle/db";
import { UserTable }from "./drizzle/schema";

async function main() {
  // Delete table
  await db.delete(UserTable);

  /**
   * Insert user
   */
  /*const user = await db
    .insert(UserTable)
    .values({
      name: "Kyle",
      age: 29,
      email: "test@test.com",
    })
    .returning({
      id: UserTable.id,
    });*/

  /**
   * Insert Multiple
   */
  /*const user = await db
   .insert(UserTable)
   .values([
      {
        name: "Kyle",
        age: 29,
        email: "test@test.com",
      },
      {
        name: "Sally",
        age: 25,
        email: "test2@test.com",
      },
    ]).returning({
      id: UserTable.id,
      userName: UserTable.name,
    });*/

    /**
     * 
     */
    const user = await db
      .insert(UserTable)
      .values([
        {
          name: "Kyle",
          age: 29,
          email: "test@test.com",
        },
        {
          name: "Sally",
          age: 25,
          email: "test2@test.com",
        },
      ])
      .returning({
        id: UserTable.id,
        userName: UserTable.name,
      }).onConflictDoUpdate({
         target: UserTable.email,
         set: { name: "Update Name"},
      });
    

   console.log(user);
}

main();