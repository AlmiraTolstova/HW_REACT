import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: {
    "alice@mail.com": {
      name: "Алиса",
      grades: {
        math: [5, 4, 5, 4],
        physics: [3, 4, 5],
        chemistry: [5, 5],
      },
    },
    "bob@mail.com": {
      name: "Боб",
      grades: {
        math: [2, 3, 4],
        physics: [5, 5, 4, 5],
        chemistry: [3, 3],
      },
    },
    "carol@mail.com": {
      name: "Кэрол",
      grades: {
        math: [4, 4],
        physics: [3, 3, 3],
      },
    },
  },
  subjects: ["math", "physics", "chemistry"],
};

const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    addGrade(state, action) {
      const { email, subject, grade } = action.payload;

      if (!state.students[email]) return;
      if (!state.subjects.includes(subject)) return;
      if (typeof grade !== "number" || grade < 1 || grade > 5) return;

      const student = state.students[email];

      if (!student.grades[subject]) {
        student.grades[subject] = [grade];
      } else {
        student.grades[subject].push(grade);
      }
    },

    removeLastGrade(state, action) {
      const { email, subject } = action.payload;

      const student = state.students[email];
      if (!student) return;

      const grades = student.grades[subject];
      if (!grades || grades.length === 0) return;

      grades.pop();

      if (grades.length === 0) {
        delete student.grades[subject];
      }
    },

    renameSubject(state, action) {
      const { oldName, newName } = action.payload;

      if (!state.subjects.includes(oldName)) return;
      if (state.subjects.includes(newName)) return;
      if (oldName === newName) return;

      const index = state.subjects.indexOf(oldName);
      state.subjects[index] = newName;

      Object.values(state.students).forEach((student) => {
        if (student.grades[oldName]) {
          student.grades[newName] = student.grades[oldName];
          delete student.grades[oldName];
        }
      });
    },

    addStudent(state, action) {
      const { email, name } = action.payload;

      if (!email || !name) return;
      if (state.students[email]) return;

      state.students[email] = {
        name,
        grades: {},
      };
    },

    removeStudent(state, action) {
      const email =
        typeof action.payload === "string"
          ? action.payload
          : action.payload.email;

      if (!state.students[email]) return;

      delete state.students[email];
    },

    addSubject(state, action) {
      const subject = action.payload;

      if (!subject) return;
      if (state.subjects.includes(subject)) return;

      state.subjects.push(subject);
    },

    removeSubject(state, action) {
      const subject = action.payload;

      if (!state.subjects.includes(subject)) return;
      if (state.subjects.length === 1) return;

      state.subjects = state.subjects.filter((s) => s !== subject);

      Object.values(state.students).forEach((student) => {
        if (student.grades[subject]) {
          delete student.grades[subject];
        }
      });
    },

    updateStudentName(state, action) {
      const { email, newName } = action.payload;

      if (!state.students[email]) return;
      if (!newName) return;

      state.students[email].name = newName;
    },
  },
});

export const {
  addGrade,
  removeLastGrade,
  renameSubject,
  addStudent,
  removeStudent,
  addSubject,
  removeSubject,
  updateStudentName,
} = journalSlice.actions;

export default journalSlice.reducer;
