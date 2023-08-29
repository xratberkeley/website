import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";

import logo from "../images/logo.png";
import Button from "../components/button";

import * as homeStyles from "../styles/home.module.css"
import * as defaultStyles from "../styles/default.module.css"

const DeCal = () => {

  return (
    <section className={homeStyles.sectionWrapper}>
        <div className={homeStyles.diagonalDown} />
        <div className={homeStyles.horizontal}/>
        <div className={homeStyles.outline}>
            <div className={homeStyles.sectionContent}>
                <p>
                XR is among the hottest growing industries, and has already impacted filmmaking and healthcare in unimaginable ways. 
                Soon, it will overtake mainstream electronics and human-robot collaboration. 
                This excitement is pushing innovation in every technological field. 
                XR is an <span className={defaultStyles.red}>interdisciplinary study</span> where you can apply knowledge from your own niche. 
                </p>
                <p>
                <span className={defaultStyles.red}>If you have taken CS61A, and want reality to become your creative material</span> - join us and we will teach you the rest.
                </p>
                <div className={homeStyles.buttonWrapper}>
                    <Button
                        text="Learn more"
                        color="yellow" 
                        icon=""
                        type="nav"
                        link="/decal/"
                        alt="view decal info"
                    />
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default DeCal

export const Head = () => <title>Extended Reality @ Berkeley</title>