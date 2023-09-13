import * as React from "react"
import { Link } from "gatsby";

import * as decalStyles from "../../../styles/decal.module.css"
import * as defaultStyles from "../../../styles/default.module.css"

import Nav from "../../../components/nav"
import DecalNav from "../../../components/decalNav"
import Button from "../../../components/button";

import EastIcon from '@mui/icons-material/East';

import lec0 from "../../../static/[SP23] Lecture 0_ Introduction to Extended Reality.pdf"
import lec1 from "../../../static/[FA22] Lecture 1_ Fundamentals of Extended Reality.pdf"
import lec2 from "../../../static/[FA22] Lecture 2_ Motion Sickness and Locomotion.pdf"
import lec3 from "../../../static/[SP22] Lecture 3_ Hardware and Input Schemes.pdf"
import lec4 from "../../../static/[FA22] Lecture 4_ Principles of AR_VR Design.pdf"
import lec5 from "../../../static/[FA22] Lecture 5_ Social Implications of AR_VR.pdf"
import lecSP from "../../../static/[SP18] VR Status Quo.pdf"

const lectures = () => {

  return (
    <main>
      <body>
        <Nav activePage="decal"/>

        <div className={decalStyles.bodyWrapper}>
            <DecalNav activePage="lectures" open=""/>
            <div className={decalStyles.textWrapper}>
                <h1>Lectures</h1>
                <p><span className={decalStyles.redLink}>
                    <Button text="Lecture 0: Introduction to Virtual Reality"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link={lec0}
                            alt="lecture 0"
                    /></span></p>
                <p><span className={decalStyles.redLink}>
                    <Button text="Lecture 1: Fundamentals of Virtual Reality"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link={lec1}
                            alt="lecture 1"
                    /></span></p>
                <p><span className={decalStyles.redLink}>
                    <Button text="Lecture 2: Locomotion and Motion Sickness"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link={lec2}
                            alt="lecture 2"
                    /></span></p>
                <p><span className={decalStyles.redLink}>
                    <Button text="Lecture 3: Hardware and Input Schemes"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link={lec3}
                            alt="lecture 3"
                    /></span></p>
                <p><span className={decalStyles.redLink}>
                    <Button text="Lecture 4: Principles of VR Design"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link={lec4}
                            alt="lecture 4"
                    /></span></p>
                <p><span className={decalStyles.redLink}>
                    <Button text="Lecture 5: Social Implications of VR"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link={lec5}
                            alt="lecture 5"
                    /></span></p>
                <p><span className={decalStyles.redLink}>
                    <Button text="Special Topics: VR Status Quo"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link={lecSP}
                            alt="special topics"
                    /></span></p>
                
            </div>
        </div>

      </body>
    </main>
  )
}

export default lectures

export const Head = () => <title>Extended Reality @ Berkeley</title>
