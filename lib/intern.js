import Employee from "./employee.js";

export default class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    };
    getName = () => {return name};
    getId = () => {return id};
    getEmail = () => {return email};
    getSchool = () => {return school};
    getRole = () => {return 'Intern'};
};