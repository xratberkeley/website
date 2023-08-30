import * as React from "react"
import { Link } from "gatsby";

import * as aboutStyles from "../styles/about.module.css"
import * as defaultStyles from "../styles/default.module.css"

import Nav from "../components/nav"
import MemberCard from "../components/memberCard"

import harris from '../images/harris.jpg';
import erik from '../images/erik.jpg';
import helena from '../images/helena.jpg';
import alton from '../images/alton.jpg';
import lizzy from '../images/lizzy.jpg';
import beni from '../images/beni.jpg';
import empty from '../images/empty.png';

const aboutPage = () => {

  return (
    <main>
      <body>
        <Nav activePage="about"/>

        <div className={defaultStyles.bodyWrapper}>
          <div className={aboutStyles.execWrapper}>
            <div className={aboutStyles.exec}>
              <h1>Exec Team</h1>
              <div className={aboutStyles.cards}>
                <MemberCard color="y" name="Harris Thai" position="President, " team="ISAACS" pic={harris}/>
                <MemberCard color="b" name="Erik Nelson" position="Internal VP, " team="Edu." pic={erik}/>
                <MemberCard color="b" name="Jade Mon" position="External VP" team="" pic={empty}/>
                <MemberCard color="b" name="Helena Su" position="Finance" team="" pic={helena}/>
                <MemberCard color="b" name="Alton Sturgis" position="Research, " team="Edu." pic={alton}/>
                <MemberCard color="b" name="Lizzy Wang" position="Design, " team="TutoriVR" pic={lizzy}/>
                <MemberCard color="b" name="Beni Issler" position="" team="CVRE" pic={beni}/>
                <MemberCard color="b" name="James Hu" position="" team="Education" pic={empty}/>
              </div>
            </div>
          </div>

          <div className={aboutStyles.officerWrapper}>
            <div className={aboutStyles.officer}>
              <h1>Officers</h1>
              <div className={aboutStyles.cards}>
              </div>
            </div>
          </div>
        </div>

      </body>
    </main>
  )
}

export default aboutPage

export const Head = () => <title>Extended Reality @ Berkeley</title>
