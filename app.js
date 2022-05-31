
// const button = document.querySelector(".main_card_image2")

// button.addEventListener('click', generate)

// function generate() {
    
    
//     const file = "https://api.adviceslip.com/advice"
    
//     fetch(file)
//     .then(x => x.text())
//     .then(y => 
//         document.getElementById("main_card_advice").innerHTML = y
//         );
// }
// THE BASIC SYNTAX OF THE FETCH API

const title = document.querySelector("#advicenumber");
const content = document.querySelector("#textadvice");
const button = document.querySelector(".main_card_image2");
const dicebtn = document.querySelector('.btn')

function generate(){

    const file = "https://api.adviceslip.com/advice"

    fetch(file)

    .then(response =>
         response.json()
    )

    .then(information => {
        const num = information.slip.id
        const text = information.slip.advice;

        title.innerHTML =  num;
        content.innerHTML =  text;
    })

    .catch(error => {
        console.log(error);
    })

}

button.addEventListener('click', ()=>{
    dicebtn.classList.toggle('dice')
    generate()
})

window.onload = ()=>{
    generate()
}

setInterval(generate, 60000);
