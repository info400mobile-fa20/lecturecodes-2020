document.addEventListener("DOMContentLoaded", function(event) {
	//We will work on the first half of the exercise in the class here
	document.querySelector("#menu1").addEventListener("click", function(){
		
		var newNode = document.createElement("li");
		var text = document.createTextNode("Appended first item");
		newNode.appendChild(text);

		document.getElementsByTagName("ol")[0].appendChild(newNode);
	});


	document.querySelector("#menu2").addEventListener("click", function(){
		
		var newNode = document.createElement("li");
		var text = document.createTextNode("Beginning first item");
		newNode.appendChild(text);

		var olNode = document.getElementsByTagName("ol")[0];
		var firstChild = olNode.firstElementChild;
		olNode.insertBefore(newNode, firstChild);
		
	});

	document.querySelector("#menu3").addEventListener("click", function(){
		
		var newNode = document.createElement("li");
		var text = document.createTextNode("Beginning first item");
		newNode.appendChild(text);

		var olNode = document.getElementsByTagName("ol")[0];
		var secondChild = olNode.children[1];
		olNode.insertBefore(newNode, secondChild);
		
	});

	document.querySelector("#menu4").addEventListener("click", function(){
		
		var newNode = document.createElement("li");
		var text = document.createTextNode("Beginning first item");
		newNode.appendChild(text);

		var olNode = document.getElementsByTagName("ol")[0];
		var secondChild = olNode.children[2];
		olNode.insertBefore(newNode, secondChild);
		
	});
	//Your exercise start here

	document.querySelector("#test-menu1").addEventListener("click", function(){
		
		var newNode = document.createElement("span");
		var text = document.createTextNode("end of span");
		newNode.appendChild(text);

		var olNode = document.getElementsByTagName("p")[0];
		olNode.appendChild(newNode);
		var br = document.createElement("br");
		olNode.appendChild(br);
		// var secondChild = olNode.children[2];
		// olNode.insertBefore(newNode, secondChild);
		
	});

	document.querySelector("#test-menu2").addEventListener("click", function(){
		
		var newNode = document.createElement("span");
		var text = document.createTextNode("Beggining of P");
		var brNode = document.createElement("br");
		newNode.appendChild(text);
		newNode.appendChild(brNode);

		var olNode = document.getElementsByTagName("p")[0];
		var firstChild = olNode.firstElementChild;
		olNode.insertBefore(newNode, firstChild);
		
	});

	document.querySelector("#test-menu3").addEventListener("click", function(){
		
		var newNode = document.createElement("span");
		var text = document.createTextNode("Before Span 1");
		var brNode = document.createElement("br");
		newNode.appendChild(text);
		newNode.appendChild(brNode);

		var olNode = document.getElementsByTagName("p")[0];
		var firstChild = olNode.children[1];
		olNode.insertBefore(newNode, firstChild);
		
	});

	document.querySelector("#test-menu4").addEventListener("click", function(){
		
		var newNode = document.createElement("li");
		var text = document.createTextNode("After span 3");
		// var brNode = document.createElement("br");
		newNode.appendChild(text);
		// newNode.appendChild(brNode);

		var olNode = document.getElementsByTagName("p")[0];
		var lastChild = olNode.children[7];//if you added <br>, they coundted as a child
		olNode.insertBefore(newNode, lastChild);
		
	});



});

