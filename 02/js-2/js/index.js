document.addEventListener("DOMContentLoaded", function(event) {
	//We will work on the first half of the exercise in the class here
	document.querySelector("#menu1").addEventListener("click", function(){
		document.querySelector("#paragraph1").textContent = "This is the 1st <i>italic </i> paragaph.";
	});

	document.querySelector("#menu2").addEventListener("click", function(){
		document.querySelector("#paragraph2").innerHTML = "This is the 1st <i>italic </i> paragaph.";
	});

	document.querySelector("#menu3").addEventListener("click", function(){
		document.querySelector("#textfield1").value = "Not a Default Value";
	});

	document.querySelector("#menu4").addEventListener("click", function(){
		document.querySelector("#url1").setAttribute("href", "http://www.facebook.com");
	});

	document.querySelector("#menu5").addEventListener("click", function(){
		document.querySelector("#img1").setAttribute("src", "images/twc-logo.gif");
	});
	//Your exercise start here});
});