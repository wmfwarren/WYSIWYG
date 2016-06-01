var famousPeople = [];

var contentContainer = document.getElementById("personContainer");

var deleteButton = document.getElementById("deleteCard");
var addButton = document.getElementById("addCard");
var personCard = document.getElementsByClassName("personCardStyle");


function addPerson() {
	var famousPerson = {
	  title: "",
	  name: "",
		bio: "",
	  image: "",
	  lifespan: {
	    birth: 0,
	    death: 0
		}
	}
	var personContainer = document.getElementById("personContainer");
	famousPerson.title = document.getElementById("title").value;
	famousPerson.name = document.getElementById("name").value;
	famousPerson.bio = document.getElementById("bio").value;
	famousPerson.image = document.getElementById("img").value;
	famousPerson.lifespan.birth = document.getElementById("born").value;
	famousPerson.lifespan.death = document.getElementById("death").value;

	famousPeople.push(famousPerson);

	var currentIndex = famousPeople.length - 1; //the card to add is always the last card so length - 1 is the card to add
	var currentPerson = famousPeople[currentIndex];

	personContainer.innerHTML += `
			<person id="newPersonCard${currentIndex}" class="personCardStyle" onCLink="identifyClickedElement()">
				<header>
					<h3>${currentPerson.title} ${currentPerson.name}</h3>
				</header>
				<section class="infoSection">
					<img class="famousHeadshot" src="${currentPerson.image}" alt="${currentPerson.title} ${currentPerson.name}">
					<p>${currentPerson.bio}</p>
				</section>
				<section class="lifeSpan">
					<p>Born: ${currentPerson.lifespan.birth}</p>
					<p>Died: ${currentPerson.lifespan.death}</p>
				</section>
			</person>
		`;

	document.getElementById("title").focus();

	personCard = document.getElementsByClassName("personCardStyle"); //repop the array of this class

	for (let i = 0; i < personCard.length; i++) { //readd event listeners
		personCard[i].addEventListener("click", addBorder);
	}

}

function deletePerson() { //this function deletes highlighted cards
	console.log("Deleting Person");

	var peopleContainer = document.getElementById("personContainer"); //card container
	var cardToDelete = document.getElementsByClassName("cardBorder"); //card with border
		
	peopleContainer.removeChild(cardToDelete[0]); //delete the card with the border

}

function addBorder(ID) { //add border to clicked card
	console.log("I hear you!");

	for (let i = 0; i < personCard.length; i++){
		personCard[i].classList.remove("cardBorder"); //remove old border
	}

	personCard[this.id].classList.add("cardBorder"); //add correct border

	document.getElementById("title").focus(); //set focus

	
}

addButton.addEventListener("click", addPerson); //add the addition button clickability
deleteButton.addEventListener("click", deletePerson); // make the delete clickable

for (let i = 0; i < personCard.length; i++) { //initial famous people array listeners
	personCard[i].addEventListener("click", addBorder);
}


