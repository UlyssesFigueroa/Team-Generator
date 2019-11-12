const Employee = require("./Employee");

/**
 * Class representing an Engineer.
 * @class
 * @extends Employee
 */
class Engineer extends Employee {
    /**
     * Create an Engineer.
     * @param {string} name - Name of the Engineer
     * @param {number} id - ID of the Engineer
     * @param {string} email - Email of the Engineer
     * @param {string} githubName - Github User Name
     */
    constructor(name, id, email, githubName) {
        if
            (!githubName || !githubName.trim().length) {
            throw new Error("Expected parameter 'githubName' to be a non-empty string"
            );
        } 
        super(name, id, email);
        this.githubName = githubName;
    }
}

module.exports = Engineer;