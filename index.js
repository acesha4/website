let next= document .querySelector('.next')
let prev= document .querySelector('.prev')

next.addEventListener('click',function(){
  let items=document.querySelectorAll('.item')
  document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click',function(){
  let items=document.querySelectorAll('.item')
  document.querySelector('.slide').prepend(items[items.length-1])
})

document.addEventListener('DOMContentLoaded', function() {
  const userIcon = document.getElementById('userIcon');
  const dropdownMenu = document.getElementById('dropdownMenu');

  userIcon.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdownMenu.classList.toggle('show');
  }); 

  document.addEventListener('click', function() {
      dropdownMenu.classList.remove('show');
  });

  dropdownMenu.addEventListener('click', function(e) {
      e.stopPropagation();
  });
});

const serviceItems = document.querySelector(".item-inner-1");
const popup = document.querySelector(".popup-box")
const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");

serviceItems.addEventListener("click",function(event){
  if(event.target.tagName.toLowerCase() == "button"){
     const item =event.target.parentElement;
     const h3 = item.querySelector("h3").innerHTML;
     const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
     popup.querySelector("h3").innerHTML = h3;
     popup.querySelector(".popup-body").innerHTML = readMoreCont;
     popupBox();
  }

})

popupCloseBtn.addEventListener("click", popupBox);
popupCloseIcon.addEventListener("click", popupBox);

popup.addEventListener("click", function(event){
   if(event.target == popup){
      popupBox();
   }
})

function popupBox(){
  popup.classList.toggle("open");
}



var modal = document.getElementById("modal");

var span = document.getElementsByClassName("close")[0];

var seeMore = document.getElementById("seeMore");
var moreText = document.getElementById("moreText");
var readMoreBtn = document.getElementById("readMoreBtn");

seeMore.onclick = function() {
    moreText.classList.toggle("hidden");
    readMoreBtn.classList.toggle("hidden");
    seeMore.textContent = moreText.classList.contains("hidden") ? "See More" : "See Less";
}

readMoreBtn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



var modal = document.getElementById("modal");

var span = document.getElementsByClassName("close")[0];

var seeMore = document.getElementById("seeMore");
var moreText = document.getElementById("moreText");
var readMoreBtn = document.getElementById("readMoreBtn");

seeMore.onclick = function() {
    moreText.classList.toggle("hidden");
    readMoreBtn.classList.toggle("hidden");
    seeMore.textContent = moreText.classList.contains("hidden") ? "See More" : "See Less";
}

readMoreBtn.onclick = function() {
    modal.style.display = "block";
}
