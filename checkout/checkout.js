var mainCartDiv= $("#main-cart-div")
var cartDiv1 = $("#cart-div1")
/*var cartDiv2 = document.getElementById("cart-div2")*/

var prodCard
prodCard=JSON.parse(localStorage.getItem("prodCard"));
console.log(prodCard)
$('#itemCount').text(prodCard.length)
$("#cart-count").text(prodCard.length);

var sum=0

/*cartDivProd2 = document.createElement("div")*/


var prodCard2 = [];
var number=0
for(i=0;i<prodCard.length;i++){
    sum+=parseInt(prodCard[i].price);
    $("#totamt2").text(sum);
    var number=parseInt(prodCard[i].numberOf)
    console.log(number)
    if(number>1)
    {
        prodCard2.pop();
    }
   prodCard2.push(prodCard[i])
}
console.log(prodCard2)
for(j=0;j<prodCard2.length;j++){
     cartDivProd =`<div class="chcard"><div class="chcard1"><img class="prodImg" src="${prodCard2[j].src}" ></img>
</div>
<div class="chcard2"><h4 class="prodName">${prodCard2[j].name}</h4>
<p class= "prodNum">${'x'+prodCard2[j].numberOf}</p>
<p class="prodPrice">${'Amount Rs:'+(prodCard2[j].numberOf*prodCard2[j].price)}</p></div></div>`
cartDiv1.append(cartDivProd)
}




/*cartDivProd =`<div class="chcard"><div class="chcard1"><img class="prodImg" src="${prodCard[i].src}" ></img>
</div>
<div class="chcard2"><h4 class="prodName">${prodCard[i].name}</h4>
<p class= "prodNum">${'x'+prodCard[i].numberOf}</p>
<p class="prodPrice">${'Amount Rs:'+(prodCard[i].numberOf*prodCard[i].price)}</p></div></div>`}
else{
    cartDivProd =`<div class="chcard"><div class="chcard1"><img class="prodImg" src="${prodCard[i-1].src}" ></img>
</div>
<div class="chcard2"><h4 class="prodName">${prodCard[i-1].name}</h4>
<p class= "prodNum">${'x'+prodCard[i-1].numberOf}</p>
<p class="prodPrice">${'Amount Rs:'+(prodCard[i-1].numberOf*prodCard[i-1].price)}</p></div></div>`
}
cartDiv1.append(cartDivProd)
sum+=parseInt(prodCard[i-1].price);
$("#totamt2").text(sum);
}
console.log(cartDivProd.length)*/
function orderPlaced(){
    
    $("#cart-count").text("0");
    localStorage.clear();
    
}
 






/*cartDiv2.innerHTML = `<p>Total Amount</p>
<p class="sumofPrice">${'Amount :Rs '+price}</p>`*/
