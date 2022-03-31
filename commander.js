#!/usr/bin/env node

const program = require("commander");

const {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomer,
  createReop,
} = require("./index");

program.version("1.0.0").description("command line tool");
const { prompt } = require("inquirer");

const question = [
  {
    type: "input",
    name: "first_name",
    description: "Enter your first name",
  },
  {
    type: "input",
    name: "last_name",
    description: "Enter your last name",
  },
  {
    type: "input",
    name: "email",
    description: "Enter your email",
  },
  {
    type: "input",
    name: "phone",
    description: "Enter your phone",
  },
];

// program
//   .command("add <first_name> <last_name> <phone> <email>")
//   .alias("a")
//   .description("add a customer")
//   .action((first_name, last_name, email, phone) => {
//     addCustomer({ first_name, last_name, email, phone });
//   });

program
  .command("add")
  .alias("a")
  .description("Add a new customer")
  .action(() => {
    prompt(question).then((answers) => addCustomer(answers));
  });

program
  .command("find <name>")
  .alias("f")
  .description("Find a customer")
  .action((name) => findCustomer(name));

program
  .command("update <_id>")
  .alias("u")
  .description("Update a customer")
  .action(() => {
    prompt(question).then((answers) => updateCustomer(_id, answers));
  });

program
  .command("delete <id>")
  .alias("d")
  .description("Delete a customer")
  .action((_id) => removeCustomer(_id));
program
  .command("list")
  .alias("l")
  .description("List all customer")
  .action(() => listCustomer());

program
  .command("clone <repo_url>")
  .description("clone a git repo")
  .action((url) => createReop(url));
program.parse(process.argv);
