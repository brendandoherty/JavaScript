var streetNumber = [];
var streetName = [" New York Ave\n", " New Jersey Ave\n", " Connecticut Ave\n"];
var cityName = ["Los Angeles, ", "Boston, ", "Des Moines, " ];
var stateName = ["California ", "Massachusettes ", "Iowa "];
var zipCode = [];

var i = 1000;
var highNumber = 9999; 

while (i <= highNumber) {
	streetNumber.push(i); 
	i++;
};

var addressNumber = streetNumber[Math.floor(Math.random() * streetNumber.length)];
var addressStreet = streetName[Math.floor(Math.random() * streetName.length)];
var addressCity = cityName[Math.floor(Math.random() * cityName.length)];
var addressState = stateName[Math.floor(Math.random() * stateName.length)];

var j = 90001
var highZip = 90089

while (j <= highZip) {
	zipCode.push(j); 
	j++;
};

var addressZip = zipCode[Math.floor(Math.random() * zipCode.length)];


console.log('\n' + addressNumber + addressStreet + addressCity + addressState + addressZip + '\n');
