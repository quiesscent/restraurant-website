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
let featuredButtonOnclick=document.getElementById("featured-button");




let images=[
  {
    firstImage:"https://s3.amazonaws.com/shecodesio-production/uploads/files/000/134/697/original/How_to_Make_Cold_Brew_Coffee_At_Home_in_7_Easy_Steps.jpeg?1721595439",
    secondImage:"https://s3.amazonaws.com/shecodesio-production/uploads/files/000/134/690/original/Low_Calorie_Homemade_Cold_Brew_Coffee.jpeg?1721594761",
    thirdImage:"https://s3.amazonaws.com/shecodesio-production/uploads/files/000/134/523/original/The_School_of_Styling.jpeg?1721501583"
  }
]

















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

imageOne.innerHTML=`<img src=${images[0].firstImage}`;


}




function featuredButton(){
    priceOne.innerHTML=`$98.00`;
    priceTwo.innerHTML=`$122.00`;
     priceThree.innerHTML=`$123.00`;
   
   //names
   nameOne.innerHTML=`Irish Coffee`;
   nameTwo.innerHTML=`Australian Coffee`;
   nameThree.innerHTML=`Witches Coffee`;
   




   
}

//buttons on clicks for top category
lastestButtonOnclick.addEventListener("click", latestButton);
featuredButtonOnclick.addEventListener("click", featuredButton);