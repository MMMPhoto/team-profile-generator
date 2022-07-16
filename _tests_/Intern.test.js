import Intern from "../lib/intern.js";

const person = new Intern('Stanley', 18, 'Stan-457595403@yahoo.com', 'Georgia State University');

describe("Intern tests", () => {
    describe("Test the role", () => {
        it("should return a string 'Intern'", () => {          
            expect(person.getRole()).toEqual('Intern');
        });
    });
    describe("Test the name", () => {
        it("should return the name given", () => {          
            expect(person.getName()).toEqual('Stanley');
        });
    });
    describe("Test the id", () => {
        it("should return the id given", () => {          
            expect(person.getId()).toEqual(18);
        });
    });
    describe("Test the email", () => {
        it("should return the email given", () => {          
            expect(person.getEmail()).toEqual('Stan-457595403@yahoo.com');
        });
    });
    describe("Test the school", () => {
        it("should return the school given", () => {          
            expect(person.getSchool()).toEqual('Georgia State University');
        });
    });
});