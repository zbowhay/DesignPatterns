import { Command } from '../framework/command';
import { CustomerService } from '../customerService';



export class AddCustomerCommand implements Command {
    private service: CustomerService;

    constructor(customerService: CustomerService) {
        this.service = customerService;
    }

    execute() {
        this.service.addCustomer();
    }
}