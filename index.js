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
let lastestButtonOnclick=document.getElementById("latest-button");
let bestSellerButttonOnclick=document.getElementById("bestseller-button");

//latest category

function  latestButton(){
  //prices
 priceOne.innerHTML=`$150`;
 priceTwo.innerHTML=`$200`;
  priceThree.innerHTML=`$400`;

//names
nameOne.innerHTML=`Drip coffee`;
nameTwo.innerHTML=`Frappe`;
nameThree.innerHTML=`Nitro`;

}


lastestButtonOnclick.addEventListener("click", latestButton);