/**
 * Question 1
 * Create a program that will grade a random test score between 0 and 100.
 *
 * Grading scale:
 * - An "A" is between [90 and 100]
 * - A "B" is between [80 and 90)
 * - A "C" is between [70 and 79)
 * - A "D" is between [60 and 69)
 * - An "F" is between [0 and 60)
 *
 * Log both the random number grade and its corresponding letter grade to the console.
 */

var testScore = Math.ceil(Math.random() * 100);

var letterGrade;
if (testScore >= 90) { letterGrade = "A";
} else if (testScore >= 80) { letterGrade = "B";
} else if (testScore >= 70) { letterGrade = "C";
} else if (testScore >= 60) { letterGrade = "D";
} else { letterGrade = "F"; }
console.log('My first number grade is ' + testScore + ' and my letter grade is ' + letterGrade);


/**
 * Question 2
 * Create a second random test score between 0 and 100. Calculate the average of the two test scores.
 * If the average is a "B" or better, log to the console "Well done!" else log "Better luck next time".
 *
 */

var secondTestScore = Math.ceil(Math.random() * 100);

var secondLetterGrade;
if (secondTestScore >= 90) { secondLetterGrade = "A";
} else if (secondTestScore >= 80) { secondLetterGrade = "B";
} else if (secondTestScore >= 70) { secondLetterGrade = "C";
} else if (secondTestScore >= 60) { secondLetterGrade = "D";
} else { secondLetterGrade = "F"; }
console.log('My second number grade is ' + secondTestScore + ' and my letter grade is ' + secondLetterGrade);

var average = (testScore + secondTestScore) / 2;

var averageLetterGrade;
if (average >= 90) { averageLetterGrade = "A";
} else if (average >= 80) { averageLetterGrade = "B";
} else if (average >= 70) { averageLetterGrade = "C";
} else if (average >= 60) { averageLetterGrade = "D";
} else { averageLetterGrade = "F"; }

// Use a ternary to assign the message.
var message = average >= 80 ? 'Well done!' : "Better luck next time!";
console.log ('My average score is ' + average + ' and my average letter grade is ' + averageLetterGrade);
console.log (message);



