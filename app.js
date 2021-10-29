import validator from "validator";

import getNotes from "./notes.js";

import chalk from "chalk";

console.log(getNotes());
console.log(chalk.green.bold.italic("Success :)"));
