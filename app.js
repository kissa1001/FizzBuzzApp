	var userAnswer=prompt('Enter a number below!');
var xNumber = parseInt(userAnswer);
	var FizzBuzz = function (x){
		x = + userAnswer;
		for(i=1; i<= x; i++) {
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
	}	

FizzBuzz(userAnswer);

