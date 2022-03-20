var mainCartDiv= $("#main-cart-div")
var cartDiv1 = $("#cart-div1")
var cartDiv2 = document.getElementById("cart-div2")

prodCard=JSON.parse(localStorage.getItem("prodCard"));
console.log(prodCard);


for(i=0;i<=prodCard.length;i++){
    var cartDivProd
    $('#itemCount').text(prodCard[i].numberOf+prodCard[i].numberOf)  
cartDivProd =`<div class="chcard"><div class="chcard1"><img class="prodImg" src="${prodCard[i].src}" ></img>
</div>
<div class="chcard2"><h4 class="prodName">${prodCard[i].name}</h4>
<p class= "prodNum">${'x'+prodCard[i].numberOf}</p>
<p class="prodPrice">${'Amount Rs:'+(prodCard[i].numberOf*prodCard[i].price)}</p></div></div>`
cartDiv1.append(cartDivProd)
cartDiv2.innerHTML=`<div class="totalAmtCard">
                <p>Total Amount</p>
                <p>Amount:</P>
                <a href="../confirm/confirm.html"><button id="placeOrder" onClick="orderPlaced">Place Order</button></div></a>`
}

/*function orderPlaced(){
    location.assign()
}*/





/*cartDiv2.innerHTML = `<p>Total Amount</p>
<p class="sumofPrice">${'Amount :Rs '+price}</p>`*/