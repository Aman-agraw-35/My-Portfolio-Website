import React from "react";
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons';
import { faTelegram , faTwitter , faLinkedinIn , faGithub , faHtml5 ,faCss3Alt , faSquareJs ,faReact ,faNodeJs} from "@fortawesome/free-brands-svg-icons";
function App1(){

    return( <div className="h-[auto] w-full bg-gradient-to-r from-[#fb8ff0] to-cyan-400 ;" >

      {//.............................................................................Navbar.............................................................................................
      }
       <div className="h-28 w-[100%]  justify-center align-middle items-center flex ">
        <div className="h-[55%] w-[80%] bg-[rgba(0,0,0,0.25)] rounded-[50px] justify-between border-[#382268] border-2 flex flex-row">
            <div className="h-[100%] w-[200px] rounded-lg  fontmanual  text-black ml-2 flex items-center"><button className="h-[80%] w-[100%] border-[2px] shadow-md shadow-black border-cyan-800 rounded-3xl bg-[rgb(117,255,253)] text-3xl font-black ">My Resume</button></div>
            <div className="h-[100%] w-[290px]  align-middle  items-center justify-center flex flex-row flex-end ">
                  <div className="w-[33px] h-[33px] fill rounded-full   my-2 mx-2 "><a href="https://t.me/amanagraw35"><FontAwesomeIcon icon={faTelegram} size="2xl" style={{color: "#212529",}}  /></a></div>
                  <div className="w-[33px] h-[33px] rounded-full  my-2 mx-2 justify-center align-middle px-[8px]  py-1.5  bg-[#212529] "><a href="https://twitter.com/AmanAgrawal1310"><FontAwesomeIcon icon={faTwitter} size="lg" style={{color: "#558bb3",}} /></a></div>
                  <div className="w-[33px] h-[33px] rounded-full   my-2 mx-2 justify-center align-middle px-[8px]  py-1.5 bg-[#212529]"><a href="https://www.linkedin.com/in/aman-agrawal-269233252"><FontAwesomeIcon icon={faLinkedinIn} size="lg"   style={{color: "#558bb3",}}  /></a></div>
                  <div className="w-[33px] h-[33px] fill rounded-full  my-2 mx-2 justify-center align-middle  bg-[#212529] bg-[#558bb3]"><a href="https://github.com/Aman-agraw-35"><FontAwesomeIcon icon={faGithub} size="2xl"   style={{color: "#212529",}} /></a></div>
            </div>
        </div>
        </div>

      {//.............................................................................................................................................................................
      }


        <div className="h-[500px] w-full mt-12 pl-36   flex flex-row  ">
          <div className="h-auto w-[53%] ">
          <h1 className=" fontmanual h-auto text-9xl w-[100%] text-white  left-[150px] pb-4 absolute pt-24">Aman Agrawal</h1>
          <h1 className=" fontmanual1 h-auto text-9xl w-[100%] pb-4 pt-24  ">Aman Agrawal</h1>
          <h1 className="  h-auto text-4xl w-[100%] fontmanual2 text-[#515151] ">I'm a full-stack web magician.</h1>
           <div className='h-[97px] w-[290] mt-8  border-l-4 border-l-[#515151]' >
           <h1 className="  h-auto text-2xl w-[55%] pl-6 fontmanual2 text-[#515151] ">I am a grooming web developer and an engineering student at IIIT Bhopal.</h1>
           </div>
          </div>
          <div className="h-full w-[47%] flex   ">
            <div className="h-[400px] w-[400px] rounded-full  flex my-[100px] ">
               <img className='h-full w-full fill rounded-full'src="/resources/pp.jpeg" alt="" />
            </div>
          </div>
       </div>





       <div className="h-[650px] w-full  pr-36   flex flex-row-reverse  ">
          <div className="h-auto w-[60%] ">

          <h1 className=" fontmanual h-auto text-9xl absolute left-[36.65%] text-white  w-[100%] pb-4 pt-28">About Me ={`>`} </h1>
          <h1 className=" fontmanual1 h-auto text-9xl w-[100%] pb-4 pt-28">About Me ={`>`} </h1>
          <h1 className="  h-auto text-2xl w-[100%] fontmanual2 text-[#515151] pl-40">urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset s</h1>
         
          </div>
          <div className="h-auto w-[40%] ">
            <div className="h-[75%] w-[90%] mt-32 ml-48  rounded-[100%]  shadow-2xl shadow-black  " >
               <img className='h-[100%] w-[100%] fill rounded-[100%] shadow-lg shadow-black ' src="https://miro.medium.com/v2/resize:fit:1400/0*5uVFmvYDZ5GAYkif" alt="coding" />
            </div>
          </div>
       </div>



       <div className="h-[550px] w-full  pl-36  flex flex-col  ">
          <div className="h-auto w-[70%] ">
          <h1 className=" fontmanual h-auto text-9xl w-[100%] absolute left-[9.8%] text-white pb-4 pt-36">Skills Gained {'=>'}</h1>

          <h1 className=" fontmanual1 h-auto text-9xl w-[100%] pb-4 pt-36">Skills Gained {'=>'}</h1>
       </div>
       <div class="h-[230px] text-4xl gap-3 w-[80%] fontmanual2 grid grid-cols-3 grid-rows-3  text-[#515151]  ">
                   <div class=" flex flex-row items-center "><FontAwesomeIcon icon={faHtml5} size="2xl" style={{color: "#e75608",}}  /><h1 className="text-2xl pl-8 ">Html</h1><span className="pl-4 pb-3" arial-label="6/6">●●●●●●</span></div>
                   <div class=" flex flex-row items-center"><FontAwesomeIcon icon={faCss3Alt} size="2xl" style={{color: "#2d53e7",}} /><h1 className="text-2xl pl-8 ">Css</h1><span className="pl-4 pb-3" arial-label="6/6">●●●●●●</span></div>
                   <div class="flex flex-row items-center"><FontAwesomeIcon icon={faSquareJs} size="2xl" style={{color: "#f7a025",}} /><h1 className="text-2xl pl-8 ">Javascript</h1><span className="pl-4 pb-3" arial-label="6/6">●●●●●</span></div>
                   <div class="flex flex-row items-center"><img className="h-[65px] w-[65px] rounded-lg object-cover " src="https://sandny.com/wp-content/uploads/2021/07/logo-og-730x350.png" alt="React" /><h1 className="text-2xl pl-6 ">React</h1><span className="pl-4 pb-3" arial-label="6/6">●●●●●</span></div>
                   <div class="flex flex-row items-center"><img className="h-[65px] w-[65px] rounded-lg"  src="https://icons-for-free.com/iconfiles/png/512/js+library+long+shadow+nodejs+web+icon-1320184850167478047.png" alt="Node" /><h1 className="text-2xl pl-6 ">Node</h1><span className="pl-4 pb-3" arial-label="6/6">●●●</span></div>
                   <div class="flex flex-row items-center"><img className="h-[65px] w-[65px] rounded-lg" src="https://play-lh.googleusercontent.com/YN4OEsoWsU1QrZFcwWlI8uuGhDKc4RAlP56FFyL03VFegD5tWjZ5cNWHocC_QRE_TvA" alt="tailwind" /><h1 className="text-2xl pl-8 ">Tailwind</h1><span className="pl-4 pb-3" arial-label="6/6">●●●●●</span></div> 
                   <div class="flex flex-row items-center"><img className="h-[65px] w-[65px] rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6UzrSiHRjo-rGRwOy8sSYgr9dVA8V6b71A&usqp=CAU" alt="Bootstrap" /><h1 className="text-2xl pl-6 ">Bootstrap</h1><span className="pl-4 pb-2" arial-label="6/6">●●●●</span></div>
                   <div class="flex flex-row items-center"><img className="h-[65px] w-[65px] rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8WjzJOqg8FnUhwR-ybrlznTAnfavaF2CnZ-NokuOEcu5PpUOMtzdXJJilatz5RXY_WE&usqp=CAU" alt="MongoDb" /><h1 className="text-2xl pl-6  ">MongoDb</h1><span className="pl-4 pb-3" arial-label="6/6">●●●●</span></div>
                   <div class="flex flex-row items-center"><img className="h-[65px] w-[65px] rounded-lg object-cover " src="https://www.freecodecamp.org/news/content/images/2021/08/vscode.png" alt="VsCode" /><h1 className="text-2xl pl-9 ">VScode</h1><span className="pl-4 pb-3" arial-label="6/6">●●●●●●</span></div>
       </div>

       </div>
      


       <div className="h-auto  w-full  pr-36   flex flex-col mt-40 ">
          <div className="h-[170px] w-[84%]  ">
          <h1 className=" fontmanual h-auto text-9xl w-[105%] pb-4 absolute left-[37%] text-white  "> {'<= '}Education</h1>

          <h1 className=" fontmanual1 h-auto text-9xl w-[100.6%] pb-4   text-end  "> {'<= '}Education</h1>
          </div>

          <div className="h-[170px] w-[100%] mb-16">
            <div className="h-[100%] w-[65%]  ml-48    shadow-xl shadow-black   " >
              <img className='h-[100%] w-[100%] object-cover  shadow-lg shadow-black ' src="https://iiitbhopal.ac.in/images/IIIT-Header.png" alt="coding" />
            </div>
            </div>
            <div className="h-[150px] w-[100%]   ml-8 ">
             <h1 className="  h-auto text-2xl w-[100%] pl-40 fontmanual2 text-[#515151] ">Course: 2nd Year Undergraduate in B-Tech <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Electronics and Communication Department, 2022-2026 <br /><br />

Institute: Indian Institute of Information Technology Bhopal (IIIT BHOPAL) <br /><br/>

Work Experience: Event Co-ordinater at GDSC IIIT BHOPAL <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Conducted many events and guided over 500 students through GDSC .
</h1>
          </div>
        
       </div>


       <div className="h-[650px] w-full   flex flex-col  ">
          <div className="h-auto w-[70%]  pl-36  ">
          <h1 className=" fontmanual h-auto text-9xl w-[105%] absolute left-[9%] text-white  pb-4 pt-24">Projects {'=>'}</h1>

          <h1 className=" fontmanual1 h-auto text-9xl w-[105%] pb-4 pt-24">Projects {'=>'}</h1>
       </div>
       <div class="h-[350px] gap-4  w-[76%] fontmanual2 grid grid-cols-3 grid-rows-1 mx-auto  text-[#515151]  ">
                   <div class="h-[90%] flex flex-col items-center rounded-lg "><img className="object-cover rounded-3xl h-[250px] w-[100%] mb-3 " src="https://moewalls.com/wp-content/uploads/2023/01/ghost-call-of-duty-modern-warfare-ii-thumb-728x410.jpg" alt="" /><h1 className="text-2xl">Ghost Games</h1></div>
                   <div class="h-[90%] flex flex-col items-center rounded-lg "><img className="object-cover rounded-3xl h-[250px] w-[100%] mb-3 " src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0ZmxpeCUyMGxvZ298ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" /><h1 className="text-2xl">Netflix Clone</h1></div>
                   <div class="h-[90%] flex flex-col items-center rounded-lg "><img className="object-cover  rounded-3xl h-[250px] w-[100%] mb-3 " src="https://as1.ftcdn.net/v2/jpg/03/77/80/70/1000_F_377807035_Gk9hp790Ync54P4kyZ8CNV5NCUGgWSuc.jpg" alt="" /><h1 className="text-2xl">Portfolio Website</h1></div>
                   {/* <div class="h-[90%] flex flex-col items-center rounded-lg "><img className="object-cover rounded-3xl h-[230%] w-[100%] mb-3 " src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0ZmxpeCUyMGxvZ298ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" /><h1 className="text-2xl">Netflix Clone</h1></div> */}
                   
       </div>

       </div>





      
      <div className="h-auto  w-full  pr-36 pt-12  flex flex-col  ">
          <div className="h-[170px] w-[84%]  ">
          <h1 className=" fontmanual h-auto text-9xl w-[105%] pb-4   text-center  absolute left-[5.3%] text-white "> {'<=  '}Contact Me</h1>
          <h1 className=" fontmanual1 h-auto text-9xl w-[105%] pb-4   text-end  "> {'<=  '}Contact Me</h1>
          </div>

         <div className="h-[270px] w-[100%] mb-16">
         <form action="submit">
            <h1></h1>
            <input className="mx-10 my-3 px-3 text-lg py-2 bg-[rgba(0,0,0,0.6)] rounded-sm text-white " placeholder="Enter your Name" type="text" /> <br />
            <input  className="mx-10 text-lg px-3 py-2 bg-[rgba(0,0,0,0.6)] h-[50px] w-[1200px] text-white text-start flex flex-nowrap rounded-sm  placeholder:align-top " placeholder="Your message for me." type="text" />
            <button className="mx-10 my-3 px-3 text-lg py-2 font-semibold bg-[white] text-black rounded-lg" >Send</button>
         </form>

         </div>
      </div>



        </div>
    );
}
export default App1 