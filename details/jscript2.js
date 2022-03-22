var productId = window.location.search.split('=')[1];
/*var id = location.href
var productId = id.charAt(id.length-1);*/
var maindesWrap = $("#maindesdiv")
var sCartLogo = $(".fa-shopping-cart")
console.log(productId);
$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+productId,function(productList){
    var productdetails
    console.log(productList);
console.log(maindesWrap)
productdetails = `<div id="largeimg">
<img id="bimg" src="${productList.preview}" alt="previeimg">
</div>
<div id="description">
<h1 class="heading">${productList.name}</h1>
<p class="pbrand">${productList.brand}</p>
<p class="pprice">${"Price:"+" "+"Rs"+" "}</p>
<p class="pprice2">${productList.price}</p>
<p class="pdes">Description</p>
<p class="dtext">${productList.description}</p>
<div class="pphotowrap"></div>
<button class="addToCart" onClick="addToCart('${productId}','${productList.preview}','${productList.name}','${productList.price}')">Add to cart</button>
</div>
`
maindesWrap.append(productdetails);

for(j=0;j<productList.photos.length;j++){
   var photoWrap=$(".pphotowrap")
   var photodiv = document.createElement("div");
           photodiv.className = "pdiv";
           var prphoto = document.createElement("img");
           prphoto.className = "pphoto";
           prphoto.id="simg"+j;
           prphoto.src = productList.photos[j];
           photodiv.append(prphoto);
           photoWrap.append(photodiv);
           var photo1 = document.getElementById("simg0");
           photo1.classList.add("imgactive");
           prphoto.onclick=function smallimage(simg){
               var simg=this.id;
               var smlphoto= document.getElementsByClassName("pphoto");
           
               for(k=0; k<smlphoto.length;k++)
               {smlphoto[k].classList.remove("imgactive")}
               console.log(this.id);
               var activesmallImg=document.getElementById(simg);
               console.log(activesmallImg);
               activesmallImg.classList.add("imgactive");
               var bigimg = document.getElementById("bimg");
               bigimg.src = activesmallImg.src;
}}});

var buttonclicked= 0;


function addToCart(prodId,prodSrc,prodName,prodPrice){
 buttonclicked = buttonclicked+1;
 
 
 var product={id : prodId,
              src : prodSrc,
              name : prodName,
              price : prodPrice,
              numberOf : buttonclicked } 
  if (localStorage.getItem("prodCard")==null){
      var prodCard = [];
      prodCard.push(product);
      localStorage.setItem("prodCard",JSON.stringify(prodCard))
  }else{
    
    var data = JSON.parse(localStorage.getItem("prodCard"));
      data.push(product)
      localStorage.setItem("prodCard",JSON.stringify(data))
    
    }
  }
  prodCard=JSON.parse(localStorage.getItem("prodCard"));
  $("#cart-count").text(prodCard.length);


