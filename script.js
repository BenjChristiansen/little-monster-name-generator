const firstName=document.getElementById("first-name"); 
const lastName=document.getElementById("last-name");
const button=document.getElementById("generate-name");

function generateName(first, last){
  const cleanedFirst=first.trim().toUpperCase();
  const cleanedLast=last.trim().toUpperCase();
  
  console.log("Cleaned First Name:", cleanedFirst);
  console.log("Cleaned Last Name:", cleanedLast);
}

button.addEventListener("click", () =>{generateName(firstName.value, lastName.value)
;})

