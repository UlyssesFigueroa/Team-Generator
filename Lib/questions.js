var createTeam = [
    {
        type: "confirm",
        message: "Would you like to create a team?",
        name: "newTeam",
        // default: true,
    }
];


var addEmployee = [
    {
        type: "confirm",
        message: "Would you like to add a team member?",
        name: "addEmp",
    }
]

var employeeQuestions = [
    {
        type: "checkbox",
        message: "what type of employee would you like to add?",
        name: "empJob",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
        ]
    },
    {
        type: "input",
        message: "What is the employee name?",
        name: "empName",
    },
    {
        type: "input",
        message: "What is the employee ID?",
        name: "empId",
    },
    {
        type: "input",
        message: "What is the employee e-mail?",
        name: "empEmail"
    },
];


const managerQuestion = {
    type: "input",
    message: "What is the employee phone number?",
    name: "empNumber"
};

const engineerQuestion = {
    type: "input",
    message: "What is the employee Github username?",
    name: "githubName"
};

const internQuestion = {
    type: "input",
    message: "What school did the employee attend?",
    name: "school"
};



module.exports = {
    createTeam: createTeam,
    employeeQuestions: employeeQuestions,
    managerQuestion: managerQuestion,
    engineerQuestion: engineerQuestion,
    internQuestion: internQuestion,
    addEmployee: addEmployee,
}