// 1. Create a function that can create a triangle pattern according to the height we provide like the

const triangleByHeight = (height) => {
    const triangelNumberList = [];
    let sortNumber = 0;

    for (let i = 0; i < height; i++) {

        let triangelNumberLineList = [];

        for (let j = 0; j <= i; j++) {
            sortNumber++;
            triangelNumberLineList.push(sortNumber);
        }

        triangelNumberList.push(triangelNumberLineList);

    }

    const biggestLengthCharacterNumberTriangle = triangelNumberList[height - 1][height - 1].toString().length;

    triangelNumberList.forEach((triangleLineNumberList) => {
        const triangle = triangleLineNumberList
            .map((data) => data.toString().padStart(biggestLengthCharacterNumberTriangle, '0'))
            .join(' ');

        console.log(triangle);
    });
}

triangleByHeight(4);

/*

2. Create a function that can loop the number of times according to the input we provide, and will
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
"FizzBuzz".

*/

const fizzBuzz = (n) => {
    const result = [];

    for (let i = 1; i <= n; i++) {
        const output = [];

        if (i % 3 === 0) output.push('Fizz');
        if (i % 5 === 0) output.push('Buzz');

        result.push(output.length ? output.join('') : i);
    }

    console.log(result.join(", "));
}

fizzBuzz(15);

// 3. Create a function to calculate Body Mass Index (BMI)

const calBMI = (weight, height) => {
    const result = weight / Math.pow(height, 2);

    if (result < 18.5) return "less weight";
    if (result >= 18.5 && result <= 24.9) return "ideal";
    if (result >= 25 && result <= 29.9) return "overweight";
    if (result >= 30 && result <= 39.9) return "very overweight";

    return "obesity";

}

console.log(calBMI(65, 1.3));

//  4. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only

const removeAllOddArray = (list) => {
    const result = list.filter((data) => data % 2 === 0);

    return result;
}

console.log(removeAllOddArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Write a function to split a string and convert it into an array of words

const convertToArray = (text) => text.split(" ");

console.log(convertToArray("Hello World"));