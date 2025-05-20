console.log("hello wolrd!");
const f_l=["Shashank","Kumar","Jeevan",
     "Ronith","Srihan","Suhas",
     "Sai kiran","Arjun","Sidhartha",
     "Naveen"]; 
const f_info=[
  ["04/09/2006","18/08/2006","21/04/2006",
  "30/08/2006","13/07/2006","18/03/2007",
  "29/01/2006","08/07/2006","18/10/2006",
  "01/01/2005"]
  ,["Shashank's tag","Kumar's tag","Jeevan's tag",
  "Ronith's tag","Srihan's tag","Suhas's tag",
  "Sai kiran's tag","Arjun's tag","Sidhartha's tag",
  "Naveen's tag"]
  ,["22264-cs-060","22264-cs-012","22264-cs-005",
  "22264-cs-009","22264-cs-025","22264-cs-057",
  "22264-cs-039","22264-cs-055","22264-cs-019",
  "22264-cs-052"]
  ,["+91 9948329185","+91 6281268102","+91 93460 28245",
     "+91 9618485563","+91 9121318152","+91 7997828830",
     "+91 8465944439","+91 7893065041","+91 9618634031",
     "+91 9347069436"]
  ,["Shashank@gmail.com","adepukumaraswamy22@gmail.com","Jeevan@gmail.com",
   "ronith4848@gmail.com","sankepallysrihan@gmail.com","suhas123anand@gmail.com",
    "saikiranns63@gmail.com","Arjun@gmail.com","Sidhartha@gmail.com",
    "Naveen@gmail.com"]
  ,["Koyyalagudem, Choutuppal.",
    "Koyyalagudem, Choutuppal.",
    "Dilshuknagar, Hydrabad.",
    "Ramnagar, Hydrabad.",
    "Mudimyal (Chevella)",
    "Padmarao Nagar, Secunderabad",
    "Karmanghat, LB nagar.",
    "Dilshuknagar, Hydrabad.",
    "Dilshuknagar, Hydrabad.",
    "Dilshuknagar, Hydrabad."]
  ,["https://maps.app.goo.gl/fCh9XC5G3Q4j4xv48?g_st=aw",
  "https://maps.app.goo.gl/yXdg28PyGBSjSHbw5?g_st=aw",
  "https://maps.app.goo.gl/pxA7FGsaN2PZSb437",
  "https://maps.app.goo.gl/mV7i1PwTWaaR6Vfv5",
  "https://maps.app.goo.gl/mQCrEJMtPkgcfp739",
  "https://maps.app.goo.gl/jkJbgWDiuivWZHaz8?g_st=aw",
  "https://maps.app.goo.gl/pxA7FGsaN2PZSb437",
  "https://maps.app.goo.gl/pxA7FGsaN2PZSb437",
  "https://maps.app.goo.gl/pxA7FGsaN2PZSb437",
  "https://maps.app.goo.gl/pxA7FGsaN2PZSb437"]];
const f_p_num=[
 //shashank
  [[22,30,19,35,17,20,18,16,9,25,41,43],[2,3,4,13,14,16,17,18,22,23,24,25,26,27,28,29], [1,2,3,4,5,6,7,9,10,11],[1,2,3,4,5,6,7,8,9,10,11,12,13,15]],
   //Kumar
  [[37,36,11,12,8],[1,3,5,6,7,8,9,15],[4,5,6,7,11],[2,4,5,6,7,8,9,10,11,12,13,15]],
   //Jeevan
  [[21,10],[2,6,16,17,21,29],[1,2,3,8],[3,4,5,6,7,8,9,10,11,12,13,14,15]],
   //Ronith
  [[31,33,32,13,44,45],[1,10,11,12,19,24,26],[1,2,3,8,9,11],[2,4,5,6,7,8,9,10,11,12,13,14,15]],
   //Srihan
  [[39,40,46,47],[11,23,27],[6,7,10],[6,11,13,15]],
  //Suhas
  [[34],[4,5,13],[8,9,10],[1,6,7,9,11,12,13,14,15]],
   //Sai kiran
  [[1,27,23,28,29,7,6,5,48],[7,19,20,21,22],[],[6,7,9,13,15]],
   //Arjun 
  [[15,4,3,2],[8,9,12,14,15],[],[1,2,3,6,7,9,15]],
   //Sidhartha
  [[26,24,14],[18,20],[4,5],[3,6,13,14,15]],
   //Naveen
  [[38,42],[10,28,25],[],[1,2,3,6,7,9,15]]
  ];
const f_w_l = [
  [ // Wishes for Shashank
    "Keep shining and never stop believing in yourself!",
    "Your dedication always inspires me. Keep it up!",
    "Wishing you endless success and happiness!",
    "You’re meant to do great things. Go get it!",
    "Stay strong and keep chasing your dreams!",
    "May every step you take lead you to success!",
    "The future is yours. Keep pushing forward!",
    "Never doubt your potential. You've got this!",
    "Keep moving forward with confidence and passion!"
  ],
  [ // Wishes for Kumar
    "You're doing amazing—just keep going!",
    "Every day you grow stronger. Stay focused!",
    "May your efforts turn into achievements!",
    "Keep grinding, success is on your way!",
    "You're an inspiration to everyone around!",
    "Believe in your path, you're on the right track!",
    "Continue being your awesome self!",
    "Success is just a step away, keep going!",
    "Chase your goals fearlessly!"
  ],
  [ // Wishes for Jeevan
    "You're full of potential—never doubt it!",
    "Keep exploring and learning new things!",
    "Good things are coming your way!",
    "Your energy is contagious—stay that way!",
    "Push your limits, you’re capable of more!",
    "Let your journey be filled with purpose!",
    "Every effort you make matters!",
    "You're on the path to greatness!",
    "Keep the fire alive inside you!"
  ],
  [ // Wishes for Ronith
    "You're smart, capable, and unstoppable!",
    "Let your passion guide your journey!",
    "You’ve got the talent, just trust the process!",
    "Never stop being curious and bold!",
    "You're creating your own legacy!",
    "Your future looks bright and promising!",
    "Keep doing your best—it's working!",
    "Stay fearless, stay humble!",
    "Let nothing limit your growth!"
  ],
  [ // Wishes for Srihan
    "Every step you take is progress!",
    "Keep shining with your unique light!",
    "You bring so much positivity—never change!",
    "Great things happen to those who persist!",
    "Stay focused, you're doing great!",
    "Keep moving forward with heart and purpose!",
    "Your presence makes a difference!",
    "Big things await you—go grab them!",
    "Your journey has just begun—make it count!"
  ],
  [ // Wishes for Suhas
    "Stay determined and keep reaching higher!",
    "You're stronger than you think!",
    "Let your dreams guide your reality!",
    "Keep up the amazing spirit!",
    "Your consistency is your superpower!",
    "Shine bright like you always do!",
    "Push your limits—you’ll be amazed!",
    "You're meant to inspire others!",
    "Never stop striving for more!"
  ],
  [ // Wishes for Sai kiran
    "You're on a path to something great!",
    "Every day is a chance to grow!",
    "Keep rising and never settle!",
    "Believe in the power of your dreams!",
    "You’re unstoppable when you're focused!",
    "Your energy lifts everyone up!",
    "Don't stop until you're proud!",
    "Keep that spark alive forever!",
    "You’ve got everything it takes!"
  ],
  [ // Wishes for Arjun
    "Let your strength lead the way!",
    "You're capable of extraordinary things!",
    "Stay bold and true to yourself!",
    "Keep making us proud!",
    "Your actions speak louder—keep going!",
    "Rise above every challenge!",
    "Never stop learning and exploring!",
    "You’re a force of nature—own it!",
    "Keep the momentum going strong!"
  ],
  [ // Wishes for Sidhartha
    "Keep doing what you love—success will follow!",
    "You're an example of quiet strength!",
    "Stay focused and fearless!",
    "You’ve got all it takes to win big!",
    "Don’t hold back—show the world your power!",
    "Keep growing and glowing!",
    "Success is in your hands—grab it!",
    "Let your determination speak for itself!",
    "You're building something awesome!"
  ],
  [ // Wishes for Naveen
    "You're making progress every day—keep it up!",
    "Chase your goals like a champion!",
    "You've got this, just keep moving!",
    "Let your journey be full of breakthroughs!",
    "Keep your head high and spirits higher!",
    "You're a true warrior—never give up!",
    "Every dream you have is worth chasing!",
    "Keep that winning attitude alive!",
    "Your time to shine is now!"
  ]
];

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
  friend_photo.addEventListener("click",()=>{
    
    friend_profile_page_creation(i);
  })
  const friend_name=document.createElement("div");
  friend_name.classList.add("friend_name");
  friend_name.innerText=`${f_l[i]}`;
  friend_space.append(friend_name);
  
  friends_list.append(friend_space);
  }
}
//friend_list_creation();

function slide_show_creation(){
  const slide_show=document.querySelector(" .slide_show");
  const slide=document.querySelector(".slide");
  const slide_move_left=document.querySelector(" .slide_move_left");
  const slide_move_right=document.querySelector(" .slide_move_right");
  let i=1;
  const limit=8;
  let order=true;
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
    order=false;
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
    order=false;
    })
  setInterval(()=>{
    if(order){
    if(i>limit){
      i=1;
    }
    change(i);
    i++;
    }
    else{
      order=true;
    }
  },3000)
}
//slide_show_creation();

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
//info_box_creation();
const scrollToTop=()=>{
    window.scrollTo({
      top: 0,
     behavior: 'auto'
    });
  }
function friend_profile_page_creation(ii){
const scrollToTopp=()=>{
    window.scrollTo({
      top: 0,
     behavior: 'smooth'
    });
  }  
 scrollToTopp();
  const index=ii;
  const friend_profile_page=document.querySelector(" .friend_profile_page");
  const home_page=document.querySelector(" .home_page");
  friend_profile_page.style.display="flex";
    home_page.style.display="none";
  const f_p_close=document.querySelector(" .f_p_close");
  f_p_close.addEventListener("click",()=>{
    friend_profile_page.style.display="none";
    home_page.style.display="flex";
  });
  const f_p_m_photo=document.querySelector(".f_p_m_photo");
  f_p_m_photo.style.backgroundImage=`url('f_photos/f${index+1}.jpg')`;
  const f_p_main_info_space=document.querySelector(".f_p_main_info_space");
  f_p_main_info_space.innerHTML="";
  const f_p_il=["f_p_name","f_p_dob","f_p_tag","f_p_pin","f_p_mobile_num","f_p_email","f_p_place"];
  const f_p_t=["","Date of birth : ","Tag : ","Pin : ","Mobile no : ","Email : ","Place : "];
  for(let i=0;i<f_p_il.length;i++){
    const il=document.createElement("div");
    il.classList.add(`${f_p_il[i]}`);
    if(i>0){
    il.innerText=`${f_p_t[i]}${f_info[i-1][index]}`
    }
    else{
      il.innerText=`${f_l[index]}`;
    }
    f_p_main_info_space.append(il);
  }
  
  const f_p_navigation_space=document.querySelector(".f_p_navigation_space");
  f_p_navigation_space.innerHTML="";
  const f_p_navigation=document.createElement("a");
    f_p_navigation.classList.add(`f_p_navigation`);
    f_p_navigation.innerHTML=`<i class="fa-solid fa-location-dot"></i>  navigate`;
    f_p_navigation.href=f_info[f_info.length-1][index];
    f_p_navigation_space.append(f_p_navigation);
 const f_p_photo_not_found_space=document.querySelector(".f_p_photo_not_found_space");
    //console.log(`hii ${f_p_num[index].length}`)
    if(f_p_num[index].length){
      f_p_photo_not_found_space.style.display="none";
    }
    else{
      f_p_photo_not_found_space.style.display="flex";
    }
    // f_p_photo_not_found_space.style.display="flex";
  //photo insertion
  const f_p_photo_galary_box=document.querySelector(".f_p_photo_galary_box");
  f_p_photo_galary_box.innerHTML="";
  
  //&&
  let uu=0;
  for(let i=0;i<f_p_num[index].length;i++){
  for(let j=0;j<f_p_num[index][i].length;j++){
    const f_p_photo_g=document.createElement("div");
    f_p_photo_g.classList.add(`f_p_photo_g`);
    
    const f_p_photo_g_img=document.createElement("div");
    f_p_photo_g_img.classList.add(`f_p_photo_g_img`);
    f_p_photo_g_img.style.backgroundImage=` url('f_a_s${i+1}/s${i+1}_${f_p_num[index][i][j]}.jpg')`;
    
  // console.log(index,i,f_p_num[index][i]);
 const uu_c=uu;
   f_p_photo_g_img.addEventListener("click",()=>{
     friend_profile_page.style.display="none";
     friend_profile_photos_page_creation(index,uu_c);
     console.log(i,j,uu_c);
   })
    f_p_photo_g.append(f_p_photo_g_img);
    f_p_photo_galary_box.append(f_p_photo_g);
    uu++;
  }
  }
 const f_p_photo_galary_box_open_space=document.querySelector(".f_p_photo_galary_box_open_space");
  if(uu<9){
    f_p_photo_galary_box_open_space.style.display="none";
  }
  else{
    f_p_photo_galary_box_open_space.style.display="flex";
const f_p_photo_g=document.querySelectorAll(".f_p_photo_g");
  const f_p_photo_galary_box_open=document.querySelector(".f_p_photo_galary_box_open");
   f_p_photo_galary_box_open.querySelector('i').style.rotate="0deg";
   for(let i=9;i<uu;i++){
     f_p_photo_g[i].classList.add("hidden");
      f_p_photo_g[i].style.display="none";
   }
   f_p_photo_galary_box_open.addEventListener("click",()=>{
     const isHidden = f_p_photo_g[9].classList.contains("hidden");
     if(isHidden){
    for(let i=9;i<uu;i++){
      f_p_photo_g[i].style.display="flex";
      setTimeout(()=>{
    f_p_photo_g[i].classList.remove("hidden");
      },10)
    }
    f_p_photo_galary_box_open.querySelector('i').style.rotate="180deg";
    }
    else{
    for(let i=9;i<uu;i++){
     f_p_photo_g[i].classList.add("hidden");
     setTimeout(()=>{
     f_p_photo_g[i].style.display="none";
     },40)
    }
    f_p_photo_galary_box_open.querySelector('i').style.rotate="0deg";
    }
   })
  }
  
  const f_p_photo_review_list=document.querySelector(".f_p_photo_review_list");
  
  f_p_photo_review_list.innerHTML="";
  let j=0;
  for(let i=0;i<f_w_l.length-1;i++){
    const f_p_photo_review_l=document.createElement("div");
    f_p_photo_review_l.classList.add(`f_p_photo_review_l`);
    
    const f_p_photo_review_l_head=document.createElement("div");
    f_p_photo_review_l_head.classList.add(`f_p_photo_review_l_head`);
    
    const f_p_photo_review_l_photo=document.createElement("div");
    f_p_photo_review_l_photo.classList.add(`f_p_photo_review_l_photo`);
    if(j===index){
       j = (j + 1) % f_l.length
    }
    f_p_photo_review_l_photo.style.backgroundImage=`url('f_photos/f${j+1}.jpg')`;
   f_p_photo_review_l_head.append(f_p_photo_review_l_photo);
    
    const f_p_photo_review_l_name=document.createElement("div");
    f_p_photo_review_l_name.classList.add(`f_p_photo_review_l_name`);
    f_p_photo_review_l_name.innerText=`${f_l[j]}`;
   f_p_photo_review_l_head.append(f_p_photo_review_l_name);
    
   f_p_photo_review_l.append(f_p_photo_review_l_head);
   
   const f_p_photo_review_l_body=document.createElement("div");
    f_p_photo_review_l_body.classList.add(`f_p_photo_review_l_body`);
    
    const f_p_photo_review_l_text=document.createElement("div");
    f_p_photo_review_l_text.classList.add(`f_p_photo_review_l_body`);
    f_p_photo_review_l_text.innerText=`${f_w_l[index][i]}`
   f_p_photo_review_l_body.append(f_p_photo_review_l_text);
    
   f_p_photo_review_l.append(f_p_photo_review_l_body);
   
    f_p_photo_review_list.append(f_p_photo_review_l);
    j++;
}
 
 
 const f_p_photo_review_l=document.querySelectorAll(".f_p_photo_review_l");
  const f_p_photo_review_list_open=document.querySelector(".f_p_photo_review_list_open");
   f_p_photo_review_list_open.querySelector('i').style.rotate="0deg";
   for(let i=3;i<f_w_l.length-1;i++){
     f_p_photo_review_l[i].classList.add("hidden");
      f_p_photo_review_l[i].style.display="none";
   }
  f_p_photo_review_list_open.addEventListener("click",()=>{
    const isHidden = f_p_photo_review_l[3].classList.contains("hidden");
    if(isHidden){
    for(let i=3;i<f_w_l.length-1;i++){
      f_p_photo_review_l[i].style.display="flex";
      setTimeout(()=>{
       f_p_photo_review_l[i].classList.remove("hidden");
      },0)
    }
    f_p_photo_review_list_open.querySelector('i').style.rotate="180deg";
    }
    else{
    for(let i=3;i<f_w_l.length-1;i++){
     f_p_photo_review_l[i].classList.add("hidden");
     setTimeout(()=>{
       f_p_photo_review_l[i].style.display="none";
     },40)
    }
    f_p_photo_review_list_open.querySelector('i').style.rotate="0deg";
    }
  });
}
//friend_profile_page_creation(1);

function friend_profile_photos_page_creation(ii,jj){
const index=ii;
 const friend_profile_photos_page=document.querySelector(".friend_profile_photos_page");
 friend_profile_photos_page.style.display="flex";
 const friend_profile_page=document.querySelector(".friend_profile_page");
  const f_p_p_close_space=document.querySelector(".f_p_p_close_space");
  f_p_p_close_space.addEventListener("click",()=>{
    scrollToTop();
    friend_profile_photos_page.style.display="none";
    friend_profile_page.style.display="flex";
  });
  const f_p_p_photo_list_space=document.querySelector(".f_p_p_photo_list_space");
  f_p_p_photo_list_space.innerHTML="";
  for(let i=0;i<f_p_num[index].length;i++){
  for(let j=0;j<f_p_num[index][i].length;j++){
    
    const f_p_p_photo_space=document.createElement("div");
    f_p_p_photo_space.classList.add(`f_p_p_photo_space`);
    
    const f_p_p_photo_list_head=document.createElement("div");
    f_p_p_photo_list_head.classList.add(`f_p_p_photo_list_head`);
    
    const f_p_p_photo_list_photo=document.createElement("div");
    f_p_p_photo_list_photo.classList.add(`f_p_p_photo_list_photo`);
    f_p_p_photo_list_photo.style.backgroundImage=`url('f_photos/f${index+1}.jpg')`;
    f_p_p_photo_list_head.append(f_p_p_photo_list_photo);
    
    const f_p_p_photo_list_name=document.createElement("div");
    f_p_p_photo_list_name.classList.add(`f_p_p_photo_list_name`);
    f_p_p_photo_list_name.innerText=`${f_l[index]}`;
    f_p_p_photo_list_head.append(f_p_p_photo_list_name);
    
    f_p_p_photo_space.append(f_p_p_photo_list_head);
    
    const f_p_p_photo=document.createElement("div");
    f_p_p_photo.classList.add(`f_p_p_photo`);
    f_p_p_photo.style.backgroundImage=` url('f_a_s${i+1}/s${i+1}_${f_p_num[index][i][j]}.jpg')`;
    
    const f_p_p_p=document.createElement("div");
    f_p_p_p.classList.add(`f_p_p_p`);
    f_p_p_p.style.backgroundImage=` url('f_a_s${i+1}/s${i+1}_${f_p_num[index][i][j]}.jpg')`;
    
    f_p_p_photo.append(f_p_p_p);
    
    f_p_p_photo_space.append(f_p_p_photo);
    
   const f_p_p_dis_space=document.createElement("div");
    f_p_p_dis_space.classList.add(`f_p_p_dis_space`);
    
    const f_p_p_dis=document.createElement("div");
    f_p_p_dis.classList.add(`f_p_p_dis`);
    let kl="";
    for(let k=0;k<f_p_num.length;k++){
      for(let l=0;l<f_p_num[k][i].length;l++){
     if(f_p_num[k][i][l]==f_p_num[index][i][j]){
          kl+=`#${f_l[k]} `;
          
        }
      }
    }
   // f_p_p_dis.innerText=`#${f_l[index]} `;
    f_p_p_dis.innerText=`${kl} `;
    f_p_p_dis_space.append(f_p_p_dis);
    
    f_p_p_photo_space.append(f_p_p_dis_space);
    
    f_p_p_photo_list_space.append(f_p_p_photo_space);
  }
  }
const f_p_p_photo_space_v=document.querySelectorAll(".f_p_p_photo_space");
console.log("jj:", jj);
console.log("Number of photo spaces:", f_p_p_photo_space_v.length);

setTimeout(()=>{
  f_p_p_photo_space_v[jj].scrollIntoView({ behavior: "auto",block: "center" });
},0)
  
}
// friend_profile_photos_page_creation();

function search_page_transport(){
  const search_page=document.querySelector(".search_page");
  const home_page=document.querySelector(".home_page");
  const friend_profile_page=document.querySelector(".friend_profile_page");
const search_task_icon=document.querySelector(".search_task_icon");
  search_task_icon.addEventListener("click",()=>{
    home_page.style.display="none";
    search_page.style.display="flex";
  })

const f_p_search_icon=document.querySelector(".f_p_search_icon");
  f_p_search_icon.addEventListener("click",()=>{
    friend_profile_page.style.display="none";
    search_page.style.display="flex";
  })
  
}
//search_page_transport();

  
function search_page_creation(){
  const search_page=document.querySelector(".search_page");
  const home_page=document.querySelector(".home_page");
  
  const s_p_close=document.querySelector(".s_p_close");
  s_p_close.addEventListener("click",()=>{
    search_page.style.display="none";
    home_page.style.display="flex";
  })
  const search_text=document.querySelector(".search_text");
  const search_list_space=document.querySelector(".search_list_space");
  
  search_text.addEventListener("input",()=>{
    search_list_space.innerHTML="";
    const slist=f_l.concat(f_info[2]);
    let flist=[];
    let fnlist=[];
    let fwlist=[];
    const value=search_text.value;
    const len=value.length;
    let y=0;
    if(len){
    for(let i=0;i<slist.length;i++){
      for(let j=0;j<=slist[i].length-len;j++){
      if(value.toLowerCase()==slist[i].slice(j,j+len).toLowerCase()){
        flist[y]=slist[i];
        fnlist[y]=i%f_l.length;
        fwlist[y]=j;
        y++;
        break;
      }
      }
    }
    }
    for(let i=0;i<flist.length;i++){
    const search_list=document.createElement("div");
    search_list.classList.add("search_list");
    
    const search_list_text=document.createElement("div");
    search_list_text.classList.add("search_list_text");
    const f=`${flist[i].slice(0,fwlist[i])}`;
    const m=`${flist[i].slice(fwlist[i],fwlist[i]+len)}`;
    const e=`${flist[i].slice(fwlist[i]+len,fwlist[i].length)}`
    search_list_text.innerHTML=`${f}<span class="search_text_highlite">${m}</span>${e}`;
    search_list.append(search_list_text);
    
    const search_list_icon=document.createElement("div");
    search_list_icon.classList.add("search_list_icon");
    search_list_icon.innerHTML=`
      <i class="fa-solid fa-magnifying-glass"></i>
    `;
    search_list.append(search_list_icon);
    
    search_list.addEventListener("click",()=>{
      search_page.style.display="none";
      friend_profile_page_creation(fnlist[i]);
    })
    search_list_space.append(search_list);
    }
  })
}
//search_page_creation();

function login_page_creation(){
  const name="Y29sbGVnZSBnYW5n";
  const password="I2JvbmQtMjAyMw==";
  const login_page=document.querySelector(".login_page");
  const home_page=document.querySelector(".home_page");
 const l_p_gang_slide_text_name=document.querySelector(".l_p_gang_slide_text_name");
const l_p_gang_slide_text_password=document.querySelector(".l_p_gang_slide_text_password");
const l_p_gang_slide_dis_p_eye=document.querySelector(".l_p_gang_slide_dis_p_eye");
let eye=true;
l_p_gang_slide_dis_p_eye.addEventListener("click",()=>{
  
  if(eye){
    l_p_gang_slide_dis_p_eye.innerHTML=`
    <i class="fa-solid fa-eye"></i> `;
    //console.log("eye@");
    l_p_gang_slide_text_password.type = "text";
    eye=false;
  }
  else{
    l_p_gang_slide_dis_p_eye.innerHTML=` <i class="fa-solid fa-eye-slash"></i>`;
   // console.log("eye #");
    eye=true;
    l_p_gang_slide_text_password.type = "password";
  }
})

const login_page_notify=document.querySelector(".login_page_notify");

const l_p_submit_btn=document.querySelector(".l_p_submit_btn");
l_p_submit_btn.addEventListener("click",()=>{
 u_name= btoa(l_p_gang_slide_text_name.value.toLowerCase().trim());
u_password= btoa(l_p_gang_slide_text_password.value.trim());
 const shack=()=>{
   login_page_notify.style.paddingLeft="5vh";
   setTimeout(()=>{
     login_page_notify.style.padding="0vh";
     login_page_notify.style.paddingRight="5vh";
     setTimeout(()=>{
     login_page_notify.style.padding="0vh";
   },200)
   },200)
 }
 shack();
 login_page_notify.innerText="";
 if(u_name){
  if(u_name==name){
    if(u_password){
      if(u_password==password){
        login_page.style.display="none";
        home_page.style.display="flex";
        friend_list_creation();
        slide_show_creation();
        info_box_creation();
        search_page_transport();
      }
      else{
        login_page_notify.innerText=`"Please enter valid password!"`;
      }
    }
    else{
      login_page_notify.innerText=`"Please enter password!"`;
    }
  }
  else{
    login_page_notify.innerText=`"Please enter valid gang name!"`;
  }
 }
 else{
   login_page_notify.innerText=`"Please enter gang name!"`;
 }
})
}
login_page_creation();
