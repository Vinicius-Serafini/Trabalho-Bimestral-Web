import { Injectable } from '@nestjs/common';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {

    customers: Array<Customer> = [];


    constructor() {
    }

    findAll(){
        return this.customers;
    }

    findById(id){
        for (let customer of this.customers){
            if (customer.id == id){
                return customer;
            }
        }
    }

    save(customer: Customer){
        this.customers.push(customer);
    }
}