"use client"
import React, { useEffect, useRef } from 'react';
import '../style/tailwind.css'; // Import your custom CSS file
import {RiPlayFill,RiRestaurant2Line, RiCupLine,RiStarLine, RiTwitterLine, RiFacebookFill, RiInstagramLine, RiArrowDropDownLine, RiHotelBedLine, RiNodeTree, RiBillLine, RiCalendar2Fill, RiMenFill, RiMenu4Line, RiMenuLine  } from 'react-icons/ri';

import { gsap } from 'gsap';
const page =()=>{

  return(
   <>
 

   <div className='main'>
   <div>
      <img className='img' src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="" />
   </div>
   
   <div className='nav'>
      <p className='navp'>HOTEL</p>
      <div className='navy'>
         <a className='mar' href="#">About</a>
         <a className='mar' href="#">Service</a>
         <a className='mar' href="#">Rooms</a>
         <a className='mar' href="#">Blog</a>
         <a className='mar' href="#">Contact</a>
      </div>
      <div>
         <button className='btn'>SignUp</button>
         <div className='mens'><RiMenuLine></RiMenuLine></div>
      </div>
   </div>
   
   <div>
      <p className='mid'>Exclusive <br /> Boutique <br />Hotel</p>
      <br />
      <p className='sml'>Luxury Boutique Hotel</p>
      <div className='atag'>
         <div className="atag">
            <a href="#">
               <div className="circle space">
                  <RiTwitterLine />
               </div>
            </a>
            <a href="#">
               <div className="circle space">
                  <RiFacebookFill />
               </div>
            </a>
            <a href="#">
               <div className="circle space">
                  <RiInstagramLine />
               </div>
            </a>
         </div>
      </div>
   </div>
   
   <div className='wide'>
      <div className='circle1' class="right-50">  <RiArrowDropDownLine/></div>
      <div className='check'>
         <p className='p1'>ARRIVAL</p>
         <p className='p2'> 18 </p>
         <p className='p3'>Oct, 2023</p>
         <p className='p4'>Friday</p>
      </div>
      <div className='check1'>
         <p className='p5'>DEPARTURE</p>
         <p className='p6'>19</p>
         <p className='p7'>Oct, 2023</p>
         <p className='p8'>Saturday</p>
      </div>
      <div className='check3'>
         <p className='p9'>ADULTS</p>
         <p className='p10'>- 2 </p>
      </div>
      <div className='check4'>
         <p className='p11'>CHILDREN</p>
         <p className='p12'>- 2 </p>
      </div>
      <div className='check5'>
         <button className='btn1'>CHECK AVAILABILITY</button>
      </div>
   </div>
   
   <div className='hidden'>
     
   </div>
   </div>



 <div className='main1'>

<div className='left'>
<RiHotelBedLine size={96} className='bed' />
<p className='p13'>Luxury Plaza <br /> Hotel for You</p>
<p className='p14'>Distant orb has power to raise and purify our <br /> thoughts like a strain of sacred music</p> 
<button className='btn2'>ABOUT US</button>
</div>

<div className="right">

  <div className='card'></div>
<div className='card1'></div>
<div className='card2'>
 

<img className='image' src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
<div className='play'>

<div className='gol'>
<RiPlayFill size={24} color='yellow'/>
</div>
<p className='p15'>
Play Video
<br />
2:34
  </p>
</div>

</div>
</div>
</div>


  
<div className='main2'>

<div className='left1'>
<div className='card3'></div>
<div className='card4'></div>
<div className='card5'>
<img className='imagess' src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
<div className='play1'>

<div className='gol1'>
<RiStarLine size={24} color='white'/>
</div>
<p className='p18'>
+ $189
<br />
  </p>
  <p className='p19'>Additional Price</p>
</div>
</div>

</div>
<div className='right1'>
<img className='bed1' src="https://i.ibb.co/pfMwC75/1335675-200-removebg-preview.png" alt="" />
<p className='p16'>Wellness & Spa</p>
<p className='p17'>Raise and purify our  thoughts like a strain of sacred music. Or a noble picture or a passage from grander poets</p> 
<button className='btn3'>Explore</button>
</div>
</div>
 

<div className='main3'>
  <div className='left3'>
    <RiCupLine  className='cup' size={24} color='black'></RiCupLine>
    <p className='p20'>Restaurants <br />  & Bars</p>
<p className='p21'>Distant orb has power to raise and purify our thoughts like a strain of sacred music</p> 
<button className='btn4'>Reserve Table</button>
  </div>
  <div className='right3'>

  <div className='card6'> </div>

  <div className='card7'> </div>

  <div class='card8'>
  <img className='imap' src="https://media.istockphoto.com/id/615410192/photo/student-and-teacher-professional-cook-school-kitchen-preparing-chocolate-dessert.jpg?s=612x612&w=0&k=20&c=-ukli8uVbD0EvnG3imFc_nOtaXBwbnRxdmBx7jY2VEc=" alt="" />
  <div className='play2'>

<div className='gol2'>
<RiRestaurant2Line size={24} color='navy'/>
</div>
<p className='p22'>
+ $20
<br />
  </p>
  <p className='p23'>Lunch Price</p>
</div>

</div>


  </div>


</div>

<div className='main4' >
<div className='left4'>

  <div className='card9 box-shadow: 10px 44px 150px rgba(0, 0, 0, 0.1)'  >
    <img className='wifi' src="https://media.istockphoto.com/id/1318261402/photo/confidence-indian-businesswoman-using-laptop-in-co-working-space.jpg?s=612x612&w=0&k=20&c=ghTNaj2D9N3vyNScm6FozAdfjKYrSfzsrKKgugAfMz8=" alt="" />
    <p className='p24'>Free Wi-Fi</p>
    <br />
    <p className='p25'>Distant orb has power to raise and purify our thoughts like a <br />strain of sacred music, or a noble picture, or a passage</p>
  </div>
</div>


<div className='right4'>
  <p className='p26'>Advantages</p>
  <div className='card10'>
  <RiNodeTree className='celeb'></RiNodeTree>
    <p className='p27'>Special Events</p>
    <p className='p28'>Distant orb has power to raise and purify our <br /> thoughts like a strain of sacred music, or a nobie <br /> picture, or a  passage from the gender poets. 
    </p>
  </div>
  <div className='card11'>
    <RiBillLine className='bill'></RiBillLine>
    <p className='p29'>Best Price </p>
    <p className='p30'>Power to raise and purify <br /> our thoughts like a strain.</p>
  </div>
  <div className='card12'>
    <RiCalendar2Fill className='call'></RiCalendar2Fill>
    <p className='p31'>Best Price </p>
    <p className='p32'>Power to raise and purify <br /> our thoughts like a strain.</p>


  </div>
</div>


</div>

<div className='main5'>
  <p className='Rim'>Rooms</p>
  <div className='nine'>
  <div className='card13'></div>
  <div className='card14'></div>
  <div className='card15'>
  <button className='prices'>From $249</button>

    <img className='room1' src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="" />
    <p className='p33'>Double Room</p>
    <p className='p34'>Distant orb has power to raise and <br /> purify our thoughts like</p>
    <button className='book'>Book Now</button>

  </div>
  </div>
<div className='eight'>
<div className='card17'></div>

  <div className='card16'></div>
  
  <div className='card18'>
    <button className='prices'>From $349</button>
  <img className='room2' src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
<p className='p35'>Double Room</p>
<p className='p36'>Power to raise ad purify our thoughts <br /> like a strain of sacred music</p>
<button className='booki'>Book Now</button>


  </div>
  </div>

<div className='seven'>
<div className='card20'></div>
  <div className='card19'></div>

  <div className='card21'>
  <button className='prices'>From $199</button>

  <img className='room' src="https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
  <p className='p37'>Classic Room</p>
  <p className='p38'>Raise and purify our thoughts like a <br /> strain of sacred music, or a nobie</p>
<button className='book'>Book Now</button>

  </div>
  </div>
  </div>
  

 




  


   </>
  );
};
export default page;
