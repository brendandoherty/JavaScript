/**
 * Question 1
 * Let's create a data model for storing information about a class.
 */

 var myClass = {
 	name: 'Spaceology 101',
 	startDate: '12/10/2020',
 	school: 'General Assembly',
 	instructor: {
 		firstName: 'Stephen',
 		lastName: 'Hawking',
 		age: 78
 	},
 	students: [
 		{
 			firstName: 'Jill',
 			age: 24,
 			grades: [0.95, 0.89],
 		},
 		{
 			firstName: 'Bill',
 			age: 27,
 			grades: [0.82, 0.88],
 		}
 	],
 };
 // Log the instructor's last name //
 console.log(myClass.instructor.lastName);
 // Log the second score of the first student in the class //
 console.log(myClass.students[0].grades[1]);


/**
 * Question 2
 * Create a data model for a quiz for our class.
 */

 var quiz = {
 	name: 'Space Quiz 1',
 	className: 'Spaceology',
 	questions: [
 		{
 			prompt: 'What is space?',
 			answer: 'The final frontier',
 		},
 		{
 			prompt: 'Which planet is closest to the sun?',
 			answer: 'Mercury',
 		},
 	]
 };
 // Log how many questions are on this quiz //
 console.log(quiz.questions.length);
