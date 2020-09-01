document.addEventListener("DOMContentLoaded", function(event) {
	//We will work on the first half of the exercise in the class here
	document.getElementById("menu1").addEventListener("click", function(){
		alert(document.getElementById("paragraph1").textContent);
	});

	document.getElementById("menu2").addEventListener("click", function(){
		alert(document.getElementById("paragraph2").innerHTML);
	});

	document.getElementById("menu3").addEventListener("click", function(){
		alert(document.getElementById("textfield1").value);
	});

	document.getElementById("menu4").addEventListener("click", function(){
		alert(document.getElementById("url1").getAttribute("href"));
	});

	document.getElementById("menu5").addEventListener("click", function(){
		alert(document.getElementById("img1").getAttribute("src"));
	});
	//Your exercise start here

	// document.getElementById("test-menu1").addEventListener("click", function(){
	// 	alert(document.getElementById("test").textContent);
	// });

	document.querySelector("#test-menu1").addEventListener("click", function(){
		alert(document.querySelector("#test").textContent);
	});

	document.getElementById("test-menu2").addEventListener("click", function(){
		alert(document.getElementById("test").innerHTML);
	});

	document.getElementById("test-menu3").addEventListener("click", function(){
		alert(document.getElementById("url-test").getAttribute("href"));
	});

	document.getElementById("test-menu4").addEventListener("click", function(){
		alert(document.getElementById("img-test").getAttribute("src"));
	});

	document.getElementById("test-menu5").addEventListener("click", function(){
		alert(document.getElementById("button-test").value);
	});

});
