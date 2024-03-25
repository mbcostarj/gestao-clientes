import express from 'express';
import cors from 'cors';
import { CustomerRepository } from "./repositories/customer-repository.js";
import { CreateCustomer } from './use-case/create-customer.js';
import { UpdateCustomer } from './use-case/update-customer.js';
import { ListCustomer } from './use-case/list-customer.js';

const app       = express();
const port      = 3002;
const customerRepository = new CustomerRepository();
const createCustomer     = new CreateCustomer(customerRepository);
const updateCustomer     = new UpdateCustomer(customerRepository);
const listCustomer       = new ListCustomer(customerRepository);

app.use(cors());
app.use(express.json());

app.post('/clientes', async (req, res) => {
  const customer = await createCustomer.handle(req.body)
  return res.json(customer);
})

app.put('/clientes/:id', async (req, res) => {
  const customer = await updateCustomer.handle(req.params.id, req.body)
  return res.json(customer);
})

app.get('/clientes', async (req, res) => {
  return res.json( await listCustomer.find() );
})

app.listen(port, () => console.log("localhost:3002") );