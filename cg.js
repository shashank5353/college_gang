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
function info_box_creation(){
  const info_full_space=document.querySelector(" .info_full_space");
  const info_space_box=document.querySelector(" .info_space_box");
  const info=document.querySelector(" .info");
  info.addEventListener("click",()=>{
    info_full_space.style.display="flex";
    setTimeout(()=>{
      info_space_box.style.width="35vh";
      info_space_box.style.paddingLeft="1.5vh";
    info_space_box.style.paddingRight="1vh";
    },100);
  });
  
  const info_space_box_close=document.querySelector(" .info_space_box_close");
  info_space_box_close.addEventListener("click",()=>{
    info_space_box.style.width="0vh";
    setTimeout(()=>{
      info_space_box.style.padding="0vh";
    },300);
    setTimeout(()=>{
      info_full_space.style.display="none";
    },500);
  })

  
  const i_c=["Contact us","About page"];
  const i_cs=[["email","instagram","linkdin"],["page motive"]];
  const i_cs_s=[
    [`<i class="fa-solid fa-at"></i>`,
  `<i class="fa-brands fa-instagram"></i>`,
  `<i class="fa-brands fa-linkedin-in"></i>`],
  [`<i class="fa-solid fa-cubes-stacked"></i>`]
  ];
  const i_cs_l=[
    [`mailto:logla.officialteam@gmail.com?subject=Website Inquiry&body=Hi Logla Team,%0D%0A%0D%0AI’m interested in your services. Please get in touch with me.`,
  `https://www.instagram.com/loglaofficial?igsh=MTR1MWQwNGRnOGZwaA==`,
  `https://www.linkedin.com/in/shashank-t-7896a2318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`],
  [`https://shashank5353.github.io/Logla/`]
  ];
  for(let i=0;i<i_c.length;i++){
  const info_space_box_c=document.createElement("div");
  info_space_box_c.classList.add("info_space_box_c");
  
  const info_space_box_c_name=document.createElement("div");
  info_space_box_c_name.classList.add("info_space_box_c_name");
  info_space_box_c_name.innerText=`${i_c[i]}`;
info_space_box_c.append(info_space_box_c_name);

  const info_space_box_c_open=document.createElement("div");
  info_space_box_c_open.classList.add("info_space_box_c_open");
  info_space_box_c_open.innerHTML=`
   <i class="fa-solid fa-chevron-down"></i>
  `;
info_space_box_c.append(info_space_box_c_open);
  
  info_space_box.append(info_space_box_c);
  const info_space_box_cs_list=document.createElement("div");
  info_space_box_cs_list.classList.add("info_space_box_cs_list");
  
  for(let j=0;j<i_cs[i].length;j++){
    const info_space_box_cs=document.createElement("div");
  info_space_box_cs.classList.add("info_space_box_cs");
  info_space_box_cs.style.height="0vh";//@
  const info_space_box_cs_symbol=document.createElement("div");
  info_space_box_cs_symbol.classList.add("info_space_box_cs_symbol");
  info_space_box_cs_symbol.innerHTML=i_cs_s[i][j];
  info_space_box_cs.append(info_space_box_cs_symbol);
  
  const info_space_box_cs_name=document.createElement("a");
  info_space_box_cs_name.classList.add("info_space_box_cs_name");
  info_space_box_cs_name.innerText=i_cs[i][j];
  info_space_box_cs_name.href=i_cs_l[i][j];
  info_space_box_cs.append(info_space_box_cs_name);
  
  
  info_space_box_cs_list.append(info_space_box_cs);
  info_space_box_cs_list.style.display="none";
  
  }
  
  info_space_box_c_open.addEventListener("click",()=>{
    info_space_box_c_open_i=info_space_box_c_open.querySelector('i');
    i_s_b_cs_l=info_space_box_cs_list.querySelectorAll('div');
    if(info_space_box_cs_list.style.display=="none"){
   info_space_box_c_open_i.style.rotate="180deg"; 
   info_space_box_cs_list.style.display="flex";
   setTimeout(()=>{
     for(let u=0;u<i_s_b_cs_l.length;u++){
       i_s_b_cs_l[u].style.height="6vh";
     }
    // console.log(i_s_b_cs_l);
   },10);
   
    }
    else{
      info_space_box_c_open_i.style.rotate="0deg"; 
      for(let u=0;u<i_s_b_cs_l.length;u++){
       i_s_b_cs_l[u].style.height="0vh";
     }
   
   setTimeout(()=>{
     info_space_box_cs_list.style.display="none";
    // console.log(i_s_b_cs_l);
   },390);
    }
  })
  info_space_box.append(info_space_box_cs_list);
  }
  }
info_box_creation();
