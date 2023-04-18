import * as React from "react"
import * as indexStyles from "../styles/index.module.css"
import "../styles/default.module.css"
import '../fonts/SpaceMono-Regular.ttf';
import '../fonts/HYShortSamul-Medium.ttf';

// const pageStyles = {
//   color: "#232129",
//   padding: 96,
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// }

const IndexPage = () => {
  return (
    <main>
      <body>
        <div className={indexStyles.rectangle}>
          test
        </div>

        {/* background decoration */}
        <div className={indexStyles.slashes}
            style={{top: "6.4rem", right: "6rem"}}>
          /////////
        </div>
        <div className={indexStyles.slashes}
            style={{bottom: "4rem", left: "4.2rem"}}>
          /////////
        </div>
        <div className={indexStyles.pluses}>
          +++
        </div>
        
        {/* borders */}
        <div className={indexStyles.horizontal} style={{top: "3.4rem"}} />
        <div className={indexStyles.vertical} style={{right: "1.9rem"}} />
        <div className={indexStyles.vertical} style={{right: "3.1rem"}} />
        <div className={indexStyles.horizontal} style={{bottom: "4.6rem"}} />
        <div className={indexStyles.horizontal} style={{bottom: "2rem"}} />
      </body>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Extended Reality @ Berkeley</title>
