import * as React from "react"
import { Link } from "gatsby";

import logo from "../images/logo.png";

import * as navStyles from "../styles/nav.module.css"
import * as defaultStyles from "../styles/default.module.css"

const DecalNav = ({activePage, open}) => {

  return (
    <section className={navStyles.decal}>
      <div className={navStyles.navBar}>

        <Link to="/decal/">
            <div className={activePage=="home" ? navStyles.active : navStyles.item}>Home/Announcements</div>
        </Link>
        <div className={navStyles.group}>
            <div className={navStyles.title}>
                <div className={navStyles.arrow}>></div>
                <Link to="/decal/homework">
                    <div className={activePage=="homework" ? navStyles.active : navStyles.item}>Homework</div>
                </Link>
            </div>
            <div className={navStyles.subLinks}>
            </div>    
        </div>
        <Link to="/decal/labs/">
            <div className={activePage=="labs" ? navStyles.active : navStyles.item}>Projects</div>
        </Link>
        <Link to="/decal/lectures/">
            <div className={activePage=="lectures" ? navStyles.active : navStyles.item}>Lectures</div>
        </Link>
        <Link to="/decal/final/">
            <div className={activePage=="final" ? navStyles.active : navStyles.item}>Final project</div>
        </Link>
        <Link to="/decal/resources/">
            <div className={activePage=="resources" ? navStyles.active : navStyles.item}>Extra resources</div>
        </Link>

      </div>
    </section>
  )
}

export default DecalNav

export const Head = () => <title>Extended Reality @ Berkeley</title>
