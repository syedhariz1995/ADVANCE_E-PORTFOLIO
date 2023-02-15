// template_au85j0j             // Template ID from emailJs
// service_3l70ump              // service ID from emailJs      // syedhariz.work@gmail.com
// k1hV8TSZePhdSIQzG            // Public Key



// Move background shapes

const scaleFactor = 1/20;
function moveBackground(event){
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX*scaleFactor;
    const y = event.clientY*scaleFactor;

    for(let i = 0; i < shapes.length; i++){
        const isOdd = i % 2 === 0;
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x*boolInt}px, ${y*boolInt}px)`
    }
}




// Dark theme
let contrastToggle = false
function toggleContrast(){
    contrastToggle = !contrastToggle
    if(contrastToggle){
        document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme")
    }
}





// Send form
function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
    emailjs
    .sendForm(
        'service_3l70ump',                                                  // service ID from Emailjs
        'template_au85j0j',                                                 // Template ID from Emailjs
        event.target,                                                       // Pass the fields from event (name, email, message)
        'k1hV8TSZePhdSIQzG'                                                 // user ID from EmailJs
    ).then(() =>{
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly on syedhariz1995@gmail.com"
        );
    })

}

// Fake data for testing
// const loading = document.querySelector('.modal__overlay--loading')
// const success = document.querySelector('.modal__overlay--success')
// loading.classList += " modal__overlay--visible"
// setTimeout(() => {
//     loading.classList.remove("modal__overlay--visible")
//     success.classList += " modal__overlay--visible"
//     console.log('It Worked 1')
// }, 1000)






// opening Modal
let isModalOpen = false;                                            // Default is closed
function toggleModal(){                                             // onClick in HTML
    if(isModalOpen){                                                // If it's open
        isModalOpen = false                                         // Make is false
        return document.body.classList.remove("modal--open")        // Thus, closing it
    }
    isModalOpen = !isModalOpen;                                     // Else, false = true
    document.body.classList += " modal--open"                       // Thus, opening it

}