/* ------------------------------------------------------------------------- */
/* ---------------------        JAVASCRIPT       --------------------------- */
/* ------------------------------------------------------------------------- */


let clickOnImg = document.getElementsByClassName("box__img")

for (i = 0; i < clickOnImg.length; i++) {
  clickOnImg[i].addEventListener("click", function() {
  
  if (this.nextElementSibling !== null && this.nextElementSibling.tagName == "IMG") {
    this.style.display = "none";
    this.nextElementSibling.style.display = "block";
  } else {
    this.style.display = "none";
    this.parentElement.firstElementChild.style.display = "block";
    
  }
  
  })
}