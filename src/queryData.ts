import "dotenv/config";
import { db } from "./drizzle/db";
import { UserPreferencesTable, UserTable }from "./drizzle/schema";
import { asc, desc, eq, sql } from "drizzle-orm";

async function main() {
  console.log("***Query Data***");

  /**
   * Specific columns
   */
  /*const users = await db.query.UserTable.findMany({
    columns: { name: true, email: true },
  });*/

  /**
   * All except email
   */
  /*const users = await db.query.UserTable.findMany({
    columns: { name: false },
  });*/

  /**
   * Extras
   */
  /*const users = await db.query.UserTable.findMany({
    columns: { 
      name: true,
      email: true
    },
    extras: {
      lowerCaseName: sql<string>`lower(${UserTable.name})`.as("lowerCaseName"),
    },
  });*/

  /*const users = await db.query.UserTable.findMany({
   columns: {
      id: true,
      name: true
   },
   //limit: 1,
   offset: 1,
  });*/

  /*await db.insert(UserPreferencesTable).values({
   userId: '36768ea4-3b8a-4173-a809-fa546808e4e3',
   emailupdates: true,
  });*/

  /*const users = await db.query.UserTable.findMany({
    columns: {
      id: true,
      name: true
   },
    with: {
      preferences: true,
    },
  });*/

  /*const users = await db.query.UserTable.findMany({
    columns: {
      id: true,
      name: true,
    },
    with: {
      preferences: {
         columns: {
            emailUpdates: true,
         },
      },
    },
  });*/

  /*const users = await db.query.UserTable.findMany({
    columns: {
      id: true,
      name: true,
    },
    with: {
      posts: { with: { postCategory: true } }
    },
  });*/

  /**
   * Non-function version
   */
  /*const users = await db.query.UserTable.findMany({
    columns: {
      id: true,
      name: true,
      age: true,
    },
    orderBy: asc(UserTable.age),
    //orderBy: desc(UserTable.age),
  });/*

  /**
   * Function version
   */
  /*const users = await db.query.UserTable.findMany({
    columns: {
      id: true,
      name: true,
      age:true,
    },
    orderBy: (table, { asc }) => asc(table.age),
  });*/

  /**
   * 
   */
  const users = await db.query.UserTable.findMany({
    columns: {
      id: true,
      name: true,
      age: true,
    },
    where: (table, funcs) => funcs.between(table.age, 20, 29),
  });

  console.log(users);
}

main();