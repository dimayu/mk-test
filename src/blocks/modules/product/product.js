//tabs
const questions = document.querySelectorAll(".js-tabs");

questions.forEach(function(question){
    const button = question.querySelector(".js-tab");
    button.addEventListener("click", function(){
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});

//validation
const formOne = document.querySelector("#form-1");
const formTwo = document.querySelector("#form-2");
const fieldsOne = formOne.querySelectorAll(".input");
const fieldsTwo = formTwo.querySelectorAll(".input");

function validationForm (form, fields) {
    form.addEventListener("submit", function () {
        event.preventDefault();

        for (let i = 0; i < fields.length; i++) {
            let errors = form.querySelectorAll(".error");

            for (let i = 0; i < errors.length; i++) {
                errors[i].remove();
            }

            if (!fields[i].value) {
                console.log("field is blank", fields[i]);
                let error = document.createElement("div");
                error.className = "error";
                error.style.color = "red";
                error.innerHTML = "Введите текст";
                form[i].parentElement.insertBefore(error, fields[i]);
            }
        }
    });
}

validationForm (formOne, fieldsOne);
validationForm (formTwo, fieldsTwo);