//Create a function that reverses an array. Start small here and work your way up. Begin with an array of 5 numbers, and then try your program with a larger array to verify its success//
function myfunction(){
    let arr=[1,2,3,4,5];
    console.log(arr);
    arr.reverse();
    console.log(arr)
}
myfunction();


//Create a function that filters out negative numbers. In this challenge, you’ll have a function that takes an array as an input and returns an array. But if all goes according to plan, it’ll remove the negative numbers. This is another example of a task that’ll b useful when combing through data and looking for clever ways to eliminate “ba data.”//
function filters(){
    let input=parseInt (prompt('enter five numbers:'));
    let array=[];
    array.push(input);

    console.log(array);
}
filters();

//Return the number of vowels in a string. Create a function that’ll return an integer of the number of vowels found in a string. This is a great way to practice determining the features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared to determine what datasets (or just strings) consist of.//

function vowels(){
    let vowel=['a','e','i','o','u']
    console.log(vowel);
    return vowels
}
vowels();

//4. Check if a string is a palindrome. A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (like the words “kayak,” “mom,” “radar,” and “refer”). Create a function that takes a string as input and returns a Boolean indicating whether the string is a palindrome. Test your function with different strings to ensure it works correctly.//
function palindrome(){
    let arr=['noon'];
    console.log(arr)
    arr.reverse();
    console.log(arr)
}
palindrome();


//5. Write a JavaScript program to check whether two given integer values are in the range 50 - 99 (inclusive). Return true if either of them falls within the range.//

function check(){
    let prompt1=prompt('enter a number is greater then 50:');
    let prompt2=prompt('enter a number is less then 90');
    if( prompt1>=50 && prompt1<=99 || prompt2>=50 && prompt2<=99)
    console.log('true');
else{
    console.log('false')
}

}
check()

//6. Write a JavaScript program to get the minimum value of an array, after mapping each element to a value using the provided function.//

//7. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.//
let cities = ['Khi', 'Lhr', 'Isl', 'Psh', 'Que']
console.log(cities);
let newCity = cities.slice(2, 4)
console.log(newCity)
newCity.push('mul','hyd')
console.log(newCity)
console.log(newCity.length)


//9. Write a JavaScript program to find the smallest round number not less than a given value. Note: A round number is informally considered to be an integer that ends with one or more zeros. So, 590 is rounder than 592, but 590 is less round than 600.//

function round(){
let num =[34,54,78,56]
console.log(num)
let num2=Math.min(num)
console.log(num2)

}
//10. Write a JavaScript program to find the index of an array item in a for loop.//
let item=prompt('write which item you found in this bakery')
console.log(item);
let bakeryitem=['cake','biscuits','sweets','deserts',''];
console.log(bakeryitem);
for(let i=0;i<=bakeryitem.lenght;i++)
if( item )
bakeryitem.indexOf(item);
console.log('enter an item',item)




