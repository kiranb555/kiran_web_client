import emailjs from '@emailjs/browser';

function sendEmail({ref}){
   emailjs.sendForm(
    process.env.REACT_APP_EMAIL_JS_SERVICE_KEY, 
    process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID, 
    ref.current, 
    process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY)
   .then((result) => {
       console.log(result.text);
   }, (error) => {
       console.log(error.text);
   });
}

export default sendEmail;