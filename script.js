// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
// Obtain a reference the element with a class of dashed and remove it.
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

let newHeader = document.querySelectorAll(".article__header")
for (i = 0; i < newHeader.length; i++) {
    newHeader[0].textContent=("Welcome to Ryan's Blog")
  }
for (i = 0; i < newHeader.length; i++){
    newHeader[i].classList.add(".article__header__important")
}


var footer = document.querySelector(".article__footer");
footer.classList.add("goldenrod")

console.log(footer)