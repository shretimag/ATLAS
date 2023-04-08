const firebaseConfig = {
    apiKey: "AIzaSyAtrhpG_hOWxNIFuacOqz4IN1kzJzxsJlI",
    authDomain: "iitismclubs.firebaseapp.com",
    projectId: "iitismclubs",
    storageBucket: "iitismclubs.appspot.com",
    messagingSenderId: "242765089478",
    appId: "1:242765089478:web:a06957583a09551e1965c7"
};
firebase.initializeApp(firebaseConfig);
  

const database = firebase.database()
  

    
const add_event_button = document.getElementById("addevent")
add_event_button.addEventListener('click',()=>
{
    let clubid=document.getElementById("clubid").value
    let event_name=document.getElementById("eventname").value
    let date=document.getElementById("date").value
    let time=document.getElementById("time").value
    let venue=document.getElementById("venue").value
    database.ref("clubs/"+clubid+"/"+event_name).update({name:event_name,date:date,time:time,venue:venue})
    alert("event added!")
    
})    
    
    