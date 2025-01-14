import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Employee } from "./data/employee.dto";
import { EmployeeService } from "./employee.service";

@Controller("employee")
export class  EmployeeController {

    constructor(private employeeService : EmployeeService){

    }
    // add employee
    @Post("/add")
    addEmployee(@Body() employee : Employee) : string {
        return this.employeeService.addEmployeeService(employee);
    }
    // update employee
    @Put("/update")
    updateEmployee (@Body() employee : Employee) : string {
        return this.employeeService.updateEmployeeService(employee);
    }

    // delete employee
    @Delete("/delete/:id")
    deleteEmployee(@Param("id") employeeId : string) : string {
        return this.employeeService.deleteEmployeeService(employeeId);
    }
    // findAll employee
    @Get("/findAll")
    findAllEmployees() : Employee[] {
        return this.employeeService.findAllEmployees();
    }
}