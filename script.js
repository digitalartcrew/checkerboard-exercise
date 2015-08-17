// Your JS goes here
for (var i=0; i<63; i++){
	var newBox = document.createElement("div");
		newBox.style.width = "11.1%";
		newBox.style.paddingBottom = "11.1%";
		newBox.style.float = "left";
		// newBox.style.zIndex = "-1";

	if(i % 2 === 0){
		newBox.style.backgroundColor = "red";
	}
	else {
		newBox.style.backgroundColor = "black";
	}
	document.body.appendChild(newBox);
}

