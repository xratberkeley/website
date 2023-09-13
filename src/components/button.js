import React, { useState } from "react"
import { Link } from "gatsby";

import * as buttonStyles from "../styles/button.module.css"
import * as defaultStyles from "../styles/default.module.css"
import EastIcon from '@mui/icons-material/East';

const Button = ({text, color, icon, type, link, alt}) => {

    const [hover, setHover] = useState(false);

    if (type == "underline") {
        return (
            <section>
                <p className={hover ? buttonStyles.redHover : buttonStyles.redUnderline}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                >
                    <Link to={link} alt={alt}>{text}&nbsp;<EastIcon className={defaultStyles.arrow}/></Link>
                </p>
            </section>
        )
    }

    else if (type == "underlineOut") {
        return (
            <section>
                <p className={hover ? buttonStyles.redHover : buttonStyles.redUnderline}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                >
                    <a href={link} alt={alt}>{text}&nbsp;<EastIcon className={defaultStyles.arrow}/></a>
                </p>
            </section>
        )
    }

    else if (type == "show") {
        return (
            <section>
                <p className={hover || icon == text ? buttonStyles.redHover : buttonStyles.redUnderline}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                >
                    {text}&nbsp;<EastIcon className={defaultStyles.arrow}/>
                </p>
            </section>
        )
    }

    else if (type == "nav") {

        if (color == "yellow") {
            return (
            <section>
                <div className={buttonStyles.yellowHover} style={{visibility: hover ? "visible" : "hidden"}}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                >
                    <Link to={link} alt={alt} className={buttonStyles.yellow}>
                        {text}
                        {icon ? <img className={buttonStyles.img} src={icon} /> : ""}
                    </Link>
                </div>
            </section>
            )
        }

        
        
    }

    else if (type == "out") {
        if (color == "purple") {
            return (
            <section>
                <div className={buttonStyles.purpleHover} style={{visibility: hover ? "visible" : "hidden"}}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                >
                    <a href={link} alt={alt} className={buttonStyles.purple} target="_blank">
                        {text}
                        {icon ? <img className={buttonStyles.img} src={icon} /> : ""}
                    </a>
                </div>
            </section>
            )
        }

        else if (color == "yellow") {
            return (
                <section>
                <div className={buttonStyles.yellowHover} style={{visibility: hover ? "visible" : "hidden"}}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                >
                    <a href={link} alt={alt} className={buttonStyles.yellow} target="_blank">
                        {text}
                        {icon ? <img className={buttonStyles.img} src={icon} /> : ""}
                    </a>
                </div>
            </section>
            )
        }

        else if (color == "red") {
            return (
                <section>
                <div className={buttonStyles.redHoverBox} style={{visibility: hover ? "visible" : "hidden"}}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                >
                    <a href={link} alt={alt} className={buttonStyles.red}>
                        {text}
                        {icon ? <img className={buttonStyles.img} src={icon} /> : ""}
                    </a>
                </div>
            </section>
            )
        }
    }

  return (-1)
}

export default Button

export const Head = () => <title>Extended Reality @ Berkeley</title>