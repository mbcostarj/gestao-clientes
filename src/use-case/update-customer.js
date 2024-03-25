

export class UpdateCustomer {
  customerRepository = null;

  constructor(customerRepository){
    this.customerRepository = customerRepository;
  }

  async handle(id,data){
    const { name, email, phone } = data;

    const updatedCustomer = await this.customerRepository.update({
      id: id,
      name,
      email, 
      phone,
    });

    return updatedCustomer;
  }

}