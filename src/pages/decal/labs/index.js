import * as React from "react"
import { Link } from "gatsby";

import * as decalStyles from "../../../styles/decal.module.css"
import * as defaultStyles from "../../../styles/default.module.css"

import Nav from "../../../components/nav"
import DecalNav from "../../../components/decalNav"
import Button from "../../../components/button";

import EastIcon from '@mui/icons-material/East';

const decalLabs = () => {

  return (
    <main>
      <body>
        <Nav activePage="decal"/>

        <div className={decalStyles.bodyWrapper}>
            <DecalNav activePage="labs" open="labs"/>
            <div className={decalStyles.textWrapper}>
                <h1>Labs</h1>
                <p>
                We will be doing the Oculus VR labs this semester. All labs will be done in class as they require a headset and a high-performance Windows computer. We will be using pc-tethered Oculus Rift S’s in class.
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                </div>    

                <div className={decalStyles.toc}>
                    <h2>Table of Contents</h2>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Oculus"
                            color="red"
                            icon={EastIcon} 
                            type="underline"
                            link="/decal/labs/oculus"
                            alt="oculus labs"
                    /></span></p>
                    {/* <p><span className={decalStyles.redLink}>
                    <Button text="Homework 3: Fractal Generation"
                            color="red"
                            icon={EastIcon} 
                            type="underline"
                            link="/homework/hw3"
                            alt="hw3"
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Homework 5: Collisions, Raycasting, and Triggers"
                            color="red"
                            icon={EastIcon} 
                            type="underline"
                            link="/homework/hw5"
                            alt="hw5"
                    /></span></p> */}
                </div>
                
            </div>
        </div>

      </body>
    </main>
  )
}

export default decalLabs

export const Head = () => <title>Extended Reality @ Berkeley</title>
