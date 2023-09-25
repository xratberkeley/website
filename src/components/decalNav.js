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
            <Link to="/decal/homework" className={navStyles.title}>
              <div className={open=="homework" ? navStyles.arrowOpen : navStyles.arrow}>></div>
              <div className={open=="homework" ? navStyles.active : navStyles.item}>Homework</div>
            </Link>
            <div className={navStyles.subLinks} style={{display: open=="homework" ? "flex" : "none"}}>
              <Link to="/decal/homework/hw1">
                <div className={activePage=="hw1" ? navStyles.active : navStyles.item}>Homework 1: The Rube Goldberg Ball Machine</div>
              </Link>
              <Link to="/decal/homework/hw2">
                <div className={activePage=="hw2" ? navStyles.active : navStyles.item}>Homework 2: Music Visualizer</div>
              </Link>
              <Link to="/decal/homework/hw3">
                <div className={activePage=="hw3" ? navStyles.active : navStyles.item}>Homework 3: Fractal Generation</div>
              </Link>
              {/* <Link to="/decal/homework/hw4">
                <div className={activePage=="hw4" ? navStyles.active : navStyles.item}>Homework 4: Pong</div>
              </Link>
              <Link to="/decal/homework/hw5">
                <div className={activePage=="hw5" ? navStyles.active : navStyles.item}>Homework 5: Collisions, Raycasting, and Triggers</div>
              </Link> */}
            </div>    
        </div>
        <div className={navStyles.group}>
            <Link to="/decal/labs" className={navStyles.title}>
              <div className={open=="labs" ? navStyles.arrowOpen : navStyles.arrow}>></div>
              <div className={open=="labs" ? navStyles.active : navStyles.item}>Labs</div>
            </Link>
            <div className={navStyles.subLinks} style={{display: open.includes("labs") ? "flex" : "none"}}>
              <div className={navStyles.group}>
                <Link to="/decal/labs/oculus" className={navStyles.title}>
                  <div className={open=="oculuslabs" ? navStyles.arrowOpen : navStyles.arrow}>></div>
                  <div className={open=="oculuslabs" ? navStyles.active : navStyles.item}>Oculus Labs</div>
                </Link>
                <div className={navStyles.subLinks} style={{display: open=="oculuslabs" ? "flex" : "none"}}>
                  <Link to="/decal/labs/oculus/lab1">
                    <div className={activePage=="oculuslab1" ? navStyles.active : navStyles.item}>Oculus Lab 1</div>
                  </Link>
                  <Link to="/decal/labs/oculus/lab2">
                    <div className={activePage=="oculuslab2" ? navStyles.active : navStyles.item}>Oculus Lab 2</div>
                  </Link>
                  {/* <Link to="/decal/labs/oculus/lab3">
                    <div className={activePage=="lab3" ? navStyles.active : navStyles.item}>Lab 3</div>
                  </Link>
                  <Link to="/decal/labs/oculus/lab4">
                    <div className={activePage=="lab4" ? navStyles.active : navStyles.item}>Lab 4</div>
                  </Link> */}
                </div>
              </div>
              {/* <Link to="/decal/labs/lab2">
                <div className={activePage=="lab2" ? navStyles.active : navStyles.item}>Lab 2</div>
              </Link> */}
            </div>
        </div>    
        <Link to="/decal/lectures/">
            <div className={activePage=="lectures" ? navStyles.active : navStyles.item}>Lectures</div>
        </Link>
        {/* <Link to="/decal/final/">
            <div className={activePage=="final" ? navStyles.active : navStyles.item}>Final project</div>
        </Link> */}
        <Link to="/decal/resources/">
            <div className={activePage=="resources" ? navStyles.active : navStyles.item}>Extra resources</div>
        </Link>

      </div>
    </section>
  )
}

export default DecalNav

export const Head = () => <title>Extended Reality @ Berkeley</title>
