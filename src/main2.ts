import "dotenv/config";
import { db } from "./drizzle/db";
import { UserTable }from "./drizzle/schema";
import { sql } from "drizzle-orm";

async function main() {
  const users = await db.query.UserTable.findMany({
    //columns: { email: true },
    //columns: { email: false },
    columns: { name: true, email: true },
    extras: {
      lowerCaseName: sql<string>`lower(${UserTable.name})`.as("lowerCaseName"),
   },
  });

  console.log(users);
}

main();