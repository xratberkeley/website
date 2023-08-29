import React, { useState, useEffect } from "react"
import { Link } from "gatsby";

import * as homeStyles from "../styles/home.module.css"
import * as defaultStyles from "../styles/default.module.css"

import Nav from "../components/nav";
import Button from "../components/button";
import ProjectTeams from "../components/projectTeams";
import Sponsor from "../components/sponsor";
import DeCal from "../components/decal";
import CVRE from "../components/cvre";

import EastIcon from '@mui/icons-material/East';
import vrgoggles from '../images/vrgoggles.mp4';
import mailIcon from '../images/mail.png';
import discordIcon from '../images/discord.png';

const HomePage = () => {

  const [shown, setShown] = useState("");
  const [windowHeight, setHeight] = useState(150);
  useEffect(() => {
    setHeight(document.body.scrollHeight + windowHeight);
  }, []);

  return (
    <main>
      <body>
        <Nav activePage="home"/>

        <div className={defaultStyles.bodyWrapper}>

          <div className={homeStyles.topHalf}>

            {/* text */}
            <div className={homeStyles.textWrapper}>

              {/* introduction */}
              <div className={homeStyles.box}></div>
              <p>
                Welcome to <span className={defaultStyles.yellow}>Extended Reality @ Berkeley</span>.
              </p>
              <p>
                We seek to foster an inclusive and diverse community of Berkeley students, 
                industry, and academia to increase public awareness of <span className={defaultStyles.blue}>virtual reality</span> (VR) 
                and <span className={defaultStyles.blue}>augmented reality</span> (AR). 
              </p>
              <p>
                We provide developer resources and training, and promote dialogue about the impact and implications of immersive computing. 
                Our members receive training in cutting edge technology, develop on the newest VR platforms, 
                and explore the <span className={defaultStyles.blue}>intersection of physical and virtual space</span>.
              </p>

              {/* application */}
              <div className={homeStyles.applyOutline}>
                <div className={homeStyles.apply}>
                  <h1>Fall'23 applications are currently <span className={defaultStyles.red}>open</span>.</h1>
                  <p>
                    We will be holding <span className={defaultStyles.yellow}>2 infosessions</span> where you can learn more about our club and chat with our members:
                    <ul>
                      <li><p><span className={defaultStyles.yellow}>Infosession 1:</span> 8/30 (Wed) 8:00-9:30pm @ SOCS 185</p></li>
                      <li><p><span className={defaultStyles.yellow}>Infosession 2:</span> 8/31 (Thu) 8:00-9:30pm @ SOCS 185</p></li>
                    </ul>
                  </p>
                  <p>
                    More information can also be found on our application forms:
                  </p>
                  <div className={homeStyles.applyButtons}>
                    <Button text="Club member application"
                            color="red"
                            icon="" 
                            type="out"
                            link="https://docs.google.com/forms/d/e/1FAIpQLSd2NrJxdfr-37AW8MdKcOs3o3Wy08UG8k1gCYp7MFsEh6udJg/viewform"
                            alt="member application"
                    />
                    <Button text="DeCal application"
                            color="red"
                            icon="" 
                            type="out"
                            link="https://docs.google.com/forms/d/e/1FAIpQLScARHg_xaUnHuJ3fIw8SfKxU2hBVyxOMOdJr7VEL5HNU8hs1A/viewform"
                            alt="decal application"
                    />
                  </div>
                  <p>
                    Club applications close on 9/3 (Sun) 11:59PM PDT; DeCal applications close pm 9/8 (Fri) 11:59PM PDT.
                  </p>
                </div>
              </div>
            
              <div className={homeStyles.boxLine}>
                <div className={homeStyles.box}></div>
                <div className={homeStyles.box}></div>
              </div>
              
              {/* sections */}
              <div className={homeStyles.section}>
                <p className={defaultStyles.grey}>Dream the change.</p>
                <p>Check out our <span onMouseEnter={() => setShown("project teams")}>
                  <Button text="project teams"
                          color="red"
                          icon={shown} 
                          type="show"
                          link=""
                          alt=""
                  /></span></p>
              </div>

              <div className={homeStyles.section}>
                <p className={defaultStyles.grey}>Help the change.</p>
                <p>Become a <span onMouseEnter={() => setShown("sponsor")}>
                  <Button text="sponsor"
                          color="red"
                          icon={shown} 
                          type="show"
                          link=""
                          alt=""
                  /></span></p>
              </div>

              <div className={homeStyles.section}>
                <p className={defaultStyles.grey}>Open your mind.</p>
                <p>Check out our <span onMouseEnter={() => setShown("decal")}>
                  <Button text="DeCal"
                          color="red"
                          icon={shown} 
                          type="show"
                          link=""
                          alt=""
                  /></span></p>
              </div>

              <div className={homeStyles.section}>
                <p className={defaultStyles.grey}>Become the best.</p>
                <p>Join us in <span onMouseEnter={() => setShown("cvre")}>
                  <Button text="Collegiate VR Esports"
                          color="red"
                          icon={shown} 
                          type="show"
                          link=""
                          alt=""
                  /></span></p>
              </div>

              <div className={homeStyles.boxLine}>
                <div className={homeStyles.box}></div>
                <div className={homeStyles.box}></div>
                <div className={homeStyles.box}></div>
              </div>

              {/* discord */}
              <p>Or, join our <a href="https://discord.com/invite/GvGUUCN" target="_blank" alt="discord link" class={defaultStyles.yellowUnderline}>Discord</a> to learn more.</p>
            </div>

            {/* image */}
            <div className={homeStyles.rightCol}>
              <div className={homeStyles.cornerBorders}>
                <div className={homeStyles.crossHorizontal} />
                <div className={homeStyles.crossVertical} />
                <video autoPlay loop muted>
                  <source src={vrgoggles} type='video/mp4' />
                </video>
              </div>

              <div className={homeStyles.buttonWrapper}>
                <Button
                  text="Hear from us"
                  color="purple" 
                  icon={mailIcon} 
                  link="https://docs.google.com/forms/d/e/1FAIpQLSeCBIxOfEhPJx3JxXPbFr9ZfGf7zQZ2O-XgSWDZabY7xjmujw/viewform"
                  alt="mailing list google form"
                  type="out"
                />
              </div>
              <div className={homeStyles.buttonWrapper}>
                <Button 
                  text="Talk to us"
                  color="yellow" 
                  icon={discordIcon} 
                  link="https://discord.com/invite/GvGUUCN"
                  alt="discord link"
                  type="nav"
                />
              </div>
              
              
            </div>

            {shown == "project teams" ? <ProjectTeams /> : ""}
            {shown == "sponsor" ? <Sponsor /> : ""}
            {shown == "decal" ? <DeCal /> : ""}
            {shown == "cvre" ? <CVRE /> : ""}

          </div>


        </div>

        {/* page decoration */}
        <div className={homeStyles.vertical} style={{right: "1.5rem", height: windowHeight}} />
        <div className={homeStyles.vertical} style={{right: "2.3rem", height: windowHeight}} />
        <div className={homeStyles.framing} style={{top: "1.2rem", left: "1.3rem"}} />
      </body>
    </main>
  )
}

export default HomePage

export const Head = () => <title>Extended Reality @ Berkeley</title>
