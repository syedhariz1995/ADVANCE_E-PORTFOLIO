// template_au85j0j             // Template ID from emailJs
// service_3l70ump              // service ID from emailJs      // syedhariz.work@gmail.com
// k1hV8TSZePhdSIQzG            // Public Key


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