import { Injectable } from "@nestjs/common";
import { Employee, EmployeeDocument } from "./schema/employee";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class EmployeeService {

    constructor(@InjectModel(Employee.name) private employeeModel : Model<EmployeeDocument>){
        
    }
    public employees : Employee[] = [];

    // add employee
    addEmployeeService(employee : Employee) : string {
        this.employees.push(employee);
        return "Employee has been added sucessfully";
    }

    // find / get employee
    findAllEmployees() : Employee[] {
        return this.employees;
    }

    // update employee
    updateEmployeeService(employee : Employee) : string {
        let index = this.employees.findIndex((currentEmployee)=>{
            return currentEmployee.id == employee.id;
        });
        this.employees[index] = employee;
        return "Employee has been updated succesfully";
    }

    // delete employee
    deleteEmployeeService(employeeId : string) : string {
        this.employees =this.employees.filter((employee) => {
            return employee.id != employeeId;
        });
        return "Employee has been deleted Successfully";
    } 
    //findEmployeeById
    //findEmployeeById()
}