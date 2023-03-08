////////////////////////////////
// Easy Going
////////////////////////////////

for (let i = 1; i <= 20; i++) {
    console.log(i);
  }

////////////////////////////////
// Get Even
////////////////////////////////

for (let i = 0; i <= 200; i += 2) {
    console.log(i);
  }

////////////////////////////////
// Fizz Buzz
////////////////////////////////

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant",  5000 , "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2]++;

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

wolfy[3] = "Gotham City";

// Give D'Art a second hometown by adding "Hawkins"

dart.push("Hawkins");

// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

wolfy.shift();  // remove the first element ("Wolfy")
wolfy.unshift("Gameboy");  // insert "Gameboy" at the beginning of the array

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (let turtle of turtles) {
  console.log(turtle.toUpperCase());
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// Log the index of 'Titanic'
console.log(favMovies.indexOf('Titanic')); // Output: 8

// Use the .sort method
favMovies.sort();
console.log(favMovies); // Output: sorted array

// Use the .pop method
favMovies.pop();
console.log(favMovies); // Output: array with 'Fast and Furious' removed

// Use the .push method
favMovies.push('Guardians of the Galaxy');
console.log(favMovies); // Output: array with 'Guardians of the Galaxy' added

// Use the .reverse method
favMovies.reverse();
console.log(favMovies); // Output: reversed array

// Use the .shift method
favMovies.shift();
console.log(favMovies); // Output: array with first element removed

// Use the .unshift method
const newLength = favMovies.unshift('The Godfather');
console.log(favMovies); // Output: array with 'The Godfather' added and the new length of the array returned

// Use the .splice method
const djangoIndex = favMovies.indexOf('Django Unchained');
favMovies.splice(djangoIndex, 1, 'Avatar');
console.log(favMovies); // Output: array with 'Django Unchained' replaced by 'Avatar'

// Use the .slice method
const middleIndex = Math.floor(favMovies.length / 2);
const lastHalf = favMovies.slice(middleIndex);
console.log(lastHalf); // Output: array with last half of original array

// Console.log final results
console.log(favMovies);

// Console.log the index of 'Fast and Furious'
console.log(favMovies.indexOf('Fast and Furious')); // Output: -1

////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////