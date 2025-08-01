const firstName=document.getElementById("first-name"); 
const lastName=document.getElementById("last-name");
const button=document.getElementById("generate-name");
const
nameDisplay=document.getElementById("name-display");
const prefix=["The", "Queen", "Countess", "Lord", "Princess", "Doctor", "Supreme", "Baroness", "Madame", "Sassy", "Royal", "Sis", "Count", "Monsieur", "A One", "Madmoisette", "Mister", "Mother", "Father", "Professor", "Lady", "The Incomparable", "Infamous", "Seniorita", "Governess", "Judge"];
const nouns = ["Zombie", "Joanne", "Venus", "Sour Candy", "Disco", "Harlequin", "Patrizia", "Gucci", "Mayhem", "Shadow", "Dance", "Beast", "Dope", "Swine", "Aura", "Fame", "Pinot Grigio", "Gypsy", "Mary Jane", "Beat", "Celebrity", "Unicorn", "Fashion", "Judas", "Diamond", "Enigma"];
const agentNouns= ["Guzzler", "Dingler", "Dribbler", "Slayer", "Killah", "Haunter", "Screecher", "Biter", "Caller", "Romancer", "Lover", "Kisser", "Sinner", "Chaser", "Clapper", "Popper", "Raver", "Drinker", "Hooker", "Bedazzler", "Bumper", "Humper", "Hacker", "Fluffer", "Sniffer", "Smoosher"];


function generateName(first, last) {
  const seed = (first + last).toUpperCase();
  let total = 0;
  for (let i = 0; i < seed.length; i++) {
    total += seed.charCodeAt(i);
  }

  const indexPrefix = total % prefix.length;
  const indexNoun = (total * 2) % nouns.length;
  const indexAgentNoun = (total * 3) % agentNouns.length;

  const selectedPrefix = prefix[indexPrefix];
  const selectedNoun = nouns[indexNoun];
  const selectedAgentNoun = agentNouns[indexAgentNoun];

  nameDisplay.textContent = `${selectedPrefix} ${selectedNoun} ${selectedAgentNoun}`;
}


button.addEventListener("click", () =>{generateName(firstName.value, lastName.value)
;})
