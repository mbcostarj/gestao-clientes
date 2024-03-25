import { client } from "../database/client.js";

export class CustomerRepository {
  async create(data) {
    const { id, name, email, phone } = data;

    const command = await client.query(`
      INSERT INTO "customers" (id, name, email, phone)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `, [
      id,
      name,
      email,
      phone,
    ]);

    const customer = command.rows[0];
    return customer;
  }

  async update(data) {
    const { id, name, email, phone } = data;

    const command = await client.query(`
      UPDATE "customers" SET "name"=$2, "email"=$3, "phone"=$4
      WHERE "id"=$1 RETURNING *
    `, [
      id,
      name,
      email,
      phone,
    ]);

    const customer = command.rows[0];
    return customer;
  }

  async find(){
    const customer = await client.query(` SELECT id,name,email,phone FROM "customers" ORDER BY name ASC`);
    return customer.rows;
  }
}