
const queryString = window.location.search;
console.log(queryString);



//key = key.split("_").join(" ");


  if(queryString.length > 0){
    const urlParams = new URLSearchParams(queryString);
    let myData = "";
    let myCart = "";
    let myTotal = 0; //will store total cost
    /*Cart Contents

    Widget: $3.99
    Sprocket: $5.99
    Thingy: $1.99

    Total: $11.97
 */
    myCart += "<h3><b>Cart Contents</b></h3>"
    
    urlParams.forEach(function(value, key)  {
       
       if(key == "Cart"){//cart
        //alert("Cart Item: " + value)

            switch(value){
                case "Widget":
                    myCart += "Widget: $3.99<br>";
                    
                    myTotal += 3.99;
                break;

                case "Sprocket":
                    myCart += "Sprocket: $5.99<br>";
                    myTotal += 5.99;
                break;

                case "Thingy":
                    myCart += "Thingy: $1.99<br>";
                    myTotal += 1.99;
                break;
            }


       }else{//shipping label
        key = key.split("_").join(" ");

        myData += `<p>${key}: ${value}</p>`;
       }
       
    });
    myCart += "Total: " + myTotal + '<br>';

    myData = myCart + myData;
    myData += '<p><a href="index.html">CLEAR</a></p>';

    document.getElementById("output").innerHTML = myData;
    
  }
