document.addEventListener("DOMContentLoaded", function(event) {
	//We will work on the first half of the exercise in the class here

	document.querySelector("#menu1").addEventListener("click", function(){
		document.getElementsByTagName("ol")[0].style.display = "none";
	});

	document.querySelector("#menu2").addEventListener("click", function(){
		document.getElementsByTagName("ol")[0].style.display = "block";
	});

	document.querySelector("#menu3").addEventListener("click", function(){
		var olNode = document.getElementsByTagName("ol")[0];

		olNode.className = "list-group";
		var liNodes = olNode.children;

		for (var i = 0; i<liNodes.length; i++){
			liNodes[i].className = "list-group-item";

			if (i == 0)
				liNodes[i].className += " active";
		}

		// olNode.firstElementChild +="active";


	});


	document.querySelector("#menu4").addEventListener("click", function(){
		// document.getElementsByTagName("ol")[0].firstElementChild.className = "list-group-item";
		document.getElementsByClassName("active")[0].className = "list-group-item";

	});

	//Your exercise start here
});



