var image=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSllmXo2hfMquQbgILdPu_B1RWntK4uXN6bTuakktTloG4cWcZ_WpT4BwARbSq8OrU2zNU&usqp=CAU",
    "https://i.pinimg.com/originals/c1/a9/b2/c1a9b2512b29182b99fa3052c5f37e85.jpg",
    "https://thumbs.dreamstime.com/b/cute-cartoon-kids-colorful-stylish-clothes-fun-relatives-couple-young-happy-brother-sister-cheerful-daicing-childs-88592622.jpg",
    "https://cdn2.vectorstock.com/i/1000x1000/25/56/boy-and-her-brother-on-her-back-playing-together-vector-22652556.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81zxBf093zL.jpg",
]

var text=[
    "My Father's name is Yogesh Lal Karn",
    "My Mother's name is Radha Karn",
    "My Sister's name is Shakshi Karn",
    "My Cousin's name is Yuvi Karn ",
    "Welcome to my family book",
 ]

   var i = 0;
 function next(){
  if(i==5){
    i=0;
  }
  document.getElementById("album").src=image[i];
   i++;
   
  }
 