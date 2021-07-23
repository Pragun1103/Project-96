//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDccOfFEu_0Gzg-1JK2rkl5_VGxrDX14R8",
    authDomain: "kwitterpage-a6f1e.firebaseapp.com",
    databaseURL: "https://kwitterpage-a6f1e-default-rtdb.firebaseio.com",
    projectId: "kwitterpage-a6f1e",
    storageBucket: "kwitterpage-a6f1e.appspot.com",
    messagingSenderId: "549140752493",
    appId: "1:549140752493:web:7a39ddda59ce028298f764"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});
document.getElementById("msg").value="";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
