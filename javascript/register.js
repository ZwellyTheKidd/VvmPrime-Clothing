
function register(){

    let myName = document.getElementById("myName").value;
    if (myName == "") {

        return false;
    }
    console.log(myName);  
    
    let surname = document.getElementById("surname").value;
    if (surname == "") {

        return false;
    }
    console.log(surname);  

    let myCheck1 = document.getElementById("myCheck1").checked;
    let myCheck2 = document.getElementById("myCheck2").checked;
    let myCheck3 = document.getElementById("myCheck3").checked;

    let checked=[myCheck1,myCheck2,myCheck3]
    let count=0

    let male = document.getElementById("myCheck1").value;
    let female = document.getElementById("myCheck2").value;
    let other = document.getElementById("myCheck3").value;
    
    let checkedGender=[male,female,other]
    let gender

for (let index = 0; index < checked.length; index++) {
    if (checked[index]) {
        count=count+1
        
    }
}

    if (count >1 || count ==0) {

       return false; /*Terminating when error*/
    }
    else if (count ==1) {

        for (let index = 0; index < checkedGender.length; index++) {
            
            if (checked[index]) {
                gender=checkedGender[index]
            }
        }
    }
    console.log(gender);  

    
    var email = document.getElementById("email").value;
    if (email == "") {

        return false;
    }
    console.log(email); 

    var password = document.getElementById("password").value;
    if (password == "") {

        return false;
    }
    console.log(password); 


    // creating new user in database and collecting their information ****************************************


    auth.createUserWithEmailAndPassword(email, password)
    .then((feedback) => {
      // Signed in 
      var user = feedback.user;
      console.log(user)

      db.collection("users").doc(auth.currentUser.uid).set({
        Name:myName,
        Surname:surname,
        Gender:gender,
        Email:email,
        Password:password
      })

      swal("Success", " Successfully created account ","success");
      

    })
    .catch((err) => {
      console.log(err)
      alert(err);
    
    });

}

function login(){

    let myEmail = document.getElementById("myEmail").value;
    console.log(myEmail);  
    
    var myPassword = document.getElementById("myPassword").value;
    console.log(myPassword);  


    auth.signInWithEmailAndPassword(myEmail, myPassword)
    .then(() => {

        location.href="index.html"
    
    })
    .catch((error) => {

        alert(error)
    })
    
}

auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;

      document.getElementById("login").style.color="red"
      console.log("user logged in")
      // ...
    } else {
      // User is signed out
      // ...

      console.log("user logged out")
      document.getElementById("login").style.color="black"
    }
  });

  function Logout(){
    auth.signOut()
    location.href="index.html"
  }