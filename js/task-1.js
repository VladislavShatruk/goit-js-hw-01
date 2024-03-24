// function makeTransaction(quantity, pricePerDroid){
//     const totalPrice = quantity * pricePerDroid;
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"



// function checkForName(fullName, firstName) {
//     fullName = fullName.toLowerCase();
//     firstName = firstName.toLowerCase();
//   if (fullName.includes(firstName)) {
//     return true;
//   }
//   else {
//     return false;
//   }
//   }

//   console.log(checkForName("Caty Stars", "daty"));



// function checkFileExtension(fileName, ext) {
//     if (fileName.endsWith(ext)) {
//       return "File extension matches";
//     }
//     else {
//       return "File extension does not match";
//     }
//   }

//   console.log(checkFileExtension("index.html", ".html"));



// function getFileName(file) {

//     if (file.indexOf('.') === -1) {
//       return file;
//     }
//     else {
//       return file.slice(0 , file.indexOf('.'));
//     }
//   }

//   console.log(getFileName("apasds.fg"));



// function createFileName(name, ext) {
//     return `${name.trim()}.${ext}`;
//   }

//   console.log(createFileName(" presentation", "xml"));



// let count = 0;

// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }



// function calculateTotal(number) {
//     let i = 0;
//     let sum = 0;

//     while (i < number) {
//       console.log(`Sum: ${sum}`);
//       i += 1;
//       sum += i;
//     }
//     return sum;
//   }

//   console.log(calculateTotal(3));



// let count = 5;

// do {
// 	console.log(`Count: ${count}`);
// 	count += 1;
// 	console.log(`Count: ${count}`);
// } while (count < 5);



// for (let i = 0; i <= 20; i += 5) {
//     console.log(i);
//   }
// for (let i = 20; i >= 0; i -= 5) {
//     console.log(i);
//   }



//   function calculateTotal(number) {
//     let sum = 0;
//     for (let i = 0; i <= number; i++) {
//         console.log(`Sum: ${sum}`);
//         sum += i;
//     }
//       return sum;
//   }

//   console.log(calculateTotal(5));



// function calculateEvenTotal(number) {
//     let sum = 0;
   
//      for (let i = 0; i <= number; i++) {
//     console.log(i);
//        if (!(i % 2)) {
//         console.log(`${i} "before"`);
//     sum += i;
//    } 
//    }
//      return sum; 
//  }



// const start = 6;
// const end = 17;
// let number;

// for (let i = start; i < end; i++) {
//   if (!(i % 5)) {
//     number = i;
//     console.log(i);
//     break;
//   }
// }



// function findNumberFromFive(max, target) {
// 	console.log("Log in the body of the function before the cycle");

//   for (let i = 5; i <= max; i += 1) {
//     console.log("Current counter value i:", i);

//     if (i === target) {
//       console.log(`Found the number ${target}, interrupt the cycle`);
// 			break;
//     }
//   }

//   console.log("Log in body function after cycle");
// }

// findNumber(10, 6);
// console.log("Log after exiting function");



// function findNumberFromFive(max, target) {
// 	console.log("Log in the body of the function before the cycle");

// 	for (let i = 5; i <= max; i += 1) {
// 	    console.log("Current counter value i:", i);
	
// 	    if (i === target) {
// 	      console.log(`Found the number ${target}, we make a return, interrupting the loop and function`);
// 				return i;
// 	    }
// 	  }

//   // Цей console.log не виконується
//   console.log("Log in body function after cycle");
// }

// const result = findNumber(10, 6);
// console.log("Log after exiting function");
// console.log(`Result of function execution ${result}`);