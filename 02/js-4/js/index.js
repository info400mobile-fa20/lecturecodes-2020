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

	document.querySelector("#test-menu1").addEventListener("click", function(){
		// document.getElementsByTagName("ol")[0].firstElementChild.className = "list-group-item";
		document.getElementsByTagName("p")[0].style.display = "none";

	});

	document.querySelector("#test-menu2").addEventListener("click", function(){
		// document.getElementsByTagName("ol")[0].firstElementChild.className = "list-group-item";
		document.getElementsByTagName("p")[0].style.display = "block";

	});

	document.querySelector("#test-menu3").addEventListener("click", function(){
		// document.getElementsByTagName("ol")[0].firstElementChild.className = "list-group-item";
		document.getElementsByTagName("span")[0].className = "alert alert-dark";
		document.getElementsByTagName("span")[1].className = "alert alert-success";
		document.getElementsByTagName("span")[2].className = "alert alert-warning";

	});

	document.querySelector("#test-menu4").addEventListener("click", function(){
		// document.getElementsByTagName("ol")[0].firstElementChild.className = "list-group-item";
		document.getElementsByTagName("span")[2].className = "";
		

	});

});



