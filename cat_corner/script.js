function meow(){

const messages=[
"Meow 🐾",
"Purrrrrr",
"The cat approves.",
"You gained +1 cat friendship.",
"Cat is sleepy 😴"
];

const random=
messages[Math.floor(
Math.random()*messages.length
)];

document.getElementById(
"message"
).textContent=random;

}