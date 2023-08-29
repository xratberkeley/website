import React, { useState, useEffect } from "react"
import { Link } from "gatsby";

import * as projectStyles from "../styles/project.module.css"
import * as homeStyles from "../styles/home.module.css"
import * as defaultStyles from "../styles/default.module.css"

import blossom from "../images/blossom.png";
import isaacs from "../images/isaacs.jpg";
import tutorivr from "../images/tutorivr.png";
import vbw from "../images/vbw.jpg";
import specialagent from "../images/specialagent.png";
import hif from "../images/hif.png";
import openark from "../images/openark.jpg";
import roar from "../images/roar.jpg";
import echoarena from "../images/echoarena.jpeg";
import rehabvr from "../images/rehabvr.png";

import Nav from "../components/nav"
import Button from "../components/button";
import mailIcon from '../images/mail.png';

const ProjectsPage = () => {

  const [windowHeight, setHeight] = useState(250);
  useEffect(() => {
    setHeight(document.body.scrollHeight + windowHeight);
  }, []);

  return (
    <main>
      <body>
        <Nav activePage="projects"/>

        <div className={defaultStyles.bodyWrapper}>
          <h1 className={projectStyles.heading}>Project Teams</h1>

          <div className={projectStyles.team}>
            <div className={projectStyles.nontext}>
              <div className={projectStyles.pImg}>
                <img src={blossom} alt="blossom vr" />
              </div>
              <Button
                    text="Learn more"
                    color="yellow" 
                    icon=""
                    type="out"
                    link="https://blossomvr.com/"
                    alt="blossom vr website"
                />
                <Button
                    text="Contact us"
                    color="purple" 
                    icon={mailIcon}
                    type="out"
                    link="mailto:blossom@xr.berkeley.edu"
                    alt="blossom email"
                />
            </div>
            <div className={projectStyles.text}>
              <h1 className={projectStyles.pTitle}>Blossom VR</h1>
              <p className={projectStyles.leads}>Team Lead: Mehar Samra</p>
              <p>
                Blossom VR is a game that aims to <span className={defaultStyles.red}>creatively enhance meditation and relaxation experiences</span> in VR. 
                Inspired by the effectiveness of biofeedback treatments, we developed a minimal viable product that utilizes movements in VR and Apple Watch biosensor data to 
                provide feedback on how well the user is performing a relaxation technique, and their improvement over time. 
                So far, we have built <span className={defaultStyles.red}>mindfulness minigames</span> like harmonic breathing, movement meditation, taichi, and heart-rate biofeedback mechanisms, 
                so there will be a relaxing experience for everyone. Through these minigames, players can also level up characters and gain collectables. 
                Overall, Blossom VR is a <span className={defaultStyles.red}>relaxing world</span> that for players to fade out the stress of life and reconnect with their inner selves.
              </p>
              <p>
                <i>Looking for 3d modelers.</i>
              </p>
            </div>
          </div>

          <div className={projectStyles.triangle} />

          <div className={projectStyles.team}>
            <div className={projectStyles.nontext}>
              <div className={projectStyles.yImg}>
                <img src={isaacs} alt="isaacs" />
              </div>
              <Button
                    text="Learn more"
                    color="yellow" 
                    icon=""
                    type="out"
                    link="https://github.com/immersive-command-system"
                    alt="isaacs"
                />
                <Button
                    text="Contact us"
                    color="purple" 
                    icon={mailIcon}
                    type="out"
                    link="mailto:isaacs@xr.berkeley.edu"
                    alt="isaacs email"
                />
            </div>
            <div className={projectStyles.text}>
              <h1 className={projectStyles.yTitle}>ISAACS (Research) - Immersive Semi-Autonomous Aerial Command System</h1>
              <p className={projectStyles.leads}>Team Leads: Archit Das, Harris Thai</p>
              <p>
                ISAACS is an undergraduate-led research group within the Center for Augmented Cognition of the FHL Vive Center for Enhanced Reality. 
                Our research is in <span className={defaultStyles.red}>human-UAV interaction</span>, with a focus on <span className={defaultStyles.red}>teleoperation, telesensing, and multi-agent interaction</span>.
              </p>
              <p>
                We are also collaborating with the Lawrence Berkeley National Laboratory to perform <span className={defaultStyles.red}>3D reconstruction</span> of the environment via state-of-the-art methods in radiation detection. 
                Our vision is to create a scalable open source platform for Beyond Line of Sight Flight compatible with any UAV or sensor suite.
              </p>
            </div>
          </div>

          <div className={projectStyles.triangle} />

          <div className={projectStyles.team}>
            <div className={projectStyles.nontext}>
              <div className={projectStyles.pImg}>
                <img src={tutorivr} alt="tutorivr" />
              </div>
              <Button
                    text="Learn more"
                    color="yellow" 
                    icon=""
                    type="out"
                    link="https://dl.acm.org/doi/10.1145/3290605.3300514"
                    alt="tutorivr website"
                />
                <Button
                    text="Contact us"
                    color="purple" 
                    icon={mailIcon}
                    type="out"
                    link="mailto:tutorivr@xr.berkeley.edu"
                    alt="tutorivr email"
                />
            </div>
            <div className={projectStyles.text}>
              <h1 className={projectStyles.pTitle}>TutoriVR</h1>
              <p className={projectStyles.leads}>Team Lead: Daniel He</p>
              <p>
                Virtual Reality painting is a form of <span className={defaultStyles.red}>3D-painting done in a Virtual Reality (VR) space</span>. 
                Being a relatively new kind of art form, there is a growing interest within the creative practices community to learn it. 
                Currently, most users learn using community posted 2D-videos on the internet, which are a screencast recording of the painting process by an instructor. 
                While such an approach may suffice for teaching 2D-software tools, these videos by themselves fail in delivering crucial details that required by the user 
                to understand actions in a VR space. We are building a robust and deployable <span className={defaultStyles.red}>VR-embedded tutorial system</span> that supplements 
                video tutorials with <span className={defaultStyles.red}>3D and contextual aids</span> directly in the user's VR environment, based on the TutoriVR research study.
              </p>
              <p>
                <i>Looking for designers.</i>
              </p>
            </div>
          </div>

          <div className={projectStyles.triangle} />

          <div className={projectStyles.team}>
            <div className={projectStyles.nontext}>
              <div className={projectStyles.yImg}>
                <img src={vbw} alt="vbw" />
              </div>
              <Button
                    text="Learn more"
                    color="yellow" 
                    icon=""
                    type="out"
                    link="https://www.instagram.com/p/CidwftIJvZR/"
                    alt="vbw"
                />
                <Button
                    text="Contact us"
                    color="purple" 
                    icon={mailIcon}
                    type="out"
                    link="mailto:tcdanielh@berkeley.edu"
                    alt="vbw email"
                />
            </div>
            <div className={projectStyles.text}>
              <h1 className={projectStyles.yTitle}>Virtual Bauer Wurster</h1>
              <p>
                Virtual Bauer Wurster (VBW) is an app that allows students to <span className={defaultStyles.red}>edit and publish their architectural models</span>. 
                VBW enables users to share and explore 3D environments together.
              </p>
              <p>
                This project is from the XR Lab - a research lab within the College of Environmental Design, with a goal to develop innovative, impactful research and applications in VR/AR/MR.
              </p>
              <p>
                <i>Expected experience in Unity XR.</i>
              </p>
            </div>
          </div>

          <div className={projectStyles.triangle} />

          <div className={projectStyles.team}>
            <div className={projectStyles.nontext}>
              <div className={projectStyles.pImg}>
                <img src={specialagent} alt="specialagent" />
              </div>
              <Button
                    text="Learn more"
                    color="yellow" 
                    icon=""
                    type="out"
                    link="https://docs.google.com/document/d/1JgRPh_XGy0LnvXHXRrtrOh2ueeBHwbkTZK_3_Jtr1Ro/edit?usp=sharing"
                    alt="specialagent website"
                />
                <Button
                    text="Contact us"
                    color="purple" 
                    icon={mailIcon}
                    type="out"
                    link="mailto:yaoxing2058@berkeley.edu"
                    alt="specialagent email"
                />
            </div>
            <div className={projectStyles.text}>
              <h1 className={projectStyles.pTitle}>Special Agent</h1>
              <p className={projectStyles.leads}>Team Lead: Yaoxing Yi</p>
              <p>
                Originally a final project of the Extended Reality DeCal, now we want to: (1) Make it a real video game; (2) Port it to multiple platforms (PC/Mac/Consoles).
              </p>
              <p>
                Special Agent is a <span className={defaultStyles.red}>First-Person-Shooter survival horror action adventure game</span>. 
                In this video game, you will become Special Agent [name redacted] to complete a series of spectacular, adventurous missions in order to expose the mastermind's behind-the-scene, 
                ultimate conspiracy! You will become a hero to save this hopeless world! You know what you're up against? Zombies, assassins, traps, spies and the armed-to-the-teeth military 
                that hunt you down! It's time to do something to change this world! Join us! <span className={defaultStyles.red}>Join this epic conquest!</span>
              </p>
              <p>
                Our video game was developed in Unity, which means you need to have access to a laptop or desktop computer that can run Unity. 
                We also expect your computers are able to run modeling software like Maya and Blender because we make 3D animations!
              </p>
            </div>
          </div>

          <div className={projectStyles.triangle} />

          <div className={projectStyles.team}>
            <div className={projectStyles.nontext}>
              <div className={projectStyles.yImg}>
                <img src={hif} alt="handif" />
              </div>
              <Button
                    text="Learn more"
                    color="yellow" 
                    icon=""
                    type="out"
                    link="https://github.com/Alex-ARios/HandInteractionFramework"
                    alt="vbw"
                />
                <Button
                    text="Contact us"
                    color="purple" 
                    icon={mailIcon}
                    type="out"
                    link="mailto:hand-if@xr.berkeley.edu"
                    alt="vbw email"
                />
            </div>
            <div className={projectStyles.text}>
              <h1 className={projectStyles.yTitle}>HandIF - Hand Interaction Framework</h1>
              <p className={projectStyles.leads}>Team Lead: Alexander Angulo Rios</p>
              <p>
                The HandIF team looks to create both the hardware and software solution for a <span className={defaultStyles.red}>fully immersive hand-interaction experience</span> in VR, 
                allowing the grabbing, manipulation, and use of elements in a virtual environment, paired with haptic gloves to simulate touch. 
                Currently, we are working on the software behind the framework to create an <span className={defaultStyles.red}>accurate and realistic hand tracking experience</span> that can 
                be used in training scenarios, simulations, and other environments where precise and robust hand-tracking is necessary. 
                We will work to create and integrate the hardware as well, creating a complete hand-interaction system with maximum immersion.
              </p>
            </div>
          </div>
        
          <div className={projectStyles.triangle} />

          <div className={projectStyles.team}>
            <div className={projectStyles.nontext}>
              <div className={projectStyles.pImg}>
                <img src={openark} alt="openark" />
              </div>
              <Button
                    text="Learn more"
                    color="yellow" 
                    icon=""
                    type="out"
                    link="https://vivecenter.berkeley.edu/research1/openark/"
                    alt="openark website"
                />
            </div>
            <div className={projectStyles.text}>
              <h1 className={projectStyles.pTitle}>OpenArk (Research)</h1>
              <p>
                OpenARK is an <span className={defaultStyles.red}>open-source wearable augmented reality (AR) system</span> founded at UC Berkeley in 2016. 
                The C++ based software offers innovative core functionalities to power a wide range of off-the-shelf AR components, including see-through glasses, depth cameras, and IMUs.
              </p>
              <p>
                OpenARK is a open-sourced Augmented Reality SDK that will allow you to <span className={defaultStyles.red}>rapidly prototype AR applications</span>.
              </p>
              <p>
                <i>Expected computer vision experience.</i>
              </p>
            </div>
          </div>

          <div className={projectStyles.triangle} />

          <div className={projectStyles.team}>
            <div className={projectStyles.nontext}>
              <div className={projectStyles.yImg}>
                <img src={roar} alt="roar" />
              </div>
              <Button
                    text="Learn more"
                    color="yellow" 
                    icon=""
                    type="out"
                    link="https://vivecenter.berkeley.edu/research1/roar/"
                    alt="roar"
                />
            </div>
            <div className={projectStyles.text}>
              <h1 className={projectStyles.yTitle}>ROAR (Research)</h1>
              <p>
                ROAR stands for Robot Open Autonomous Racing, and it is the FHL Vive Center for Enhanced Reality's autonomous driving research group.
              </p>
              <p>
                Our goal is to advance XR and AI technologies used in vehicles, through a fun <span className={defaultStyles.red}>intercollegiate driving competition</span> at the heart of the iconic Berkeley campus.
              </p>
              <p>
                <i>Expected hardware experience.</i>
              </p>
            </div>
          </div>

          <div className={projectStyles.triangle} />

          <div className={projectStyles.team}>
            <div className={projectStyles.nontext}>
              <div className={projectStyles.pImg}>
                <img src={echoarena} alt="tacticalmr" />
              </div>
                <Button
                    text="Contact us"
                    color="purple" 
                    icon={mailIcon}
                    type="out"
                    link="mailto:ek65@eecs.berkeley.edu"
                    alt="tacticalmr email"
                />
            </div>
            <div className={projectStyles.text}>
              <h1 className={projectStyles.pTitle}>TacticalMR (Research)</h1>
              <p className={projectStyles.leads}>Team Leads: Edward Kim, Daniel He</p>
              <p>
                The vision of this research is to <span className={defaultStyles.red}>train humans by augmenting their experience</span> in virtual reality to enhance their skills, 
                which are related to dynamic tactical coordinations or interactions with other dynamic entities. 
                To augment one's experience in VR, the content of situations, or scenarios, one experience in VR is crucial. 
                Hence, to achieve our vision, we aim to <span className={defaultStyles.red}>develop an algorithm</span> which procedurally generates a customized curriculum, 
                or a sequence, of training scenarios (which are displayed in VR) according to a trainee's learning progression.
              </p>
              <p>
                This algorithm entails following elements: (a) modeling and generating realistic behaviors of environment agents in VR, 
                (b) modeling and tracing the trainee's knowledge and learning progression, and 
                (c) adaptive synthesis of training scenarios in accordance with the trainee's learning progression.
              </p>
              <p>
                The training technique we develop using VR could potentially <span className={defaultStyles.red}>help people in various application domains</span>. For example, as factories are automated, 
                we can potentially train factory workers to safely coordinate with various robots in VR, prior to physically interacting with them. 
                We anticipate also training a group of officers for rescue missions amid natural disasters in VR, prior to deployment where mistakes or inexperience may lead to casualties. 
                We also foresee our technology to help enhance sports players to coordinate and teamwork better.
              </p>
              <p>
                For the scope of our project, we are focusing on training people to enhance their skills in an esport called <span className={defaultStyles.red}>EchoArena Oculus virtual reality game</span>. 
                Our goal is to train people to enhance their (1) situational awareness, (2) tactical decision making skills, and (3) execution of the decision to master EchoArena.
              </p>
              <p>
                <i>Expected experience in Unity XR and/or 3d modeling.</i>
              </p>
            </div>
          </div>

          <div className={projectStyles.triangle} />

          <div className={projectStyles.team}>
            <div className={projectStyles.nontext}>
              <div className={projectStyles.yImg}>
                <img src={rehabvr} alt="rehabvr" />
              </div>
              <Button
                  text="Contact us"
                  color="purple" 
                  icon={mailIcon}
                  type="out"
                  link="mailto:ek65@eecs.berkeley.edu"
                  alt="vbw email"
              />
            </div>
            <div className={projectStyles.text}>
              <h1 className={projectStyles.yTitle}>RehabVR (Research)</h1>
              <p className={projectStyles.leads}>Team Leads: Edward Kim, Alton Sturgis, James Hu</p>
              <p>
                We currently lack methods to reliably generate training experiences for cases such as the physical rehabilitation of stroke patients. 
                Over the years, advances in virtual and augmented reality (VR/AR) have considerably reduced the cost of augmenting experience.
              </p>
              <p>
                Using a similar algorithm and methodology to the previously mentioned project in "Training Humans in VR for Sports," we are able to help with the 
                <span className={defaultStyles.red}>rehabilitation progress of stroke patients using VR/AR</span>, where we synthesize scenarios with tasks that are 
                <span className={defaultStyles.red}>incrementally difficult</span> for patients, personalized to each of their physical limiations.
              </p>
              <p>
                This research is in collaboration with Stanford Medical School (Neurology Dept.)
              </p>
              <p>
                <i>Expected experience in Unity XR and/or 3d modeling.</i>
              </p>
            </div>
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

export default ProjectsPage

export const Head = () => <title>Extended Reality @ Berkeley</title>
