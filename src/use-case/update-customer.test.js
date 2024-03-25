import { test, mock } from 'node:test'
import assert from 'node:assert'

import { UpdateCustomer } from './update-customer.js'
import { CustomerRepository } from '../repositories/customer-repository.js'

const customerRepository = new CustomerRepository();
const updateCustomer = new UpdateCustomer(customerRepository);

mock.method(customerRepository, 'update', data => {
  console.log('Update customer')
  return data
})

test("update customer", async () => {
  const customer = await updateCustomer.handle({
    id: "2343432-234234234-23423-423434",
    name: "Fulano de Tal",
    email: "fulano@email.com",
    phone: "2122334567",
  })
  assert.ok(customer.id)
})