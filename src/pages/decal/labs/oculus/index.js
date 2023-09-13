import * as React from "react"
import { Link } from "gatsby";

import * as decalStyles from "../../../../styles/decal.module.css"
import * as defaultStyles from "../../../../styles/default.module.css"

import Nav from "../../../../components/nav"
import DecalNav from "../../../../components/decalNav"
import Button from "../../../../components/button";

import EastIcon from '@mui/icons-material/East';

const oculusLabs = () => {

  return (
    <main>
      <body>
        <Nav activePage="decal"/>

        <div className={decalStyles.bodyWrapper}>
            <DecalNav activePage="oculuslabs" open="oculuslabs"/>
            <div className={decalStyles.textWrapper}>
                <h1>Oculus Labs</h1>
                <p>
                These labs use UnityXR and an Oculus (Meta) headset. These labs are supposed to be done in small groups, and be started and finished in class. If you are not able to finish - as long as you have showed effort that you tried to finish the lab, you will get checked off.
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                </div>    

                <div className={decalStyles.toc}>
                    <h2>Table of Contents</h2>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Oculus Lab 1: Building the Environment"
                            color="red"
                            icon={EastIcon} 
                            type="underline"
                            link="/decal/labs/oculus/lab1"
                            alt="oculus labs"
                    /></span></p>
                    {/* <p><span className={decalStyles.redLink}>
                    <Button text="Oculus Lab 2: Building the Gun"
                            color="red"
                            icon={EastIcon} 
                            type="underline"
                            link="/labs/oculus/lab1"
                            alt="oculus labs"
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Oculus Lab 3: The Monster"
                            color="red"
                            icon={EastIcon} 
                            type="underline"
                            link="/labs/oculus/lab1"
                            alt="oculus labs"
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Oculus Lab 4: Putting It All Together"
                            color="red"
                            icon={EastIcon} 
                            type="underline"
                            link="/labs/oculus/lab1"
                            alt="oculus labs"
                    /></span></p> */}
                </div>
                
            </div>
        </div>

      </body>
    </main>
  )
}

export default oculusLabs

export const Head = () => <title>Extended Reality @ Berkeley</title>
