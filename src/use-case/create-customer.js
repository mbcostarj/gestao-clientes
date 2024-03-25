import { randomUUID } from "node:crypto";

export class CreateCustomer {
  customerRepository = null;

  constructor(customerRepository) {
    this.customerRepository = customerRepository
  }

  async handle(data) {
    const { name, email, phone } = data
    const customerId = randomUUID();

    const customer = await this.customerRepository.create({
      id: customerId,
      name,
      email,
      phone,
    })

    return customer;
  }
}