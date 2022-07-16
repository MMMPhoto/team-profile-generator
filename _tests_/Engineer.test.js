import Engineer from "../lib/engineer.js";

const person = new Engineer('Thomas', 47, 'Tmantheman@hmail.com', 'CodermanTOM');

describe("Engineer tests", () => {
    describe("Test the role", () => {
        it("should return a string 'Employee'", () => {          
            expect(person.getRole()).toEqual('Engineer');
        });
    });
    describe("Test the name", () => {
        it("should return the name given", () => {          
            expect(person.getName()).toEqual('Thomas');
        });
    });
    describe("Test the id", () => {
        it("should return the id given", () => {          
            expect(person.getId()).toEqual(47);
        });
    });
    describe("Test the email", () => {
        it("should return the email given", () => {          
            expect(person.getEmail()).toEqual('Tmantheman@hmail.com');
        });
    });
    describe("Test the github username", () => {
        it("should return the github username given", () => {          
            expect(person.getGithub()).toEqual('CodermanTOM');
        });
    });
});