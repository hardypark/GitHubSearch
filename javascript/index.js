//index.js 
$(document).ready(function () {

"use strict";  
/* <-- Newer versions of js will interpret this and
will compile the code in runtime with a stricter rule. 
Why is it just a string? So that older versions of js in browsers can just read it as a string
and it would still be perfectly valid JS. 
Not a bad idea to add these to most of your scripts in order to catch errors in the browser tools. 
*/

var resultList = $("#resultList");
resultList.text("Results Displayed Here ...");

var toggleButton = $("#toggleButton");
toggleButton.on("click", function() {
	resultList.toggle(500);

	if(toggleButton.text() == "Hide") 
	{
		toggleButton.text("Show");
	}
	else 
	{
		toggleButton.text("Hide");
	}
});

var listItems = $("header nav li");
listItems.css("font-weight", "bold");
listItems.filter(":first").css("font-size", "18px");


$("#gitHubSearchForm").on("submit", function() {
	
	var searchPhrase = $("#searchPhrase").val();
	var useStars = $("#useStars").val();
	var langChoice = $("#langChoice").val();

	if(searchPhrase)
	{
		resultList.text("Performing search...");

		var gitHubSearch = "https://api.github.com/search/repositories?q=" + encodeURIComponent(searchPhrase);

		if(langChoice != "All") {
			gitHubSearch += "+language:" + encodeURIComponent(langChoice);
		}

		if(useStars) {
			gitHubSearch += "&sort=stars";
		}

		//var gitHubSearch = "https://api.github.com/search/repositories?q=jquery+language:javascript&sort=stars";

		$.get(gitHubSearch, function(r) {
			//console.log(r.items.length);
			displayResults(r.items);
		});
	}

	
	return false;
});


/**
* No longer need these mocked up results since we are pulling actual data
* from internet using jQuery
**/
// var results = [{
// 	name: "jQuery",
// 	language: "JavaScript",
// 	score: 4.5,
// 	showLog: function() {

// 	},
// 	oàner: {
// 		login: "hardypark",
// 		id: 123456a
// 	}
// }, {
// 		name: "jQuery UI",
// 		language: "JavaScript",
// 		score: 3.5,
// 		showLog: function() {

// 		},
// 		owner: {
// 			login: "hardypark",
// 			id: 123456
// 		}
// }];

function displayResults(results) {
	resultList.empty();
	$.each(results, function(i, item) {
		var newResult = $("<div class='result'>" +
		"<div class='title'>" + item.name + "</div>" +
		"<div>Language: " + item.language + "</div>" +
		"<div>Owner: " + item.owner.login + "</div>" +
		"</div>");

		newResult.hover(function () {
			//make it darker
			$(this).css("background-color", "lightgray");
		}, function () {
			//reverse
			$(this).css("background-color", "transparent");
		});

		resultList.append(newResult);
	});
}


/******************* Below is commented out due to serving an education purpose ********************/
// var msg = "Hello Javascript"
// console.log(msg);

// var resultsDiv = document.getElementById("results");
// resultsDiv.innerHTML = "<p>This is from JavaScript</p>"

//curly braces are indicators for instantiating a new object
//objects don't have a defined type to them
// var result = {
// 	name: "jQuery",
// 	language: "JavaScript",
// 	score: 4.5
// 	showLog: function() {

// 	},
// 	owner: {
// 		login: "hardypark",
// 		id: 123456
// 	}
// };

// result.phoneNumber = "123-456-7890";

// console.log(result.phoneNumber);

// for (var x = 0; x < results.length; x++) 
// {
// 	var result = results[x];
// 	if(result.score > 4) continue;
// 	console.log(result.name);
// }

// console.log(results.length);
// console.log(results[0].name);

// results.push(result);
// results.push({
// 	name: "dummy project"
// })

////////////////// Below Code is me just Learning Javascript //////////////

// console.log("msg is " + typeof(msg));
// console.log("resultsDiv is " + typeof(resultsDiv));

// var none;
// console.log("none is " + typeof(none));

// var aNumber = 10;
// console.log("aNumber is " + typeof(number));

// var truefalse = true;
// console.log("truefalse is " + typeof(truefalse));

// //msgs = "this shouldn't work";

// if(!none) // equivalent of just writing none != true
// {
// 	console.log("none is undefined!");
// }

// //all types compared together
// //all types are coerced to ones that can be compared using != or ==
// //this is an "exact comparison": !== or ===
// if(aNumber == "10")
// {
// 	console.log("10 is 10");
// }

// if(aNumber === "10")
// {
// 	console.log("10 is 10");
// }

// if(aNumber = "10") //this would evaluate to true so careful of doing 1 '=' sign in if statements
// {
// 	console.log("This worked");
// }


// //////Functions////////////
// //problem overloading functions. The second showMsg function will override the first
// //there is a work around to this using conditionals i.e. if statements
// function showMsg(msg, more) {
// 	if(more){
// 		console.log("showMsg+ " + msg + more);
// 	}
// 	else {
// 		console.log("showMsg: " + msg);
// 	}
// }

// showMsg("some information");
// showMsg("more information", " and even more");


// var showIt = function (msg) {
// 	console.log(msg);
// }

// showIt("Some Message!");


// function showItThen(msg, callback){
// 	showIt(msg);
// 	callback();
// }

// showItThen("showItThen called", function (){
// 	console.log("callback called");
// })

// ///SCOPES///
// //functions create smaller scopes. only thing that can create smaller scope
// //the window object is what is connected to everything that is in global scope
// var inGlobal = true;

// function testMe() {
// 	console.log("testMe(): " + inGlobal);

// 	var someMsg = "some Message";
// 	console.log("testMe(): " + someMsg);

// 	showItThen("With Closure", function(){
// 		showIt("testMe With Closure(): " + someMsg);
// 	});
// }

// // this does not work though someMsg variable is defined but the scope 
// //cannot be seen since it is within a function (in which the scope of the variable 
// //is of the function and not Globally defined).
// //console.log("global: " + someMsg); 

// testMe();


/////CLOSURES///////
//allow access to outer variables within inner scopes
//long as the function lives the variable in which the function uses needs to live as long as the function lives


	
})









































