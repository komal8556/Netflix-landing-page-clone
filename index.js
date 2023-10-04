const questionGroup = document.querySelectorAll(".question-group")

console.log(questionGroup)

questionGroup.forEach(function(question){

    question.addEventListener("click", function(){
        question.classList.toggle("show-text")
    })    

})