import * as React from "react"
import { Link } from "gatsby";

import * as homeStyles from "../styles/index.module.css"
import * as defaultStyles from "../styles/default.module.css"

import Nav from "../components/nav"

const aboutPage = () => {

  return (
    <main>
      <body>
        <Nav activePage="about"/>

        {/* <div className={defaultStyles.bodyWrapper}>
        </div> */}

      </body>
    </main>
  )
}

export default aboutPage

export const Head = () => <title>Extended Reality @ Berkeley</title>
