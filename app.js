// template_2214fxg

// service_adyukod

// UPnKTCZcG4nJ5s_pU

// <script type="text/javascript"
//         src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
// </script>
// <script type="text/javascript">
//    (function(){
//       emailjs.init({
//         publicKey: "UPnKTCZcG4nJ5s_pU",
//       });
//    })();
// </script>

function contact(event) {
    event.preventDefault();
    emailjs
        .sendForm(
            'service_adyukod',
            'template_2214fxg',
            event.target,
            'UPnKTCZcG4nJ5s_pU'
        ).then(() => {
            console.log('this worked1')
        })

}
