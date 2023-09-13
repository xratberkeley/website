import * as React from "react"
import { Link } from "gatsby";

import * as decalStyles from "../../styles/decal.module.css"
import * as defaultStyles from "../../styles/default.module.css"

import Nav from "../../components/nav"
import DecalNav from "../../components/decalNav"
import Button from "../../components/button";

import EastIcon from '@mui/icons-material/East';

const resources = () => {

  return (
    <main>
      <body>
        <Nav activePage="decal"/>

        <div className={decalStyles.bodyWrapper}>
            <DecalNav activePage="resources" open=""/>
            <div className={decalStyles.textWrapper}>
                <h2>Photon Multiplayer Networking</h2>
                <p className={decalStyles.resources}>
                <ul>
                    <li><a href="https://drive.google.com/file/d/1W1xwCaX-wccgi5YRrbgAn8Gm8KtwBDDE/view" target="_blank" className={decalStyles.yellowUnderline}>Write-up</a></li>
                    <li>Would recommend looking into <a href="https://docs-multiplayer.unity3d.com/" target="_blank" className={decalStyles.yellowUnderline}>Netcode for GameObjects</a> if trying to do multiplayer now. This is the official Unity supported solution for multiplayer and networking.</li>
                </ul>
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                </div>    

                <h2>3D Modeling in Maya (Credits to our friends over at UCBUGG)</h2>
                <p className={decalStyles.resources}>
                <ul>
                    <li><a href="http://www.ucbugg.com/static/index.html#labsmodeling1" target="_blank" className={decalStyles.yellowUnderline}>UCBUGG Modeling Lab</a></li>
                    <li><a href="https://docs.google.com/document/d/1WG3_EZ-G7VUZ71WRok3rxj3MCykVuxwjE-mnm2O2w70/edit" target="_blank" className={decalStyles.yellowUnderline}>Cheat Sheet</a></li>
                </ul>
                </p>
            </div>
        </div>

      </body>
    </main>
  )
}

export default resources

export const Head = () => <title>Extended Reality @ Berkeley</title>
