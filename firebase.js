var firebaseConfig = {
    apiKey: "AIzaSyAtrhpG_hOWxNIFuacOqz4IN1kzJzxsJlI",
  authDomain: "iitismclubs.firebaseapp.com",
  databaseURL: "https://iitismclubs-default-rtdb.firebaseio.com",
  projectId: "iitismclubs",
  storageBucket: "iitismclubs.appspot.com",
  messagingSenderId: "242765089478",
  appId: "1:242765089478:web:a06957583a09551e1965c7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()

database.ref('clubs').on("value",function(snapshot){const data=snapshot.val()
  let formlink=[]
  let img=[]
  // console.log(Object.values(data))
  
  
  for (let i=0;i<Object.keys(data).length;i++){
    for (let j=0;j<Object.keys(Object.values(data)[i]).length;j++)
    {
      let k=Object.values((Object.values(data)[i]))[j]
      
      formlink.push(k["formlink"])
      img.push(k["imglink"])
      
  
    }
  }
  console.log(formlink)
  console.log(img)  
  
  })