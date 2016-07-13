var gamePrompt = require('game-prompt');
var colors = require('colors');

/// Global variables ///
var playerName; 
var vehicleName;
var gas = 1000;
var playerInventory = [];
var destinations = [
	{
		name: 'Earth',
		distance: 10,
		handler: welcomeEarth
	},
	{
		name: 'Mesnides',
		distance: 20,
		handler: welcomeMesnides
	},
	{
		name: 'Laplides',
		distance: 50,
		handler: welcomeLaplides
	},
	{
		name: 'Kiyturn',
		distance: 120,
		handler: welcomeKiyturn
	},
	{
		name: 'Aenides',
		distance: 25,
		handler: welcomeAenides
	},
	{
		name: 'Cramuthea',
		distance: 200,
		handler: welcomeCramuthea
	},
	{
		name: 'Smeon T9Q',
		distance: 400,
		handler: welcomeSmeon
	},
	{
		name: 'Gleshan 7Z9',
		distance: 85,
		handler: welcomeGleshan
	},
];

/// Game code ///
function youLose () {
	gamePrompt('GAME OVER. Your ship has run out of gas and you will not be able to make it back to Earth.'.red)
};

function youWin () {
	gamePrompt('You arrive back on Earth with 3 artifacts from alien cultures. The President of Earth offers you the medal of discovery for your efforts and declares you a global hero. YOU WIN -- GAME OVER -- '.blue)
};

function addItemToInventory(item) {
	if (playerInventory.indexOf(item) < 0) {
		playerInventory.push(item);
	}
}

function startGame() {
	gamePrompt('S.R.S.V. Press ENTER to start.', intro);
}

function intro() {
	gamePrompt('You are the captain of a ' + 
		'Solo Research Space Vehicle (S.R.S.V.) on ' +
		'an expedition to explore foreign planets. ' +
		'Your mission is to make contact with three ' +
		'alien life forms, acquire an artifact representative ' +
		'of their culture, and bring back your findings to Earth.', collectInfo);
};

function collectInfo() {
	gamePrompt([
		'A voice comes on over the intercom.', 
		'"Please state your name for identity verification"'.yellow,
		], collectName);
};

function collectName(name) {
	playerName = name; 

	gamePrompt([
		'"Thank you, Captain ' + playerName + '."',
		'"Please state your vehicle name for identity verification"'.yellow
		], collectVehicleName);
};

function collectVehicleName(vname) {
	vehicleName = vname;

	gamePrompt('"Captain ' + playerName + ', of the starship ' + vehicleName + ', you have been cleared for launch."' + 
		' "Your starship has been equipped with 1000 gallons of fuel for your journey. Godspeed!"',
		 collectDestination);
};

function collectDestination() {
	var fuelPrompt = 'You have ' + gas + ' gallons of gas remaining.';
	var travelPrompt = 'Where to, Captain ' + playerName + '?';

	destinations.forEach(function(destination) {
		travelPrompt += '\n(' + destination.name.charAt(0) + ')' +
		destination.name.substr(1) + ' - ' +
		destination.distance + ' lightyears'
	});

	gamePrompt([ fuelPrompt,
				travelPrompt
				], navigate);
}

function navigate(planet) {
	var destination; 
	destinations.forEach(function(d) {
		if (planet.toUpperCase() === d.name.charAt(0)) {
			destination = d;
		}
	});
	if (!destination) {
		gamePrompt('Sorry, Captain. That is not a planet in this galaxy.', navigate); 
	} else {
		gas -= destination.distance;
		if (gas <= 0) {
			youLose();
		} else {
			gamePrompt([
				'Travelling to ' + destination.name + ' using ' + destination.distance + ' gallons of gas',
				'You now have ' + gas + ' gallons of gas remaining.'
				], destination.handler)
		}
	}
};
/// Mesnides ///

function welcomeMesnides() {
	gamePrompt('You\'ve arrived at Mesnides. As you land, a representative of the Mesnidian people is there to greet you.\n' +
		'"Welcome, traveler, to Mesnides."\n'.green, assistMesnides);
};

function assistMesnides() {
	gamePrompt('"How can we assist you?"\n'.green + 
		'Ask about (A)rtifact.\nAsk about other (P)lanets.\n(L)eave.', answerMesnides);
};

function answerMesnides(ans) {
	if (ans.toUpperCase() === 'A') {
		addItemToInventory('Myoin Horn');
		gamePrompt('"Here, take this '.green + 'Myoin Horn '.red + ', an ancient Mesnidian instrument."\n'.green +
		 'Myoin Horn added to inventory.' +
		 ' You now have ' + playerInventory.length + ' items in your inventory.', 
					assistMesnides); 
		} else if (ans.toUpperCase() === 'P') {
			gamePrompt('"Well, Laplides suffered from atomic war and has been uninhabited for centuries. You would do well to avoid it on your journey."'.green,
				assistMesnides)
		} else if (ans.toUpperCase() === 'L') {
			gamePrompt(' Aye, Captain. Returning to orbit. ', collectDestination)
		} else {
			gamePrompt('I\'m sorry traveler, but I don\'t understand your question', assistMesnides);
}
};			

/// Earth ///
function welcomeEarth () {
	if (playerInventory.length >= 3) {
		youWin();
	} else {
		gas += 10;
		gamePrompt('You\'ve arrived back to Earth but you have not completed your mission to bring back 3 artifacts from alien races. You refuel your ship with 10 gallons of gas and return to space.', 
		collectDestination);
}
};	

/// Laplides ///
function welcomeLaplides () {
	gamePrompt('You enter orbit around Laplides. Looking down at the planet, you see signs of atomic war and realize there is no option but to turn around.', 
		collectDestination);
};

/// Kiyturn /// 

function welcomeKiyturn() {
	gamePrompt('You\'ve arrived at Kiyturn. As you land, a representative of the Kiyturn people is there to greet you.', assistKiyturn);
};

function assistKiyturn() {
	gamePrompt('"Hello, what brings you to Kiyturn? Youre not here to cause trouble are you?"\n'.green + 
		'Ask about (A)rtifact.\nAsk about other (P)lanets.\n(L)eave.', answerKiyturn);
};

function assistKiyturnOne() {
	gamePrompt('How can we assist you?"\n'.green + 
		'Ask about (A)rtifact.\nAsk about other (P)lanets.\n(L)eave.', answerKiyturn);
};

function answerKiyturn(ans) {
	if (ans.toUpperCase() === 'A') {
		addItemToInventory('Glass Bowl');
		gamePrompt('"Here, take this '.green + 'Glass Bowl '.red + ', a symbol of our civilization."\n'.green +
		 'Glass Bowl added to inventory.' +
		 ' You now have ' + playerInventory.length + ' items in your inventory.', 
					assistKiyturn); 
		} else if (ans.toUpperCase() === 'P') {
			gamePrompt('"Im sorry, but we do not leave our planet. The universe, to us, is a beautiful mystery."'.green,
				assistKiyturnOne)
		} else if (ans.toUpperCase() === 'L') {
			gamePrompt(' Aye, Captain. Returning to orbit. ', collectDestination)
		} else {gamePrompt('Im sorry, I dont understand your question.'.green, assistKiyturnOne);
	}
};

/// Aenides ///

function welcomeAenides () {
	gamePrompt('You discover upon arrival to Aenides that they are a hostile people. You attempt to land, but they begin to fire upon your S.R.S.V. and you are forced to retreat.', 
		collectDestination);
};

/// Cramuthea ///

function welcomeCramuthea () {
	gas += 500;
	gamePrompt('Cramuthea has been abandoned due to global environmental disaster, but there are remnants of the people that left. You are able to refuel your ship (+500 gallons) and read a beacon signal that tells you the Cramuthean people have migrated to Smeon T9Q.', 
		collectDestination);
};

/// Smeon T9Q /// 

function welcomeSmeon() {
	gas += 100;
	gamePrompt('You\'ve arrived at Smeon T9Q. As you land, a representative of the Cramuthean people, living on Smeon t9Q, is there to greet you with a welcoming gift of 100 gallons of gas.\n' + 
		'"Hello, welcome to Smeon T9Q.'.green, assistSmeon );
};

function assistSmeon() {
	gamePrompt('"How can we assist you?"\n'.green + 
		'Ask about (A)rtifact.\nAsk about other (P)lanets.\n(L)eave.', answerSmeon);
};

function answerSmeon(ans) {
	if (ans.toUpperCase() === 'A') {
		addItemToInventory('Dried Cramun Flower');
		gamePrompt('"Here, take this '.green + 'Dried Cramun Flower '.red + ', from our home planet of Cramuthea."\n'.green +
		 'Dried Cramun Flower added to inventory.' +
		 ' You now have ' + playerInventory.length + ' items in your inventory.', 
					assistSmeon); 
		} else if (ans.toUpperCase() === 'P') {
			gamePrompt('"Be careful of the people of Aenides. They once tried to take over our planet by force."'.green,
				assistSmeon)
		} else if (ans.toUpperCase() === 'L') {
			gamePrompt(' Aye, Captain. Returning to orbit. ', collectDestination)
		} else {gamePrompt('Im sorry, I dont understand your question.'.green, assistSmeon);
	}
};

/// Gleshan ///

function welcomeGleshan() {
	gamePrompt('You\'ve arrived at Gleshan 7Z9. As you land, a representative of the Gleshan people is there to greet you.\n' + 
		'"Hello, welcome to Gleshan 7Z9.'.green, assistGleshan);
};

function assistGleshan() {
	gamePrompt('"How can we assist you?"\n'.green + 
		'Ask about (A)rtifact.\nAsk about other (P)lanets.\n(L)eave.', answerGleshan);
};

function answerGleshan(ans) {
	if (ans.toUpperCase() === 'A') {
		addItemToInventory('Dried Cramun Flower');
		gamePrompt('"Sorry. We are a poor people and have nothing to offer you."'.green,
		 assistGleshan); 
		} else if (ans.toUpperCase() === 'P') {
			gamePrompt('"A wealthy people, the Cramuthea, once visited our planet many years ago."'.green,
				assistGleshan)
		} else if (ans.toUpperCase() === 'L') {
			gamePrompt(' Aye, Captain. Returning to orbit. ', collectDestination)
		} else {gamePrompt('Im sorry, I dont understand your question.'.green, assistGleshan);
	}
};

startGame();