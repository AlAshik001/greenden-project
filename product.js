// selecting nav bar

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function(){
     sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})



// search product functionality

var search = document.getElementById("search")
var productcontainer = document.getElementById("product-container")
var productlist = productcontainer.querySelectorAll("div")
 
search.addEventListener("keyup", ()=>
{
    var entervalue = event.target.value.toUpperCase()

    for (count=0; count<productlist.length; count=count+1){
        var productname = productlist[count].querySelector("h1")
        if (productlist[count].textContent.indexOf(entervalue)<0){
            productlist[count].style.display ="none"
        }

        else{
            productlist[count].style.display= "block"
        }
    }
})