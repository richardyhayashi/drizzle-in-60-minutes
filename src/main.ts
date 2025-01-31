import "dotenv/config";
import { db } from "./drizzle/db";
import { UserTable }from "./drizzle/schema";

async function main() {
  /**
   * Test insert
   */
  // await db.insert(User).values({
  //    name: "Kyle",
  // });
  // const user = await db.query.User.findFirst();
  // console.log(user);

  /**
   * Delete all entries in UserTable
   */
  await db.delete(UserTable);

  /**
   * Insert Single
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
  
   const user = await db.insert(UserTable).values([
      {
         name: "Kyle",
         age: 29,
         email: "test@test.com",
      },
      {
         name: "Sally",
         age: 25,
         email: "test2@test.com"
      }
   ]).returning({
      id: UserTable.id,
      userName: UserTable.name,
   })/*.onConflictDoUpdate({
      target: UserTable.email,
      set: {name: "Update Name"},
   });*/

  console.log(user);
}

main();