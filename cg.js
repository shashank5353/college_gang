console.log("hello wolrd!");
const f_l=["Shashank","Kumar","Jeevan","Ronith","Srihan","Suhas","Sai kiran","Arjun","Sidhartha","Naveen"];
function friend_list_creation(){
  const friends_list=document.querySelector(".friends_list");
  for(let i =0;i<f_l.length;i++){
  const friend_space=document.createElement("div");
  friend_space.classList.add("friend_space");
  
  const friend_photo_space=document.createElement("div");
  friend_photo_space.classList.add("friend_photo_space");
  
  const friend_photo=document.createElement("div");
  friend_photo.classList.add("friend_photo");
  friend_photo.style.backgroundImage=`url('f_photos/f${i+1}.jpg')`;
  friend_photo_space.append(friend_photo);
  
  friend_space.append(friend_photo_space);
  const friend_name=document.createElement("div");
  friend_name.classList.add("friend_name");
  friend_name.innerText=`${f_l[i]}`;
  friend_space.append(friend_name);
  
  friends_list.append(friend_space);
  }
}
friend_list_creation();

function slide_show_creation(){
  const slide_show=document.querySelector(" .slide_show");
  const slide=document.querySelector(".slide");
  const slide_move_left=document.querySelector(" .slide_move_left");
  const slide_move_right=document.querySelector(" .slide_move_right");
  let i=1;
  const limit=8;
  const change=(c)=>{
    slide_show.style.backgroundImage=`url(slide_show/s${c}.jpg)`;
    slide.style.backgroundImage=`url(slide_show/s${c}.jpg)`;
    console.log(c);
  }
  slide_move_left.addEventListener("click",()=>{
     if(i>1){
      i--;
    change(i);  
    }
    else{
      i=limit;
      change(i);
    }
    })
    slide_move_right.addEventListener("click",()=>{
      if(i<limit){
      i++;
      change(i);
    }
    else{
      i=1;
      change(i);
    }
    })
  setInterval(()=>{
    if(i>limit){
      i=1;
    }
    
    change(i);
    
    i++;
  },3000)
}
slide_show_creation();
