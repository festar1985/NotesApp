import * as fs from "fs";
import chalk from "chalk";

//READING NOTES

export const getNote = (title) => {
  const notes = loadNotes();

  const noteMatch = notes.find((note) => note.title === title);

  if (noteMatch) {
    console.log(chalk.cyan.bold.italic(`The note : ${noteMatch.title}`));
    console.log(
      chalk.green.italic(`Contains the following info: ${noteMatch.body}`)
    );
  } else {
    console.log(chalk.red.bold.italic(`No such note is found`));
  }
};

//ADDING a NOTE

export const addNote = (title, body) => {
  const notes = loadNotes();

  const dublicatedNote = notes.find((note) => note.title === title);

  if (dublicatedNote) {
    return console.log(
      chalk.red.bold.italic("This note is already in the list :)")
    );
  } else {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.bold.italic("New note added :)"));
  }
};

// REMOVE a NOTE

export const removeNote = (noteToRemoveTitle) => {
  const notes = loadNotes();

  const noteMatch = notes.filter((note) => note.title !== noteToRemoveTitle);

  if (noteMatch.length === notes.length) {
    console.log(chalk.red.bold.italic("There is no such note :("));
  } else {
    saveNotes(noteMatch);
    console.log(
      chalk.green.bold.italic(`Removing: ${noteToRemoveTitle} from the list :)`)
    );
  }
};

//LISTING NOTES

export const listNotes = () => {
  const notesData = loadNotes();
  console.log(chalk.cyan.bold.italic("Your notes:"));
  notesData.forEach((note) => {
    console.log(chalk.green.bold.italic(note.title));
  });
};

//Helper functions

const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
};

const loadNotes = () => {
  try {
    const dataJSON = fs.readFileSync("notes.json").toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
