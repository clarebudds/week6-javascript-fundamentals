const cohort = {
  name: "May2022",
  id: 1234,
  student_names: ["Clare", "Aisha", "Ben", "David"],
};

const printCohort = (cohort) => {
  console.log(
    cohort.id +
      " " +
      cohort.name +
      " " +
      cohort.student_names.length +
      " students in this cohort"
  );
};

console.log(printCohort(cohort));

// Declare a function that accepts that object as argument and print a message with the following structure:

// <COHORT_ID> - <COHORT_NAME> - <NUMBER_OF_STUDENTS> students in this cohort
