export class ListCustomer {
  customerRepository = null;

  constructor(customerRepository){
    this.customerRepository = customerRepository;
  }

  async find(){
    return await this.customerRepository.find();
  }

}