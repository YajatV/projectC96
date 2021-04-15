//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCLMuou29H0GI-UUCA7PXqkOZT2jnlTLgk",
      authDomain: "c-94-413fe.firebaseapp.com",
      databaseURL: "https://c-94-413fe-default-rtdb.firebaseio.com",
      projectId: "c-94-413fe",
      storageBucket: "c-94-413fe.appspot.com",
      messagingSenderId: "421183915003",
      appId: "1:421183915003:web:87051da3eff64cd06a015e",
      measurementId: "G-8SVMH595X9"
    };

    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name+" !";

    function addroom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="Kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name "+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       documet.getElementById("output").innerHTML+=row;
      //Start code

      //End code

      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");window.location="index.html";
}