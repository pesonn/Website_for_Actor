/* ------------------------------------------------------------------------- */
/* ---------------------        JAVASCRIPT       --------------------------- */
/* ------------------------------------------------------------------------- */


let displayHeaderImg = function (e) { // e = Anzahl der Bilder
  let setNumber = Math.floor(Math.random() * e + 1);
 
  let showImg =   document.getElementById("header__img__" + setNumber)

  showImg.style.display = "block";

};

window.onload = displayHeaderImg(3)

