import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";

import logo from "../images/logo.png";
import Button from "../components/button";

import * as homeStyles from "../styles/home.module.css"
import * as defaultStyles from "../styles/default.module.css"

const ProjectTeams = ({size}) => {

  return (
    <section className={size == 'big' ? homeStyles.sectionWrapper : homeStyles.sectionSmall}>
        <div className={homeStyles.diagonal} />
        <div className={homeStyles.horizontal}/>
        <div className={homeStyles.outline}>
            <div className={homeStyles.sectionContent}>
                <p>
                <span className={defaultStyles.red}>Make reality with us.</span>&nbsp;We are defining new paradigms in HCI with VR enhanced human-UAV collaboration, 
                revolutionizing healthcare with novel neurological therapies, using biofeedback to create powerful experiences of harmony and insight, and more.
                </p>
                <p>
                We invite all Cal students to check out our project teams or become a <span className={defaultStyles.red}>General Member</span>. 
                If you have an idea you want to pursue, feel free to contact us through <span className={defaultStyles.yellow}>Discord</span> or at <span className={defaultStyles.yellow}>contact@xr.berkeley.edu</span>!
                </p>
                <div className={homeStyles.buttonWrapper}>
                    <Button
                        text="Learn more"
                        color="yellow" 
                        icon=""
                        type="nav"
                        link="/projects/"
                        alt="view project teams"
                    />
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default ProjectTeams

export const Head = () => <title>Extended Reality @ Berkeley</title>