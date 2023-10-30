import React from "react";
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faTelegram , faTwitter , faLinkedinIn , faGithub , faHtml5 ,faCss3Alt , faSquareJs } from "@fortawesome/free-brands-svg-icons";
import Email from "./Email";
import ThreeJSComponent from   "./Canvas";

export default function App_(){
    return(
        <>
      <ThreeJSComponent/> 
    <div className="h-[auto] w-full bg-gradient-to-r  from-[#fb8ff0] to-cyan-400 relative opacity-[1] brightness-[140%]  flex flex-col " id="app" >

      {//.............................................................................Navbar.............................................................................................
      }
       <div className="h-28 w-[100%]  justify-center align-middle mt-12 xl:mt-0 items-center flex ">
        <div className="h-[55%] w-[80%] bg-[rgba(0,0,0,0.25)] rounded-[50px] justify-between border-[#382268] border-2 flex flex-row">
        <a className="no-underline brightness-75 " href="https://drive.google.com/file/d/1B1A_kotirCP06E_7PJpgNvb5dsWP5U3C/view?usp=share_link" target="_blank" rel="noreferrer" ><div className="h-[100%] w-[200px] rounded-lg  fontmanual  text-black ml-2 flex items-center"><button className="h-[80%] w-[100%] border-[2px] shadow-md shadow-black border-cyan-800 rounded-3xl bg-[rgb(117,255,253)] text-3xl font-black ">My Resume</button></div> 
        </a>
            <div className="h-[100%] w-[290px]  align-middle  items-center justify-center flex flex-row flex-end ">
                  <div className="w-[33px] h-[33px] fill rounded-full brightness-75  my-2 mx-2 "><a href="https://t.me/amanagraw35" rel="noreferrer" target="_blank" ><FontAwesomeIcon icon={faTelegram} size="2xl" style={{color: "#212529",}}  /></a></div>
                  <div className="w-[33px] h-[33px] rounded-full  my-2 brightness-75 mx-2 justify-center align-middle px-[8px]  py-1.5  bg-[#212529] "><a target="_blank" rel="noreferrer" href="https://twitter.com/AmanAgrawal1310"><FontAwesomeIcon icon={faTwitter} size="lg" style={{color: "#4091b2",}} /></a></div>
                  <div className="w-[33px] h-[33px] rounded-full  my-2 brightness-75 mx-2 justify-center align-middle px-[8px]  py-1.5 bg-[#212529]"><a target="_blank"  rel="noreferrer" href="https://www.linkedin.com/in/aman-agrawal-269233252"><FontAwesomeIcon icon={faLinkedinIn} size="lg"   style={{color: "#4091b2",}}  /></a></div>
                  <div className="w-[33px] h-[33px] fill rounded-full brightness-75  my-2 mx-2 justify-center align-middle  bg-[##558bb3] "><a target="_blank" rel="noreferrer" href="https://github.com/Aman-agraw-35"><FontAwesomeIcon icon={faGithub} size="2xl"   style={{color: "#212529",}} /></a></div>
            </div>
        </div>
        </div>

      {//.............................................................................................................................................................................
      }


        <div className="xl:h-[70vh] w-full xl:mt-12 xl:pl-36 pl:0  items-center flex flex-col-reverse xl:flex-row pb-20 xl:pb-0 ">
          <div className="h-auto xl:w-[56%] w-[84%]  flex flex-col">
          <h1 className=" fontmanual h-auto   text-[7vh]  lg:text-[15vh] xl:text-[15vh]  2xl:text-[18vh] w-[100%] text-white bef  pb-4 relative xl:pt-24 " >Aman Agrawal</h1>
          <h1 className="  h-auto text-4xl w-[100%] fontmanual2xl:text-start  text-[#515151] ">I'm a full-stack web magician.</h1>
           <div className='h-[97px] w-[290] mt-8  ' >
           <h1 className="  h-auto text-2xl xl:w-[55%] border-l-4 border-l-[#515151] left:[100px] w-[100%] pl-6 xl:text-left  fontmanual2 text-[#515151] ">A grooming web developer and an engineering student at IIIT Bhopal.</h1>
           </div>
          </div>
          <div className="h-fit w-[44%] flex pt-28   ">
            <div className="md:h-[440px] h-[300px] w-[440px]   rounded-full  flex my-[100px] ">
               <img className='md:h-[440px] h-[300px] w-[440px]    object-fill rounded-full brightness-75'src="/resources/pp.jpeg" alt="" />
            </div>
          </div>
       </div>


{/* .........................................................................Top Part....................................................................................................... */}


       <div className="h-[650px] w-full  xl:pr-36 items-center xl:items-stretch   flex flex-col xl:flex-row-reverse   ">
          <div className="h-auto xl:w-[60%] w:[90%]  md:px-24 pl-10 xl:px-0 ">

          <h1 className=" fontmanual about h-auto text-[6vh] lg:text-[14vh] xl:text-[18vh] absolute z-10 text-white  xl:w-[50%] w-[90%] pb-4  xl:pt-28">About Me ={`>`} </h1>
          {/* <h1 className=" fontmanual1 h-auto text-9xl w-[100%] pb-4 pt-28">About Me ={`>`} </h1> */}
          <h1 className="  h-auto text-2xl xl:w-[82%] w-full fontmanual2 text-[#515151] border-l-4 xl:mt-[35%] lg:mt-[15%]] mt-[20%] border-l-[#515151]   xl:ml-40 pl-10 ">I'm Aman Agrawal, a dedicated student at IIIT Bhopal with a strong
           academic foundation, boasting a CGPA of 8.5. I've achieved the prestigious milestone of clearing the IIT JEE, showcasing my academic prowess. Beyond the classroom, I'm deeply passionate about 
           web development and am actively engaged in learning Data Structures and Algorithms (DSA) and Web Development . This blend of technical acumen and problem-solving skills has made me an
             adept coder. Additionally, I enjoy the strategic intricacies of chess, am an enthusiastic cricketer. My diverse interests reflect my drive for excellence and continuous self-improvement.</h1>
         
          </div>
          <div className="h-auto w-[40%] hidden xl:block ">
            <div className="2xl:h-[75%] w-[90%] h-[68%] mt-32 xl:ml-48 ml-20 rounded-[100%]  shadow-2xl shadow-black  " >
               <img className='h-[100%]  w-[100%]  fill rounded-[100%] shadow-lg shadow-black brightness-75 ' src="https://miro.medium.com/v2/resize:fit:1400/0*5uVFmvYDZ5GAYkif" alt="coding" />
            </div>
          </div>
       </div>

{/*....................................................................Skills Part........................................................................................................... */}


       <div className="h-[550px]  w-full   xl:pl-36  px-24 sm:px-5 flex flex-col   ">
          <div className="xl:h-auto h-fit  xl:pl-0 md:pl-16 xl:w-[80%] w-full relative ">
          <h1 className=" fontmanual h-auto text-[6vh] xl:text-[18vh] lg:text-[15vh] items-center xl:items-stretch lg:w-[100%] w-[80%] absolute  text-white abo pb-42 xl:pt-36 2xl:pt-30 ">Skills Gained {'=>'}</h1>

          {/* <h1 className=" fontmanual1 h-auto text-9xl w-[100%] pb-4 pt-36 abo">Skills Gained {'=>'}</h1> */}
       </div>
       <div class="h-[230px] text-4xl xl:gap-3 gap-10 md:w-[80%] w-full xl:mt-[43vh] lg:mt-[25vh] mt-[11vh]  fontmanual2  grid grid-cols-3 grid-rows-3  text-[#515151]   ">
                   <div class=" flex flex-row items-center brightness-75 "><FontAwesomeIcon icon={faHtml5} size="2xl" style={{color: "#e75608", marginLeft :"5px" }}  /><h1 className="text-2xl pl-8 ">Html</h1><span className="pl-4 pb-3" arial-label="6/6"></span></div>
                   <div class=" flex flex-row items-center brightness-75 "><FontAwesomeIcon icon={faCss3Alt} size="2xl" style={{color: "#2d53e7", marginLeft :"5px" }} /><h1 className="text-2xl pl-8 ">Css</h1><span className="pl-4 pb-3" arial-label="6/6"></span></div>
                   <div class="flex flex-row items-center brightness-75 "><FontAwesomeIcon icon={faSquareJs} size="2xl" style={{color: "#f7a025",}} /><h1 className="text-2xl pl-8 ">Javascript</h1><span className="pl-4 pb-3" arial-label="6/6"></span></div>
                   <div class="flex flex-row items-center brightness-75 "><img className="h-[65px] w-[65px] rounded-lg object-cover " src="https://sandny.com/wp-content/uploads/2021/07/logo-og-730x350.png" alt="React" /><h1 className="text-2xl pl-6 ">React</h1><span className="pl-4 pb-3" arial-label="6/6"></span></div>
                   <div class="flex flex-row items-center brightness-75 "><img className="h-[65px] w-[65px] rounded-lg"  src="https://icons-for-free.com/iconfiles/png/512/js+library+long+shadow+nodejs+web+icon-1320184850167478047.png" alt="Node" /><h1 className="text-2xl pl-6 ">Node</h1><span className="pl-4 pb-3" arial-label="6/6"></span></div>
                   <div class="flex flex-row items-center brightness-75"><img className="h-[65px] w-[65px] rounded-lg" src="https://play-lh.googleusercontent.com/YN4OEsoWsU1QrZFcwWlI8uuGhDKc4RAlP56FFyL03VFegD5tWjZ5cNWHocC_QRE_TvA" alt="tailwind" /><h1 className="text-2xl pl-8 ">Tailwind</h1><span className="pl-4 pb-3" arial-label="6/6"></span></div> 
                   <div class="flex flex-row items-center brightness-75"><img className="h-[65px] w-[65px] rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6UzrSiHRjo-rGRwOy8sSYgr9dVA8V6b71A&usqp=CAU" alt="Bootstrap" /><h1 className="text-2xl pl-6 ">Bootstrap</h1><span className="pl-4 pb-2" arial-label="6/6"></span></div>
                   <div class="flex flex-row items-center brightness-75 "><img className="h-[65px] w-[65px] rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8WjzJOqg8FnUhwR-ybrlznTAnfavaF2CnZ-NokuOEcu5PpUOMtzdXJJilatz5RXY_WE&usqp=CAU" alt="MongoDb" /><h1 className="text-2xl pl-6  ">MongoDb</h1><span className="pl-4 pb-3" arial-label="6/6"></span></div>
                   <div class="flex flex-row items-center brightness-75 "><img className="h-[65px] w-[65px] rounded-lg object-cover " src="https://www.freecodecamp.org/news/content/images/2021/08/vscode.png" alt="VsCode" /><h1 className="text-2xl pl-9 ">VScode</h1><span className="pl-4 pb-3" arial-label="6/6"></span></div>
       </div>

       </div>
      
{/* ..............................................................................Education...................................................................................................... */}

       <div className="h-auto  w-full  pr-36   flex flex-col mt-20 ">
          <div className="h-[170px] xl:w-[84%] w-[100%]  ">
          <h1 className=" fontmanual h-auto  text-[6vh] xl:text-[18vh] w-[70%] lg:text-[15vh] xl:w-[50%] pb-4 absolute left-[210px] xl:left-[37%] text-white abou "> {'<= '}Education</h1>

          {/* <h1 className=" fontmanual1 h-auto text-9xl w-[100.6%] pb-4   text-end  "> {'<= '}Education</h1> */}
          </div>

          <div className="h-[170px] w-[100%] mb-16">
         <a href="https://iiitbhopal.ac.in/#!/" target="_blank" rel="noreferrer" title="visit institute's website" >  <div className="h-[100%] w-[65%]  ml-36  brightness-75  shadow-xl shadow-black   " >
              <img className='h-[100%] w-[100%] object-contain  shadow-lg shadow-black ' src="https://iiitbhopal.ac.in/images/IIIT-Header.png" alt="coding" />
            </div></a> 
            </div>
            <div className="h-[250px] w-[100%]   ml-8 ">
             <h1 className="  h-auto text-2xl w-[100%] ml-28 pl-8 fontmanual2 border-l-4   border-l-[#515151]  text-[#515151] ">2nd Year Undergraduate in B-Tech <br />Electronics and Communication Department, 2022-2026 <br />Indian Institute of Information Technology Bhopal<br /><br/>

Work Experience: <br /> Event Co-ordinater at GDSC IIIT BHOPAL <br /> Conducted many events and guided over 500 students through GDSC .
</h1>
          </div>
        
       </div>

{/* .................................................................................Projects.................................................................................................... */}
       <div className="h-[650px]   w-full   flex flex-col ">
          <div className="xl:h-auto h-[100px] w-[70%]  pl-36  ">
          <h1 className=" fontmanual h-auto  text-[6vh] xl:text-[18vh] lg:text-[15vh] xl:w-[70%] w-[85%] ab absolute   text-white  pb-12 pt-24">Projects {'=>'}</h1>

          {/* <h1 className=" fontmanual1 h-auto text-9xl w-[105%] pb-12 pt-24">Projects {'=>'}</h1> */}
       </div>
       <div class="xl:h-[350px] h-[50px] gap-4  xl:w-[76%] w-[90%] fontmanual2 grid grid-cols-3 grid-rows-1 mx-auto  xl:mt-[40vh] mt-[200px]   text-[#515151]  ">
                   <div class="h-[90%] flex flex-col items-center rounded-lg brightness-75 "> <a target="_blank" rel="noreferrer" href="https://github.com/Aman-agraw-35/GHOST-GAMES-" title="View Code "> <img className="object-cover rounded-3xl h-[250px] w-[100%] mb-3 " src="https://moewalls.com/wp-content/uploads/2023/01/ghost-call-of-duty-modern-warfare-ii-thumb-728x410.jpg" alt="" /> </a> <h1 className="text-2xl">Ghost Games</h1></div>
                   <div class="h-[90%] flex flex-col items-center rounded-lg brightness-75 "> <a target="_blank" rel="noreferrer" href="https://github.com/Aman-agraw-35/Netflix-Clone" title="View Code " ><img className="object-cover rounded-3xl h-[250px] w-[100%] mb-3 " src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0ZmxpeCUyMGxvZ298ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" /> </a> <h1 className="text-2xl">Netflix Clone</h1></div>
                   <div class="h-[90%] flex flex-col items-center rounded-lg brightness-75 "> <a target="_blank" rel="noreferrer" href="https://github.com/Aman-agraw-35/My-Portfolio-Website" title="View Code "><img className="object-cover  rounded-3xl h-[250px] w-[100%] mb-3 " src="https://as1.ftcdn.net/v2/jpg/03/77/80/70/1000_F_377807035_Gk9hp790Ync54P4kyZ8CNV5NCUGgWSuc.jpg" alt="" /> </a> <h1 className="text-2xl">Portfolio Website</h1></div>
                   {/* <div class="h-[90%] flex flex-col items-center rounded-lg "><img className="object-cover rounded-3xl h-[230%] w-[100%] mb-3 " src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0ZmxpeCUyMGxvZ298ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" /><h1 className="text-2xl">Netflix Clone</h1></div> */}
                   
       </div>

       </div>





      {/* ...............................................................................Contact Me............................................................................................ */}


      <div className="xl:h-auto h-max  w-full  xl:pr-36 xl:pt-12 pt-24 flex flex-col pb-12 xl:pb-0 ">
          <div className="xl:h-[170px] h-[170px] xl:w-[84%] w-[100%] ">
          <h1 className=" fontmanual h-auto  ml-36 text-[6vh] xl:text-[18vh]  lg:text-[15vh] xl:w-[60%] w-[80%] pb-4 aaaa   absolute  xl:ml-[36%]    text-white "> {'<=  '}Contact Me</h1>
          {/* <h1 className=" fontmanual1 h-auto text-9xl w-[105%] pb-4   text-end  "> {'<=  '}Contact Me</h1> */}
          </div>

         <div className="xl:h-[270px] h-[300px] w-[100%] xl:mb-16   pl-24">
         <Email/>
         <div className="h-[20%] w-[270px]  align-middle  justify-center flex flex-row flex-end ">
                  <div className="w-[33px] h-[33px] brightness-75 fill rounded-full   my-2 mr-2 "><a href="https://t.me/amanagraw35" rel="noreferrer"target="_blank" ><FontAwesomeIcon icon={faTelegram} size="2xl" style={{color: "#212529",}}  /></a></div>
                  <div className="w-[33px] h-[33px] brightness-75 rounded-full  my-2 mx-2 justify-center align-middle px-[8px]  py-1.5  bg-[#212529] "><a rel="noreferrer" target="_blank" href="https://twitter.com/AmanAgrawal1310"><FontAwesomeIcon icon={faTwitter} size="lg" style={{color: "#c59aea",}} /></a></div>
                  <div className="w-[33px] h-[33px] brightness-75 rounded-full   my-2 mx-2 justify-center align-middle px-[8px]  py-1.5 bg-[#212529]"><a rel="noreferrer" target="_blank"  href="https://www.linkedin.com/in/aman-agrawal-269233252"><FontAwesomeIcon icon={faLinkedinIn} size="lg"   style={{color: "#c59aea",}}  /></a></div>
                  <div className="w-[33px] h-[33px] brightness-75  fill rounded-full   my-2 mx-2 justify-center align-middle  bg-[##558bb3] "><a rel="noreferrer" target="_blank" href="https://github.com/Aman-agraw-35"><FontAwesomeIcon icon={faGithub} size="2xl"   style={{color: "#212529",}} /></a></div>
            </div>
                  </div>
      </div>

          

        </div>

         </>

    )
} 