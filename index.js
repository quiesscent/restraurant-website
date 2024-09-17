//price
let priceOne=document.getElementById("product-price-one");
let priceTwo=document.getElementById("product-price-two");
let priceThree=document.getElementById("product-price-three");


//name
let nameOne=document.getElementById("product-name-one");
let nameTwo=document.getElementById("product-name-two");
let nameThree=document.getElementById("product-name-three");

//images
let imageOne=document.getElementById("product-image-one");
let imageTwo=document.getElementById("product-image-two");
let imageThree=document.getElementById("product-image-three");

//buttons
//let lastestButtonOnclick=document.getElementById("latest-button");
//let bestSellerButttonOnclick=document.getElementById("bestseller-button");
//let featuredButtonOnclick=document.getElementById("featured-button");





//latest category

function  latestButton(){
  //prices
 priceOne.innerHTML=`$150.00`;
 priceTwo.innerHTML=`$200.00`;
  priceThree.innerHTML=`$400.00`;

//names
nameOne.innerHTML=`Drip coffee`;
nameTwo.innerHTML=`Frappe`;
nameThree.innerHTML=`Nitro`;

//images
imageOne.src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/135/277/original/download_%2833%29.jpeg?1721836579";
imageTwo.src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/135/278/original/Download_AI_generated_Chocolate_milk_shake_png_isolated_on_transparent_background_for_free.jpeg?1721836794";
imageThree.src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/135/282/original/Classic_Espresso_Tonic.jpeg?1721837312";

}




function featuredButton(){
  //prices
    priceOne.innerHTML=`$98.00`;
    priceTwo.innerHTML=`$122.00`;
     priceThree.innerHTML=`$123.00`;
   
   //names
   nameOne.innerHTML=`Spanish Coffee`;
   nameTwo.innerHTML=`Australian Coffee`;
   nameThree.innerHTML=`Witches Coffee`;
   
//images

imageOne.src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/135/285/original/Caf%C3%A9_espagnol.jpeg?1721837679";
imageTwo.src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/135/288/original/Australian_Flat_White.jpeg?1721838424";
imageThree.src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/134/671/original/download_%2826%29.jpeg?1721591668";
 
}



function bestSellerButton(){
  //Prices
  priceOne.innerHTML=`$98.00`;
  priceTwo.innerHTML=`$122.00`;
   priceThree.innerHTML=`$123.00`;
 
 //names
 nameOne.innerHTML=`Expresso`;
 nameTwo.innerHTML=`Latte`;
 nameThree.innerHTML=`Cappuccino`;
 
//images

imageOne.src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/135/296/original/download_%2836%29.jpeg?1721841521";
imageTwo.src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/135/301/original/_50_Pack__Disposable_Strawless_Plastic_Cups_with_Lids_-_24_Oz_Clear_Plastic_Cups_and_Sippy_Cups_Lids__Perfect_Eco-Friendly_To_Go_Cups_for_Iced_Coffee__Smoothies__Soda_Party_Drinks_and_Cafe_Essentials.jpeg?1721841933";
imageThree.src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/135/308/original/Latte_Macciato.jpeg?1721842506";

}

//buttons on clicks for top category
//lastestButtonOnclick.addEventListener("click", latestButton);
//featuredButtonOnclick.addEventListener("click", featuredButton);
//bestSellerButttonOnclick.addEventListener("click", bestSellerButton);


//form


function signUp(event){
event.preventDefault();

let setEmail=document.querySelector("#email");


alert(`Thank you  ${setEmail.value}  for subscribing to our information group. Will email you with our special offers`);

}



let form=document.querySelector("form")
form.addEventListener("submit", signUp);