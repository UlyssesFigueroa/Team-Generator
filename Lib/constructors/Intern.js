const Employee = require("./Employee");

/**
 * Class representing an Intern.
 * @class
 * @extends Employee
 */
class Intern extends Employee {
    /**
     * Create an Engineer.
     * @param {string} name - Name of the Manager
     * @param {number} id - ID of the Manager
     * @param {string} email - Email of the Manager
     * @param {string} school - Github User Name
     */
    constructor(name, id, email, school) {
        if
            (!school || !school.trim().length) {
            throw new Error("Expected parameter 'school' to be a non-empty string"
            );
        } 
        super(name, id, email);
        this.school = school;
    }
}

module.exports = Intern;