function sendEmail(){
    const templateParams = {
        name : document.querySelector(`#name`).Value,
        email : document.querySelector(`#email`).Value,
        subject : document.querySelector(`#subject`).Value,
        message : document.querySelector(`#message`).value,
    };
    emailjs.send("service_2mmhqtp", "template_h81lrq1", templateParams)
    .then(()=> alert("Email sent!").catch(()=> alert("Email not send!")))
}