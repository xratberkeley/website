import React, { useState } from "react"
import { Link } from "gatsby";

import logo from "../images/logo.png";

import * as navStyles from "../styles/nav.module.css"
import * as defaultStyles from "../styles/default.module.css"

const Nav = ({activePage}) => {

  // if (activePage == "decal") {
  //   return (
  //     <section>
  //       <div className={navStyles.navBarDecal}>
  //         <Link to="/home/">
  //           <img className={navStyles.logo} src={logo} alt="logo" />
  //         </Link>
  //         <div className={navStyles.item} style={{visibility: 'hidden'}}>.</div>
  //       </div>
  //     </section>
  //   )
  // }

  const [shown, setShown] = useState(false);

  return (
    <section>
      <div className={navStyles.navBar}>

        <img className={navStyles.logo} src={logo} alt="logo" />

        <Link to="/home/">
          <div className={activePage=="home" ? navStyles.active : navStyles.item}>Home</div>
        </Link>
        <Link to="/about/">
          <div className={activePage=="about" ? navStyles.active : navStyles.item}>Who we are</div>
        </Link>
        <Link to="/projects/">
          <div className={activePage=="projects" ? navStyles.active : navStyles.item}>Projects</div>
        </Link>
        <Link to="/decal/">
          <div className={activePage=="decal" ? navStyles.active : navStyles.item}>Decal</div>
        </Link>
        <a href="https://discord.com/invite/GvGUUCN" target="_blank">
        <div className={navStyles.item}>Discord</div>
        </a>

      </div>

      <div className={navStyles.navBarSmallWrapper}>
        <div className={navStyles.navBarSmall}>

          <img className={navStyles.logo} src={logo} alt="logo" />

          <div className={navStyles.smallNavButtonOutline} onClick={() => setShown(!shown)}>
            <div className={navStyles.smallNavButton}>
              <h1>...</h1>
            </div>
          </div>

        </div>

        {shown ? 
        <div className={navStyles.navList}>
            <Link to="/home/">
              <div className={activePage=="home" ? navStyles.active : navStyles.item}>Home</div>
            </Link>
            <Link to="/about/">
              <div className={activePage=="about" ? navStyles.active : navStyles.item}>Who we are</div>
            </Link>
            <Link to="/projects/">
              <div className={activePage=="projects" ? navStyles.active : navStyles.item}>Projects</div>
            </Link>
            <Link to="/decal/">
              <div className={activePage=="decal" ? navStyles.active : navStyles.item}>Decal</div>
            </Link>
            <a href="https://discord.com/invite/GvGUUCN" target="_blank">
            <div className={navStyles.item}>Discord</div>
            </a>
        </div>
        :
        ""
      }
        
      </div>

    </section>
  )
}

export default Nav

export const Head = () => <title>Extended Reality @ Berkeley</title>
