import { client } from './client.js';


(async function up() {
  // await client.query('CREATE DATABASE mydb')

  await client.query(/* SQL */`
  DROP TABLE IF EXISTS "customers" CASCADE;

  CREATE TABLE IF NOT EXISTS "customers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" INT NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
  );

  -- CreateIndex
  CREATE INDEX IF NOT EXISTS 
    "customers_id_key" ON "customers"("id");
  `)

  await client.end()
})()