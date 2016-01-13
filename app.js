	var userAnswer=prompt('Enter a number below!');

	var FizzBuzz = function (x){
		var convertNumber = +userAnswer;
		var xNumber = parseInt(userAnswer);
		for(i=1; i<= xNumber; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
	}
	else if (i % 5 === 0) {
		console.log("buzz");
	}
	else if(i % 3 === 0 ) {
		console.log("fizz");
	}
	else {
		console.log(i);
	}
} 
	};	
if(isNaN(convertNumber)){
	prompt("Please enter a number only!");
}
else if(xNumber % 1 !== 0)
{
	prompt("Please enter a whole number only!");
}
else{
FizzBuzz(userAnswer);
};
