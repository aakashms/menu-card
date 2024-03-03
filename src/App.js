import "./App.css";
import "./index.css";
import Kidpage from "./Kidpage";
import logo from "./Images/logo-navbar.png";
import flogo from "./Images/funlogo-navbar.png";
import Foods from "./Foods";
import micon from "./Images/menu.png";


import l1 from "./Images/lf/6.png";
import s1 from "./Images/sf/13.png";
import b1 from "./Images/bff/1.png";
import l2 from "./Images/lf/7.png";
import s2 from "./Images/sf/14.png";
import b2 from "./Images/bff/2.png";
import l3 from "./Images/lf/8.png";
import s3 from "./Images/sf/15.png";
import b3 from "./Images/bff/3.png";
import l4 from "./Images/lf/9.png";
import s4 from "./Images/sf/16.png";
import b4 from "./Images/bff/4.png";
import l5 from "./Images/lf/10.png";
import s5 from "./Images/sf/17.png";
import b5 from "./Images/bff/5.png";
import l6 from "./Images/lf/11.png";
import s6 from "./Images/sf/18.png";
import l7 from "./Images/lf/12.png";
import { useEffect, useState } from "react";

function App() {
  const [menu, setmenu] = useState(
    <div className="content">
      <Foods imgurl={l1} info="Coconut Rice" cost="₹60" />
      <Foods imgurl={l7} info="Tomato Rice" cost="₹55" />
      <Foods imgurl={l3} info="Lemon Rice" cost="₹55" />
      <Foods imgurl={l2} info="Curd Rice" cost="₹50" />
      <Foods imgurl={l5} info="Rasam with White rice" cost="₹50" />
      <Foods imgurl={l6} info="Sambar Rice" cost="₹45" />
      <Foods imgurl={l4} info="MorKulambu with White rice" cost="₹55" />

      <Foods imgurl={s2} info="Bonda" cost="₹12" />
      <Foods imgurl={s1} info="Bajji" cost="₹12" />
      <Foods imgurl={s4} info="Murukku" cost="₹10" />
      <Foods imgurl={s5} info="Samosa" cost="₹18" />
      <Foods imgurl={s3} info="Mixture" cost="₹25" />
      <Foods imgurl={s6} info="Vadai" cost="₹10" />

      <Foods imgurl={b1} info="Dosai" cost="₹35" />
      <Foods imgurl={b2} info="idly" cost="₹20" />
      <Foods imgurl={b3} info="Chappathi" cost="₹30" />
      <Foods imgurl={b4} info="Poori" cost="₹30" />
      <Foods imgurl={b5} info="Adai Dosai" cost="₹40" />
    </div>
  );

  function allmenu() {
    setmenu(
      <div className="content">
        <Foods imgurl={l1} info="Coconut Rice" cost="₹60" />
        <Foods imgurl={l7} info="Tomato Rice" cost="₹55" />
        <Foods imgurl={l3} info="Lemon Rice" cost="₹55" />
        <Foods imgurl={l2} info="Curd Rice" cost="₹50" />
        <Foods imgurl={l5} info="Rasam with White rice" cost="₹50" />
        <Foods imgurl={l6} info="Sambar Rice" cost="₹45" />
        <Foods imgurl={l4} info="MorKulambu with White rice" cost="₹55" />

        <Foods imgurl={s2} info="Bonda" cost="₹12" />
        <Foods imgurl={s1} info="Bajji" cost="₹12" />
        <Foods imgurl={s4} info="Murukku" cost="₹10" />
        <Foods imgurl={s5} info="Samosa" cost="₹18" />
        <Foods imgurl={s3} info="Mixture" cost="₹25" />
        <Foods imgurl={s6} info="Vadai" cost="₹10" />

        <Foods imgurl={b1} info="Dosai" cost="₹35" />
        <Foods imgurl={b2} info="idly" cost="₹20" />
        <Foods imgurl={b3} info="Chappathi" cost="₹30" />
        <Foods imgurl={b4} info="Poori" cost="₹30" />
        <Foods imgurl={b5} info="Adai Dosai" cost="₹40" />
      </div>
    );
  }
  function lfmenu() {
    setmenu(
      <div className="content">
        <Foods imgurl={l1} info="Coconut Rice" cost="₹60" />
        <Foods imgurl={l7} info="Tomato Rice" cost="₹55" />
        <Foods imgurl={l3} info="Lemon Rice" cost="₹55" />
        <Foods imgurl={l2} info="Curd Rice" cost="₹50" />
        <Foods imgurl={l5} info="Rasam with White rice" cost="₹50" />
        <Foods imgurl={l6} info="Sambar Rice" cost="₹45" />
        <Foods imgurl={l4} info="MorKulambu with White rice" cost="₹55" />
      </div>
    );
  }
  function sfmenu() {
    setmenu(
      <div className="content">
        <Foods imgurl={s2} info="Bonda" cost="₹12" />
        <Foods imgurl={s1} info="Bajji" cost="₹12" />
        <Foods imgurl={s4} info="Murukku" cost="₹10" />
        <Foods imgurl={s5} info="Samosa" cost="₹18" />
        <Foods imgurl={s3} info="Mixture" cost="₹25" />
        <Foods imgurl={s6} info="Vadai" cost="₹10" />
      </div>
    );
  }
  function bfmenu() {
    setmenu(
      <div className="content">
        <Foods imgurl={b1} info="Dosai" cost="₹35" />
        <Foods imgurl={b2} info="idly" cost="₹20" />
        <Foods imgurl={b3} info="Chappathi" cost="₹30" />
        <Foods imgurl={b4} info="Poori" cost="₹30" />
        <Foods imgurl={b5} info="Adai Dosai" cost="₹40" />
      </div>
    );
  }
  const [hm, sethm] = useState(false);
  const [am, setam] = useState(false);
  const [sm, setsm] = useState(false);

 

  function handleHome() {
    sethm((p) => !p);
  }
  function handleAbout() {
    setam((p) => !p);
  }

  function handleSupport() {
    setsm((p) => !p);
  }

  function handlemenu(){
    var hi1 = document.getElementById("p1");
    var hi2 = document.getElementById("p2");
    var hi3 = document.getElementById("p3");
    var hi4 = document.getElementById("p4");

      if(hi1.style.display === "block"){
        hi1.style.display = "none";
        hi2.style.display = "none";
        hi3.style.display = "none";
        hi4.style.display = "none";
  
      }
   
      else{
        hi1.style.display = "block";
        hi2.style.display = "block";
        hi3.style.display = "block";
        hi4.style.display = "block";
  
      }
      }
      
        useEffect(() => {
          function handleWindowSizeChange() {
            const width = window.innerWidth;
            var hi1 = document.getElementById("p1");
            var hi2 = document.getElementById("p2");
            var hi3 = document.getElementById("p3");
            var hi4 = document.getElementById("p4");
            if (width > 750) {
              const hiElements = [hi1, hi2, hi3, hi4];
              hiElements.forEach((element) => {
                if (element) {
                  element.style.display = "block";
                }
              });
            }
            if (width <= 750) {
              const hiElements = [hi1, hi2, hi3, hi4];
              hiElements.forEach((element) => {
                if (element) {
                  element.style.display = "none";
                }
              });
            }

          }
      
          window.addEventListener("resize", handleWindowSizeChange);
          handleWindowSizeChange(); 
      
          return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
          };
        }, []); 
    
      

 
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="nav-comp">
            <a href="# ">
              <img src={logo} alt="logo" className="logoset" />
            </a>
            <p className=" p1" id="p1"
              onMouseOut={handleHome}
              onMouseEnter={handleHome}
              style={{
                cursor: "pointer",
                fontWeight: 990,
                fontSize: 20,
                fontFamily: "calibra",
              }}
            >
              Home
            </p>
            <p
              className=" p2" id="p2"
              onMouseOut={handleAbout}
              onMouseEnter={handleAbout}
              style={{
                cursor: "pointer",
                fontWeight: 990,
                fontSize: 20,
                fontFamily: "calibra",
              }}
            >
              About
            </p>
            <p
              className=" p3" id="p3"
              onMouseOut={handleSupport}
              onMouseEnter={handleSupport}
              style={{
                cursor: "pointer",
                fontWeight: 990,
                fontSize: 20,
                fontFamily: "calibra",
              }}
            >
              Support
            </p>

            <a href="#kidid" className=" p4" id="p4">
              <img src={flogo} alt="fun-logo" className="fun-logo " />
            </a>
            <img src={micon} alt="menu icon" className="menu-icon" id="bar" onClick={handlemenu} />
          </div>
        </nav>
      </header>

      <main className="content-wrap">
        
        <div>
          {hm ? (
            <div className="home-curse">
              This is a static website.Here the page present a menu card and at
              the below, word to get images be there.It was designed mainly
              target to fun and educate your kid.
            </div>
          ) : (
            hm
          )}
          {am ? (
            <div className="about-curse">
            
              <p>This Website is developed by Akash S, India.</p> It is
              developed using ReactJS.
            </div>
          ) : (
            am
          )}
          {sm ? (
            <div className="support-curse">
              For contact :
              <ul>
                <li>Linkedin :- aakashtechie </li>
                <li>Instagram :- aakash_crypter </li>
                <li>Mobile no :- 9344012602</li>
                <li>https://www.linkedin.com/in/aakashtechie/</li>
              </ul>
            </div>
          ) : (
            sm
          )}
        </div>
        <h1>Menu Card</h1>
        <div className="menu">
          <button className="btn" onClick={allmenu}>
            All
          </button>
          <button className="btn" onClick={bfmenu}>
            Breakfast
          </button>
          <button className="btn" onClick={lfmenu}>
            Lunch
          </button>
          <button className="btn" onClick={sfmenu}>
            Snacks
          </button>
        </div>

        <div>{menu}</div>
      </main>

      <div className="kid-section" id="kidid">
        <div className="kbar">
          <span>
            This segment specially for kids to see the images while enter the
            name.
          </span>
        </div>

        <p className="imgline">Type a word to get relevent images</p>
        <p className="imgline2">Ex: dog, car, fruits,etc... </p>
        <Kidpage />
      </div>
      <footer>
        <p>
          <span>This page was created by Akash.</span>
        </p>
        <span>Kid segment Images get from @ Unsplash.com </span>
      </footer>
    </div>
  );
}

export default App;
