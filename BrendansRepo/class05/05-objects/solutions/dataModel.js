/**
 * Question 1
 * Let's create a data model for storing information about a class.
 */
 var myClass = {
 	name: 'Spaceology 101',
 	startDate: '12/10/2020',
 	school: 'GA',
 	instructor: {
 		firstName: 'Jane',
 		lastName: 'Doe',
 		age: 29
 	},
 	students: [
 		{
 			name: 'Jill',
 			age: 24,
 			grades: [0.95, 0.89]
 		},
 		{
 			name: 'Bill',
 			age: 34,
 			grades: [0.87, 0.94]
 		}
 	]
 };
// What is the instructor's last name?
console.log(myClass.instructor.lastName);

// What did the first student get on the second quiz?
console.log(myClass.students[0].grades[1])

/**
 * Question 2
 * Create a data model for a quiz for our class.
 */
var quiz = {
	name: 'Quiz 1',
	className: 'Spaceology 101',
	questions: [
		{
			prompt: 'What is space?',
			answer: 'The final frontier'
		},
		{
			prompt: 'What planet is closest to the sun?',
			answer: 'Mercury'
		}
	]
};


// How many questions?
console.log(quiz.questions.length);






















