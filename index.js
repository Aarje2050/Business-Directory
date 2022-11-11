
var businessDetails = 
[
    { 
        "name"  : "Immortal SEO", 
        "email" : "immortal@seo.com", 
        "phone" : 9649930799 
    },

    { 
        "name"  : "Keen Infotech", 
        "email" : "immortal@seo.com", 
        "phone" : 9649930799 
    },

    { 
        "name"  : "Kailash Jat", 
        "email" : "kailashjat@gmail.com", 
        "phone" : 98389839928 
    },



    
]; 


function displayGames() {
    let result = '';
      businessDetails.forEach(function(element) {
      result += `
      <div id="myListCard" class="col-md-4 mt-3">
      <div class="card style="width: 18rem;" " >
      <img class="img-fluid" style="width: 100px; height: 100px" src="./default.png" alt="keen info logo">
      <div class= "card-body">
          <h5 class="card-title" id="businessName"> ${element.name}</h5>
          <p class="card-text" id="businessEmail">${element.email}</p> 
          <p class="card-text" id="businessPhone">${element.phone}</p>
      </div>
      </div>
      </div>
      `
      });

      document.getElementById("myCards").innerHTML= result;

  }

//Add business function Starts here//

    addBusinessFn = (ev) => {
    ev.preventDefault();    //to stop browser reloading //

    var modal = document.getElementById("myModal");


    let business = {
        name : document.getElementById("inputAddress").value,
        email : document.getElementById("inputEmail4").value,
        phone : document.getElementById("inputPhone").value

    }
    if( business.name ==="" || business.email==="" || business.phone ==="") {

        alert("Empty Fields");
    }else
    {
      businessDetails.push(business);
    }
    
    document.querySelector("#form").reset();  //trying to reset form after submit //
    modal.style.display = "none";


}



document.addEventListener('DOMContentLoaded', (event)=> {
    document.getElementById("myAddBtn").addEventListener('click', addBusinessFn);
   });

//Add business function ENDS here//

 //my Time STARTS HERE//
  

  setInterval(myTimeFn, 1000);

  function myTimeFn() {

    let d = new Date();
  document.getElementById("myTime").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();

  }
 //my Time ENDS HERE//


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("addBizBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function(event) {
    event.preventDefault();
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function(event) {
    event.preventDefault();
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    event.preventDefault();
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//my search Function Starts here//

var inputValue = document.getElementById("mySearch");
inputValue.addEventListener("input", searchFn);

function searchFn(e){
    var filter = e.target.value.toUpperCase();
      
        var list = document.getElementById("myCards");
        var divs = list.getElementsByTagName("div");
        for (var i = 0; i < divs.length; i++) {
          var a = divs[i].getElementsByClassName("card-body")[0];
      
          if (a) {
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
              divs[i].style.display = "block";
            } else {
              divs[i].style.display = "none";
            }
          }
        }
      
      }

//my search Function ENDS here//














