var userName = localStorage.getItem("user_name");
var roomname =  localStorage.getItem("room_name");
window.document.getElementById("kwitterRoomName").innerHTML = "You are in #"+roomname;



const firebaseConfig = {
    apiKey: "AIzaSyAc3g5G8EMpd4bdRxsuXPJkhwblSxU7t2w",
    authDomain: "project-kwitter-7b076.firebaseapp.com",
    databaseURL: "https://project-kwitter-7b076-default-rtdb.firebaseio.com",
    projectId: "project-kwitter-7b076",
    storageBucket: "project-kwitter-7b076.appspot.com",
    messagingSenderId: "614406556012",
    appId: "1:614406556012:web:e9e15e08c970a48dadcb49",
    measurementId: "G-PZTH4Y311S"
  };
  firebase.initializeApp(firebaseConfig); 
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function logout(){
    window.location = "index.html";
  }

function send(){
    var msg = window.document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
        name: userName,
        message: msg,
        like: 0
    });
       
    window.document.getElementById("msg").value = "";
    getData();
}
function getData() {
    /*document.getElementById("output").innerHTML = "";
    var row = "";
      firebase.database().ref(roomname).on('value',
        function(snapshot) 
        {
          
          snapshot.forEach(function(childSnapshot) 
            {
              childKey = childSnapshot.key;
              message = childKey;
              //Start code
              row = row + "<div>"+message+"</div><hr>";
              //End code
            });
            document.getElementById("output").innerHTML = row;
        });
      */  
  }
  