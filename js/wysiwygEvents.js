function addBorder(ID) {
	console.log("I hear you!");
	for (var j = 0; j < personCard.length; j++){
		personCard[j].classList.remove("cardBorder");
	}
	personCard[this.id].classList.add("cardBorder");
	document.getElementById("inputField").focus();
}

personCard = document.getElementsByClassName("personCardStyle");

for (var i = 0; i < personCard.length; i++) {
	personCard[i].addEventListener("click", addBorder);
}