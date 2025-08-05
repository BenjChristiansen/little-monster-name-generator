const firstName=document.getElementById("first-name"); 
const lastName=document.getElementById("last-name");
const button=document.getElementById("generate-name");
const paragraph=document.getElementById("paragraph);
nameDisplay=document.getElementById("name-display");
errorMessage=document.getElementById("error-message");
const message=document.getElementById("message");
const img=document.getElementById("img");
const prefix=["The", "Queen", "Countess", "Lord", "Princess", "Doctor", "Supreme", "Baroness", "Madame", "Sassy", "Royal", "Sis", "Count", "Monsieur", "A One", "Madmoisette", "Mister", "Mother", "Father", "Professor", "Lady", "The Incomparable", "Infamous", "Seniorita", "Governess", "Judge"];
const nouns = ["Zombie", "Joanne", "Venus", "Sour Candy", "Disco", "Harlequin", "Patrizia", "Gucci", "Mayhem", "Shadow", "Dance", "Beast", "Dope", "Swine", "Aura", "Fame", "Pinot Grigio", "Gypsy", "Mary Jane", "Beat", "Celebrity", "Unicorn", "Fashion", "Judas", "Diamond", "Enigma"];
const agentNouns= ["Guzzler", "Dingler", "Dribbler", "Slayer", "Killah", "Haunter", "Screecher", "Biter", "Caller", "Romancer", "Lover", "Kisser", "Sinner", "Chaser", "Clapper", "Popper", "Raver", "Drinker", "Hooker", "Bedazzler", "Bumper", "Humper", "Hacker", "Fluffer", "Sniffer", "Smoosher"];
const messages = [
  {message: "You've given me a million reasons to keep going Little Monster. I love you! XOXO, Joanne.",
url: "https://m.media-amazon.com/images/I/71In1faVvIL._AC_UY218_.jpg",
  style: {
backgroundColor: "pink",
  color: "black"}}, 
  {message: "Be as free as your hair Little Monster. You free me.",
  url: "https://m.media-amazon.com/images/I/71VJwUwpOzL._AC_UY218_.jpg",
  style: {
    backgroundColor: "black",
    color: "white"
  }},
{message: "I love you as much as the Papparazzi Little Monster.",
url:"https://m.media-amazon.com/images/I/91x3Afp9SPL._AC_UY218_.jpg",
style: {
backgroundColor: "black",
color: "white"}},
  {message: "Applause to you Little Monster.",
  url: "https://m.media-amazon.com/images/I/61hgq6sjUdL._AC_UY218_.jpg", 
  style: {
backgroundColor: "skyblue",
  color: "black"}},
  {message: "I hope to one day Vanish Into You Little Monster.",
  url: "https://m.media-amazon.com/images/I/61MQpR6XTtL._AC_UY218_.jpg",
  style: {
backgroundColor:"orange",
  color: "black"}},
  {message: "There can be 100 people in the room, and 99 don't believe in you, but you just need one to believe in you. I believe in you Little Monster.",
  url: "https://m.media-amazon.com/images/I/81qGgVs4BWL._AC_UY218_.jpg",
  style: {
    backgroundColor: "gold",
    color: "black"
  }}, 
  {message: "Bus, club, another club, another club, plane, next place, no sleep!. I do it for you, my fans!",
  url: "https://m.media-amazon.com/images/I/71VJwUwpOzL._AC_UY218_.jpg",
style: {
  backgroundColor: "black",
  color: "white"
}},
  {message: "I need you more than Dope Little Monster.",
  url: "https://m.media-amazon.com/images/I/612EEsK+nFL._AC_UY218_.jpg", 
  style: {
backgroundColor:"royalblue",
  color: "black"}},
  {message: "Don't you let go of my hand Little Monster. I will always be a fan of yours as much as you are one of mine.",
  url: "https://m.media-amazon.com/images/I/61ltyxgAZUL._AC_UY218_.jpg",
  style: {
backgroundColor: "gray",
  color: "black"}},
  {message: "I want your stupid love Little Monster.",
  url: "https://m.media-amazon.com/images/I/81Le2R1yAgL._AC_UY218_.jpg",
  style: {
    backgroundColor: "hotpink",
    color: "black"
  }},
  {message: "Rain on Me Little Monster",
  url: "https://m.media-amazon.com/images/I/81Le2R1yAgL._AC_UY218_.jpg",
  style: {
    backgroundColor:"hotpink",
    color: "black"
  }}
]

function generateName(first, last) {
  const seed = (first + last).toUpperCase();
  let total = 0;
  for (let i = 0; i < seed.length; i++) {
    total += seed.charCodeAt(i);
  }
const randomOffset = Math.floor(Math.random() * 10);
  const indexPrefix = (total + randomOffset) % prefix.length;
  const indexNoun = (total * 2 + randomOffset)% nouns.length;
  const indexAgentNoun = (total * 3 + randomOffset) % agentNouns.length;
  const indexMessage= (total *4 + randomOffset) % messages.length;
  
const selectedMessage = messages[indexMessage];
message.textContent = selectedMessage.message;
img.src = selectedMessage.url;
if (selectedMessage.style) {
  Object.assign(document.body.style, selectedMessage.style);
} else {
  document.body.style.backgroundColor = null;
}

  const selectedPrefix = prefix[indexPrefix];
  const selectedNoun = nouns[indexNoun];
  const selectedAgentNoun = agentNouns[indexAgentNoun];

  nameDisplay.textContent = `${selectedPrefix} ${selectedNoun} ${selectedAgentNoun}`;
}
function fieldChecker() {
  const first = firstName.value.trim().toLowerCase();
  const last = lastName.value.trim().toLowerCase();
  const fullName = `${first} ${last}`;

  if (first && last) {
    errorMessage.textContent = ""; 
    paragraph.textContent = "";

    const normalizedFullName = fullName.replace(/\s+/g, " ");
    if (
      normalizedFullName === "stefani germanotta" ||
      normalizedFullName === "stefani joanne angelina germanotta"
    ) {
      nameDisplay.textContent = "Lady Gaga";
      message.textContent = "Ra Ra Ah ah ah Roma Romama Gaga Oolala. Want your Bad Romance!";
      img.src = "https://m.media-amazon.com/images/I/71r-+GSaWuL._AC_UY218_.jpg";
      return;
    }
    generateName(firstName.value, lastName.value);
  } else {
    nameDisplay.textContent = "";
    message.textContent = "";
    img.src = "";
    errorMessage.textContent = "Grrrr... A first and last name is needed to make your Little Monster name.";
    paragraph.textContent="";
img.src="https://m.media-amazon.com/images/I/51+5rwULThL._AC_UY218_.jpg";
  }
}
button.addEventListener("click", fieldChecker);

firstName.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    fieldChecker();
  }
});

lastName.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    fieldChecker();
  }
});
