function productDigits(number)
{
    number1=parseInt(number);
    let product=1;
    while(number!=0)
    {
        
        let digit= number % 10;
        product= product * digit;
        number= Math.floor(number/10);
       
    }
    return product;     

}


number= 234;
digitsProduct = productDigits(number);
  console.log(`Products of digits of ${number} is : ${digitsProduct} `)