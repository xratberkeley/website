import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";

import logo from "../images/logo.png";
import Button from "../components/button";

import * as homeStyles from "../styles/home.module.css"
import * as defaultStyles from "../styles/default.module.css"

const Sponsor = () => {

  return (
    <section className={homeStyles.sectionWrapper}>
        <div className={homeStyles.diagonal} />
        <div className={homeStyles.horizontal}/>
        <div className={homeStyles.outline}>
            <div className={homeStyles.sectionContent}>
                <p>
                With >50 active members and >600 alumni, we are the <span className={defaultStyles.red}>world's largest XR student org</span>. 
                We subscribe to the Berkeley approach of living together and building tech - our alumni are changing the world with our past sponsors. 
                </p>
                <p>
                We offer <span className={defaultStyles.red}>3</span> types of sponsorships: 
                <ul>
                    <li><p>Infosession (talk to us)</p></li>
                    <li><p>Workshop (show us how your product works)</p></li>
                    <li><p>Project (work together on a new idea)</p></li>
                </ul>
                </p>
                <p>
                We also offer free opportunities for non-profits and charities.
                </p>
                <div className={homeStyles.buttonWrapper}>
                    <Button
                        text="Learn more"
                        color="yellow" 
                        icon=""
                        type="out"
                        link="XR@B-Sponsorship-Possibilities.pdf"
                        alt="sponsorship pdf"
                    />
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Sponsor
export const Head = () => <title>Extended Reality @ Berkeley</title>