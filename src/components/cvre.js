import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";

import logo from "../images/logo.png";
import Button from "../components/button";

import * as homeStyles from "../styles/home.module.css"
import * as defaultStyles from "../styles/default.module.css"

const CVRE = ({size}) => {

  return (
    <section className={size == 'big' ? homeStyles.sectionWrapper : homeStyles.sectionSmall}>
        <div className={homeStyles.diagonalDown} />
        <div className={homeStyles.horizontal}/>
        <div className={homeStyles.outline}>
            <div className={homeStyles.sectionContent}>
                <p>
                Do you enjoy VR games such as <span className={defaultStyles.red}>Beat Saber</span>, <span className={defaultStyles.red}>Echo Arena</span>, and <span className={defaultStyles.red}>Pavlov VR</span>? 
                Are you interested in competing in these games for Berkeley?
                </p>
                <p>
                <span className={defaultStyles.red}>Berkeley CVRE competes in the CVRE league</span>, whose goal is to create an environment for student VR and esports enthusiasts 
                to gather and enjoy fun, competitive play, as well as to build a community of teams representing universities across North America. 
                Join the <span className={defaultStyles.yellow}>Berkeley CVRE Discord</span> to learn more!
                </p>
                <div className={homeStyles.buttonWrapper}>
                    <Button
                        text="Join us"
                        color="yellow" 
                        icon=""
                        type="out"
                        link="https://discord.gg/w34PHJCnud"
                        alt="cvre discord"
                    />
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default CVRE
export const Head = () => <title>Extended Reality @ Berkeley</title>