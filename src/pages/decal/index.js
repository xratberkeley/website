import * as React from "react"
import { Link } from "gatsby";

import * as decalStyles from "../../styles/decal.module.css"
import * as defaultStyles from "../../styles/default.module.css"

import Nav from "../../components/nav"
import DecalNav from "../../components/decalNav"
import Button from "../../components/button";

import EastIcon from '@mui/icons-material/East';

const decalPage = () => {

  return (
    <main>
      <body>
        <Nav activePage="decal"/>

        <div className={decalStyles.bodyWrapper}>
            <DecalNav activePage="home" open=""/>
            <div className={decalStyles.textWrapper}>
                <h1>Extended Reality Development Decal</h1>
                <p>
                Similar to how mobile devices revolutionized the way we interact with our electronic devices, Virtual Reality and Augmented Reality represent another exciting paradigm shift in 
                human computer interaction. XR stands for <span className={defaultStyles.blue}>Extended Reality</span>, which is the realm that encompasses both <span className={defaultStyles.blue}>Virtual</span> and <span className={defaultStyles.blue}>Augmented Reality</span>.
                </p>
                <p>
                This semester, the course will teach students to <span className={defaultStyles.yellow}>develop VR applications in headmounted displays using Unity</span>. 
                Students will get exposure to different kinds of VR/AR apps and work in teams to build their own from scratch. 
                The course is designed for <span className={defaultStyles.yellow}>beginners with no prior VR/AR experience required</span>! 
                After completion of the course, we welcome interested students to join an <span className={defaultStyles.blue}>existing project team</span> with XR @ Berkeley or <span className={defaultStyles.blue}>pitch their own project</span>.
                </p>
                <p>
                This <span className={defaultStyles.red}>3-unit course</span> will be held on <span className={defaultStyles.red}>Mondays or Tuesdays 6:00 - 8:00 PM PST in-person at Jacobs 10C (basement)</span>. 
                You will be assigned one section, and you do not need to attend the other day's section.
                </p>
                <p>
                The course consists of <span className={defaultStyles.yellow}>lectures, labs, homework, and a final project</span>. Each class will include a lecture on VR/AR theories and practices, followed by a "follow-along" style lab. 
                Homework will be weekly for the first half of the course and will consist of practical Unity assignments. 
                Halfway through the semester, classes will transition to giving students time to <span className={defaultStyles.yellow}>work in teams on their final projects</span> until the end of the semester.
                </p>
                <p>
                Click here for the <span className={decalStyles.redLink}>
                  <Button text="full course syllabus"
                        color="red"
                        icon={EastIcon} 
                        type="underlineOut"
                        link="https://docs.google.com/document/d/1huxZqgTeCkw_s2-Sz9epXBjSAvz5Ej7BW3CXJYCf4O4/edit?usp=sharing"
                        alt="link to decal syllabus"
                  /></span>
                </p>
                <p>
                If you're interested in making projects with a team, please apply to the <span className={decalStyles.redLink}>
                  <Button text="XR@B club"
                        color="red"
                        icon={EastIcon} 
                        type="underline"
                        link="/"
                        alt="link to club website"
                  /></span>
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                </div>    

                <h2>Announcements</h2>
                <p>
                Applications for Fall 2023 are open! <span className={decalStyles.redLink}>
                  <Button text="Apply here"
                        color="red"
                        icon={EastIcon} 
                        type="underlineOut"
                        link="https://docs.google.com/forms/d/e/1FAIpQLScARHg_xaUnHuJ3fIw8SfKxU2hBVyxOMOdJr7VEL5HNU8hs1A/viewform"
                        alt="link to decal application"
                  /></span>
                </p>
            </div>
        </div>

      </body>
    </main>
  )
}

export default decalPage

export const Head = () => <title>Extended Reality @ Berkeley</title>
