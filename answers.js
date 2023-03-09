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

const whereIsWaldo = [["Timmy", "Frank"], 
                    "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

// // Find the index of "Eggbert"
const eggbertIndex = whereIsWaldo.indexOf("Eggbert");

// remove "Eggbert" from the array
whereIsWaldo.splice(eggbertIndex, 1);
console.log(whereIsWaldo);

//Change "Neff" to "No One"
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo);

//Access and console.log "Waldo"

console.log(whereIsWaldo[2][1][1]); //Error: Cannot read properties of undefined (reading '1') Need to ask Christina

// ////////////////////////////////
// //  Excited Kitten
// ////////////////////////////////

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      const randomMsg = Math.floor(Math.random() * 3); // don't know why but it doesn't work w/o Math.floor
      switch (randomMsg) {
        case 0:
          console.log("...human...why you taking pictures of me?...");
          break;
        case 1:
          console.log("...the catnip made me do it...");
          break;
        case 2:
          console.log("...why does the red dot always get away...");
          break;
      }
    } else {
      console.log("Love me, pet me! HSSSSSS!");
    }
  }

////////////////////////////////
//  Find the Median
////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

const sortedNums = nums.sort((a, b) => a - b);
console.log(nums);

const middle = Math.floor(sortedNums.length / 2);

let median;

if (sortedNums.length % 2 === 0) {
  median = (sortedNums[middle] + sortedNums[middle - 1]) / 2;
} else {
  median = sortedNums[middle];
}
console.log(median);