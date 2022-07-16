import Manager from "../lib/manager.js";

const person = new Manager('Lisa', 1, 'Lisa-the-boss@Lisa.com', '404-555-6789');

describe("Manager tests", () => {
    describe("Test the role", () => {
        it("should return a string 'Manager'", () => {          
            expect(person.getRole()).toEqual('Manager');
        });
    });
    describe("Test the name", () => {
        it("should return the name given", () => {          
            expect(person.getName()).toEqual('Lisa');
        });
    });
    describe("Test the id", () => {
        it("should return the id given", () => {          
            expect(person.getId()).toEqual(1);
        });
    });
    describe("Test the email", () => {
        it("should return the email given", () => {          
            expect(person.getEmail()).toEqual('Lisa-the-boss@Lisa.com');
        });
    });
    describe("Test the office phone number", () => {
        it("should return the office phone number given", () => {          
            expect(person.getOfficeNumber()).toEqual('404-555-6789');
        });
    });
});