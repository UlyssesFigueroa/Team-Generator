// NPM Modules
const inquirer = require("inquirer");

// Local Modules
const render = require("./lib/htmlrenderer");
const questions = require("./lib/questions");

// Constructors
const Manager = require("./lib/constructors/Manager");
const Engineer = require("./lib/constructors/Engineer");
const Intern = require("./lib/constructors/Intern");

// Global Variables
const teamMembers = [
  new Manager("Brent", 1, "brent@trilogyed.com", 200),
  new Engineer("Tucker", 2, "tbeauchamp@2u.com", "tuckerbeauchamp"),
  new Intern("Becky", 3, "becky@becky.com", "UofA"),
  new Intern("Shelly", 4, "shelly@shelly.com", "UofA"),
  new Intern("Ulysses", 5, "this2willpass@aol.com", "UofA")
];
/***
 * THIS PROJECT IS NOT COMPLETE.
 * YOU WILL NEED TO BUILD YOUR HTML LAYOUTS
 * PROMPT THE USER FOR ALL OF THEIR DIFFERENT TEAM MEMBERS
 */


// function prompt() {
//     return inquirer.prompt([
//         {
//           type: "confirm",
//           name: "test",
//           message: "Would you like to set up a team?",
//         },
//     ])
// };



async function init() {
  try {
    const response = await inquirer.prompt(questions.createTeam);
    newTeam = response.newTeam;
    console.log(newTeam);

    while (newTeam) {
      const memberAdd = await inquirer.prompt(questions.addEmployee);

      if (memberAdd.addEmp) {
        const member = await inquirer.prompt(questions.employeeQuestions);
        const empJobType = member.empJob;
        let newId = parseInt(member.empId);

        if (empJobType == "Manager") {
          const res = await inquirer.prompt(questions.managerQuestion);
          let number = parseInt(res.empNumber);
          const manager = await new Manager(member.empName, newId, member.empEmail, number);
          teamMembers.push(manager);
        }

        //if engineer person being added ask the eng questions and them push to the team member's array
        else if (empJobType == "Engineer") {

          const res = await inquirer.prompt(questions.engineerQuestion);
          const engineer = new Engineer(member.empName, newId, member.empEmail, res.githubName);
          teamMembers.push(engineer);
        }

        //if intern person being added ask the intern questions and them push to the team member's array
        else if (empJobType == "Intern") {

          const res = await inquirer.prompt(questions.internQuestion);
          const intern = new Intern(member.empName, newId, member.empEmail, res.school);
          teamMembers.push(intern);
        }
        else {
          member.emp
          return;
        }

        //when user not longer wants to add people, stop the while loop and call the render function so HTML it's created.
      }
      else {
        render(teamMembers);
        return;
      }
    }
  }
  catch (err) {
    console.log(err);
  }
}
// console.log(data);

init();