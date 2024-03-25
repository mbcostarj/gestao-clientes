import { test, mock } from 'node:test'
import assert from 'node:assert'

import { CreateCustomer } from './create-customer.js'
import { CustomerRepository } from '../repositories/customer-repository.js'

const customerRepository = new CustomerRepository();
const createCustomer = new CreateCustomer(customerRepository);

mock.method(customerRepository, 'create', data => {
  console.log('Created customer')
  return data
})

test("create new customer", async () => {
  const customer = await createCustomer.handle({
    id: "2343432-234234234-23423-423434",
    name: "Fulano de Tal",
    email: "fulano@email.com",
    phone: "2122334567",
  })
  assert.ok(customer.id)
})