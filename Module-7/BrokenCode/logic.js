//When the factButton is clicked...
$("#factButton").on("click", function() {
	//We generate a random number between 0 and 4 (the number of facts in teh booFacts array)
	var number = Math.floor((Math.random() * booFacts.length));
	//We display the fact from the booFacts array that is in the random position we just generated
	$("#factText").text(booFacts[number])
})

//These are my booFacts
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]

//When the textPink button is pressed..
$("#textPink").on("click", function() {
	// Change the funText to pink.
	$("#funText").css("color", "pink")
})

// When the textOrange button is pressed...
$("#textOrange").on("click", function() {
	// Change the funText to orange.
$("#funText").css("color", "orange")
})

// When the textGreen button is pressed...
$("#textGreen").on("click", function() {
	// Change the funText to green. 
	$("#funText").css("color", "green")
})

// When the boxGrow button is clicked...
$("#boxGrow").on("click", function() {
	// Increase the size of the box.
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

// When the boxShrink button is clicked...
$("#boxShrink").on("click", function() {
	// Decrease the size of the box. 
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})