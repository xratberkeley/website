import * as React from "react"
import { useGlitch } from 'react-powerglitch';
import { Link } from "gatsby";

import * as indexStyles from "../styles/index.module.css"
import * as defaultStyles from "../styles/default.module.css"

import Button from "../components/button.js"

import logo from "../images/logo.png";
import triangleBlue from "../images/triangleBlue.png";
import triangleRed from "../images/triangleRed2.png";
import EastIcon from '@mui/icons-material/East';

const IndexPage = () => {

  const glitch = useGlitch({
    "playMode": "always",
    "createContainers": true,
    "hideOverflow": false,
    "timing": {
      "duration": 450
    },
    "glitchTimeSpan": false,
    "shake": {
      "velocity": 6,
      "amplitudeX": 0.02,
      "amplitudeY": 0.02
    },
    "slice": {
      "count": 2,
      "velocity": 9,
      "minHeight": 0.04,
      "maxHeight": 0.12,
      "hueRotate": true
    },
    "pulse": false
  });

  return (
    <main>
      <body>
        <div className={indexStyles.rectangle} />

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
        <div className={indexStyles.vertical} style={{left: "1.9rem"}} />
        <div className={indexStyles.vertical} style={{right: "1.9rem"}} />
        <div className={indexStyles.vertical} style={{right: "3.1rem"}} />
        <div className={indexStyles.horizontal} style={{bottom: "4.6rem"}} />
        <div className={indexStyles.horizontal} style={{bottom: "2rem"}} />

        {/* framing */}
        <div className={indexStyles.framing} style={{top: "2.1rem", left: "1.9rem"}} />
        <div className={indexStyles.framingHorizontal} style={{top: "2.1rem", left: "1.9rem"}} />
        <div className={indexStyles.framing} style={{top: "7.4rem", right: "1.4rem"}} />
        <div className={indexStyles.framing} style={{bottom: "2rem", right: "1.9rem"}} />
        <div className={indexStyles.barcodeWrapper}>
          <div className={indexStyles.barcode} />
          <div className={indexStyles.barcode} />
          <div className={indexStyles.barcode} />
          <div className={indexStyles.barcode} />
          <div className={indexStyles.barcode} />
          <div className={indexStyles.barcode} />
        </div>

        {/* squares */}
        <div className={indexStyles.squares} style={{top: "20em", left: "10em"}} />
        <div className={indexStyles.squares} style={{bottom: "15em", left: "14em"}} />
        <div className={indexStyles.squares} style={{bottom: "17em", right: "9em"}} />
        <div className={indexStyles.squares} style={{top: "13em", right: "16em"}} />
        <div className={indexStyles.squares} style={{top: "19em", right: "26em"}} />
        <div className={indexStyles.squares} style={{bottom: "17em", left: "25em"}} />

        {/* central content */}
        <div className={indexStyles.mainWrapper}>
          <span ref={glitch.ref}>
            <img className={indexStyles.logo} src={logo} alt="logo" />
          </span>
          <span ref={glitch.ref}>
            <h1>Extended Reality @ Berkeley</h1>
          </span>
          <div className={indexStyles.tag}>
            <p>Reality is designed.&nbsp;</p>
            <Button
              text="Enter the dreamscape"
              color="red"
              icon={EastIcon} 
              type="underline"
              link="/home/"
              alt="link to home"
            />
          </div>

          {/* central content background */}
          <div className={indexStyles.triangle}>
            <img src={triangleBlue} alt="blue triangle" />
          </div>
          <div className={indexStyles.triangle} id={indexStyles.triangleRed}>
            <img src={triangleRed} alt="red triangle" />
          </div>
        </div>

      </body>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Extended Reality @ Berkeley</title>
