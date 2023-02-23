const toggleIcons = document.querySelectorAll(".questionIcon")
const answers = document.querySelectorAll(".answer")

toggleIcons.forEach((icon, index) => {
    icon.addEventListener("click", function(){
        toggleAnswer(index)
        toggleIcon(index)
    })
})

function toggleAnswer(index){
    console.log(index)
    answers[index].classList.toggle("hidden")
}
function toggleIcon(index){
    toggleIcons[index].classList.toggle("active")
}