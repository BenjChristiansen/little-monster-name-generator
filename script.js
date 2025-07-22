const firstName=document.getElementById("first-name"); 
const lastName=document.getElementById("last-name");
const button=document.getElementById("generate-name");
const prefix=["The", "Queen", "Countess", "Lord", "Princess", "Doctor", "Supreme", "Baroness", "Madame", "Sassy", "Royal", "Sis", "Count", "Monsieur", "A One", "Madmoisette", "Mister", "Mother", "Father", "Professor", "Lady", "The Incomparable", "Infamous", "Seniorita", "Governess", "Judge"];
const nouns = ["Zombie", "Joanne", "Venus", "Sour Candy", "Disco", "Harlequin", "Patrizia", "Gucci", "Mayhem", "Shadow", "Dance", "Beast", "Dope", "Swine", "Aura", "Fame", "Pinot Grigio", "Gypsy", "Mary Jane", "Beat", "Celebrity", "Unicorn", "Fashion", "Judas", "Diamond", "Enigma"];
const agentNouns= ["Guzzler", "Dingler", "Dribbler", "Slayer", "Killah", "Haunter", "Screecher", "Biter", "Caller", "Romancer", "Lover", "Kisser", "Sinner", "Chaser", "Clapper", "Popper", "Raver", "Drinker", "Hooker", "Bedazzler", "Bumper", "Humper", "Hacker", "Fluffer", "Sniffer", "Smoosher"];

function generateName(first, last){
  const cleanedFirst=first.trim().toUpperCase();
  const cleanedLast=last.trim().toUpperCase();
  
  console.log("Cleaned First Name:", cleanedFirst);
  console.log("Cleaned Last Name:", cleanedLast);
}

button.addEventListener("click", () =>{generateName(firstName.value, lastName.value)
;})

