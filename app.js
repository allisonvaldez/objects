let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://bit.ly/2ysFran"
};

console.log("Starting Object:");
console.log(programming);

// Question 1:
console.log("1. programming.languages[3] = \"Go\"");
programming.languages[3] = "Go";
console.log(programming);

// Question 2:
console.log("2. programming.difficulty = 7");
programming.difficulty = 7;
console.log(programming);

// Question 3:
console.log("3. delete programming.jokes;");
delete programming.jokes;
console.log(programming);

// Question 4:
console.log("4. programming.isFun = true; ");
programming["isFun"] = true;
console.log(programming);