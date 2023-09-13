import * as React from "react"
import { Link } from "gatsby";

import * as decalStyles from "../../../styles/decal.module.css"
import * as defaultStyles from "../../../styles/default.module.css"

import Nav from "../../../components/nav"
import DecalNav from "../../../components/decalNav"
import Button from "../../../components/button";

import EastIcon from '@mui/icons-material/East';

// import img1 from '../../../images/decal/HW2-0.png';
// import img2 from '../../../images/decal/HW2-1.png';
// import img3 from '../../../images/decal/HW2-2.png';
// import img4 from '../../../images/decal/HW2-3.png';
// import img5 from '../../../images/decal/HW2-4.png';
// import img6 from '../../../images/decal/HW2-5.png';
// import img7 from '../../../images/decal/HW2-6.png';
// import img8 from '../../../images/decal/HW2-7.png';

const hw2 = () => {

  return (
    <main>
      <body>
        <Nav activePage="decal"/>

        <div className={decalStyles.bodyWrapper}>
            <DecalNav activePage="homework" open="homework"/>
            <div className={decalStyles.textWrapper}>
                <h1>Homework 2: Music Visualizer</h1>   

                <div className={decalStyles.toc}>
                    <h2>Table of Contents</h2>
                    <p><span className={decalStyles.redLink}>
                    <Button text=""
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text=""
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text=""
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text=""
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text=""
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text=""
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Submission and Grading"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="submission-and-grading"
                            alt=""
                    /></span></p>
                </div>

                <p>
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id=""></h2>
                <p>
                <br/><br/>
                {/* <img src={img1}/> */}
                <br/><br/>
                <br/><br/>
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id=""></h2>
                <p>
                <br/><br/>
                {/* <img src={img1}/> */}
                <br/><br/>
                <br/><br/>
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id=""></h2>
                <p>
                <br/><br/>
                {/* <img src={img1}/> */}
                <br/><br/>
                <br/><br/>
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id=""></h2>
                <p>
                <br/><br/>
                {/* <img src={img1}/> */}
                <br/><br/>
                <br/><br/>
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id=""></h2>
                <p>
                <br/><br/>
                {/* <img src={img1}/> */}
                <br/><br/>
                <br/><br/>
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id=""></h2>
                <p>
                <br/><br/>
                {/* <img src={img1}/> */}
                <br/><br/>
                <br/><br/>
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id=""></h2>
                <p>
                <br/><br/>
                {/* <img src={img1}/> */}
                <br/><br/>
                <br/><br/>
                </p>
                
            </div>
        </div>

      </body>
    </main>
  )
}

export default hw2

export const Head = () => <title>Extended Reality @ Berkeley</title>
