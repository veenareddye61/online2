
       var clothesDiv = $("#clothes");
        var accessoriesDiv = $("#accessories");
        var mainbox = $("#maindiv");
        var maindesWrap = $("#maindesdiv")
      $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product",
        function(productList){
        
          for(i=0 ; i<= productList.length ; i++){
            if(productList[i].isAccessory===false){
              var clothesDiv1
              clothesDiv1=`<div class="ctab">
              <a href="${'./details/prdetails.html?id='+productList[i].id}" alt="prpic">
              <img class="itab" src="${productList[i].preview}" ></img>
              </a>
            
              <p class="ttab">${productList[i].name}</p>
              <p class="bpara">${productList[i].brand}</p>
              <p class="price">${"Rs" + " " + productList[i].price}</p>
              </div>`
              
              clothesDiv.append(clothesDiv1);
              console.log(clothesDiv)
            }
            
            else{
              var accessoriesDiv1
              accessoriesDiv1=`<div class="ctab">
              <a href="${'./details/prdetails.html?id='+productList[i].id}" alt="prpic">
              <img class="itab" src="${productList[i].preview}" ></img>
              </a>
              <p class="ttab">${productList[i].name}</p>
              <p class="bpara">${productList[i].brand}</p>
              <p class="price">${"Rs" + " " + productList[i].price}</p>
              </div>`
              accessoriesDiv.append(accessoriesDiv1);
            }
          }
          
            }
            
          )
          prodCard=JSON.parse(localStorage.getItem("prodCard"));
          $("#cart-count").text(prodCard.length);
        
            
     
      
      
    
      
