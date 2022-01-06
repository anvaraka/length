const text = document.querySelector("#text")
const button = document.querySelector(".click")
const result = document.querySelector(".result")

text.addEventListener('input', calculate)

function calculate(){
    let all = text.value.split(" ").join("")
    let word = all.length
    result.innerHTML = word
}

/* button.addEventListener("click", function(){
    let word = text.value.length;
    result.innerHTML = word;
    result.style.visibility = "visible";
})

 */

