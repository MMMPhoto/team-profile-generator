import Employee from "./employee.js";

export default class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    };
    getName = () => {return name};
    getId = () => {return id};
    getEmail = () => {return email};
    getGithub = () => {return github};
    getRole = () => {return 'Engineer'};
};