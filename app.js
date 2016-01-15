
	var FizzBuzz = function (number){
		for(i=1; i<= number; i++) {
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
var userAnswer=prompt('Enter a number below!');
while( isNaN(userAnswer) || userAnswer % 1 != 0){
	userAnswer=prompt('Please enter a whole number');
};
userAnswer = Number(userAnswer);

FizzBuzz(userAnswer);


