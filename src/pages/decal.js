import * as React from "react"
import { Link } from "gatsby";

import * as decalStyles from "../styles/decal.module.css"
import * as defaultStyles from "../styles/default.module.css"

import Nav from "../components/nav"

const decalPage = () => {

  return (
    <main>
      <body>
        <Nav activePage="decal"/>

        <div className={defaultStyles.bodyWrapper}>
        </div>

      </body>
    </main>
  )
}

export default decalPage

export const Head = () => <title>Extended Reality @ Berkeley</title>