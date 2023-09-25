import * as React from "react"
import { Link } from "gatsby";

import * as decalStyles from "../../../styles/decal.module.css"
import * as defaultStyles from "../../../styles/default.module.css"

import Nav from "../../../components/nav"
import DecalNav from "../../../components/decalNav"
import Button from "../../../components/button";

import EastIcon from '@mui/icons-material/East';

const decalHw = () => {

  return (
    <main>
      <body>
        <Nav activePage="decal"/>

        <div className={decalStyles.bodyWrapper}>
            <DecalNav activePage="homework" open="homework"/>
            <div className={decalStyles.textWrapper}>
                <h1>Homework</h1>
                <p>
                All homework will require a computer with Unity to complete. Your personal laptop should suffice.
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                </div>    

                <div className={decalStyles.toc}>
                    <h2>Table of Contents</h2>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Homework 1: The Rube Goldberg Ball Machine"
                            color="red"
                            icon={EastIcon} 
                            type="underline"
                            link="/homework/hw1"
                            alt="hw1"
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Homework 2: Music Visualizer"
                            color="red"
                            icon={EastIcon} 
                            type="underline"
                            link="/homework/hw2"
                            alt="hw2"
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Homework 3: Fractal Generation"
                            color="red"
                            icon={EastIcon} 
                            type="underline"
                            link="/homework/hw3"
                            alt="hw3"
                    /></span></p>
                    {/* <p><span className={decalStyles.redLink}>
                    <Button text="Homework 4: Pong"
                            color="red"
                            icon={EastIcon} 
                            type="underline"
                            link="/homework/hw4"
                            alt="hw4"
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

export default decalHw

export const Head = () => <title>Extended Reality @ Berkeley</title>
