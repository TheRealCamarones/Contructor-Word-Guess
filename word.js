var Letter = require("./letter");

function Word(word) {
    this.letter = word.split("").map(function(char) {
        return new Letter(char);
    });
    
}

module.exports = [
    "Harry Potter",
    "The Chronicles of Narnia",
    "Pet Semetary",
    "Hatchet",
    "The City of Bones",
    "The Hunger Games",
    "The Girl on the Train",
    "Atlas Shrugged",
    "A Wrinkle in Time",
    "Charlotte's Web",
    "The Outsiders",
    "The Phantom Tollbooth",
    "To Kill A Mockingbird",
    "Little House on the Prairie",
    "Huckleberry Finn",
    "Lord of the Flies",
    "Charlie and the Chocolate Factory",
    "Alice's Adventures in Wonderland",
    "Bridge to Terabithia",
    "A Series of Unfortunate Events",
    "The Fault in Our Stars",
    "Number the Stars",
    "The Mortal Engines"
]