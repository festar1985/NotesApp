import validator from "validator";
import { getNote, addNote, removeNote, listNotes } from "./notes.js";
import chalk from "chalk";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

console.log(chalk.yellow.bold.italic("Program Started:)"));

const yarg = yargs(hideBin(process.argv));

// Yargs stored version number
yarg.version("1.0.0");

// --- ADD COMMAND ----
yarg.command({
  command: "add",
  describe: "Add a Note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note content ",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    addNote(argv.title, argv.body);
    //console.log(`Title: ${argv.title} and body is ${argv.body}`);
  },
});

// --- REMOVE COMMAND ---

yarg.command({
  command: "remove",
  describe: "Remove a Note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    removeNote(argv.title);
  },
});

// --- READ COMMAND ---

yarg.command({
  command: "read",
  describe: "Reading a Note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    getNote(argv.title);
  },
});

// --- LIST COMMAND ---

yarg.command({
  command: "list",
  describe: "Listing a Note",
  handler() {
    listNotes();
  },
});

yarg.parse();

console.log(chalk.blue.bold.italic("Program Ended:)"));
