function countDigits(number)
{
    let number1= parseInt(number);
    let numstring= number1.toString();
    let count=0;
    for(let i=0;i<numstring.length;i++)
    {
     
        count++
    }
    return count

    
}

let number= 98765
let numOfDigits= countDigits(number);
console.log(`The number of digits of ${number} is :${numOfDigits}`)