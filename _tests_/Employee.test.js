import Employee from "../lib/employee.js";

const person = new Employee('John', 12, 'John12@gmail.com');

describe("Employee tests", () => {
    describe("Test the role", () => {
        it("should return a string 'Employee'", () => {          
            expect(person.getRole()).toEqual('Employee');
        });
    });
    describe("Test the name", () => {
        it("should return the name given", () => {          
            expect(person.getName()).toEqual('John');
        });
    });
    describe("Test the id", () => {
        it("should return the id given", () => {          
            expect(person.getId()).toEqual(12);
        });
    });
    describe("Test the email", () => {
        it("should return the email given", () => {          
            expect(person.getEmail()).toEqual('John12@gmail.com');
        });
    });
});