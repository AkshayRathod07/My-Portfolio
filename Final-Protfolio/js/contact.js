 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyD3NltmOO6lkI4bSlGWjwxBdxg71grOvto",
    authDomain: "portfoliocontactform-e3913.firebaseapp.com",
    projectId: "portfoliocontactform-e3913",
    storageBucket: "portfoliocontactform-e3913.appspot.com",
    messagingSenderId: "713948236477",
    appId: "1:713948236477:web:b86e0e0717c089579a45d4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   Refrence contactInfo Collection
let contactInfo = firebase.database().ref("infos")


// listenm for submit
let inputs = document.querySelectorAll("input");

document.querySelector(".contact-form").addEventListener("submit",submitForm);

function submitForm(e) {
    e.preventDefault();
    
    // get values 
    let Name = document.querySelector(".name").value;
    let Email = document.querySelector(".email").value;
    let Subject = document.querySelector(".subject").value;
    let Message = document.querySelector(".message").value;
    // console.log(Name,Email,Subject,Message);
    
    saveContactInfo(Name,Email,Subject,Message );

      // document.querySelector(".contact-form").reset();
      alert("Message submited and we will get back to you within 4 hours.")
}




//  save info to firebase
function saveContactInfo(Name,Email,Subject,Message){
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        User_name:Name,
        User_email:Email,
        User_subject:Subject,
        user_messg:Message
    });
}