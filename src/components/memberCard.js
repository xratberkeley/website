import * as React from "react"

import logo from "../images/logo.png";

import * as aboutStyles from "../styles/about.module.css"
import * as defaultStyles from "../styles/default.module.css"

const MemberCard = ({color, name, position, team, pic}) => {

    if (color == "y") {
        return (
            <section className={aboutStyles.y}>
                <div className={aboutStyles.cardWrapper}>
                    <div className={aboutStyles.picture}>
                        <img src={pic} />
                    </div>
                    <div className={aboutStyles.divider}>
                        <div className={aboutStyles.blank} />
                        <div className={aboutStyles.blank} style={{right: "40px"}} />
                    </div>
                    <div className={aboutStyles.textWrapper}>
                        <div className={aboutStyles.text}>
                            <p className={aboutStyles.name}>{name}</p>
                            <p className={aboutStyles.description}>{position}{team}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    if (color == "b") {
        return (
            <section className={aboutStyles.b}>
                <div className={aboutStyles.cardWrapper}>
                    <div className={aboutStyles.picture}>
                        <img src={pic} />
                    </div>
                    <div className={aboutStyles.divider}>
                        <div className={aboutStyles.blank} />
                        <div className={aboutStyles.blank} style={{right: "40px"}} />
                    </div>
                    <div className={aboutStyles.textWrapper}>
                        <div className={aboutStyles.text}>
                            <p className={aboutStyles.name}>{name}</p>
                            <p className={aboutStyles.description}>{position}{team}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section>
            <div className={["aboutStyles.", color, ", aboutStyles.cardWrapper"].join("")}>
                <div className={aboutStyles.picture}>
                    <img src={pic} />
                </div>
                <div className={aboutStyles.divider}>
                    <div className={aboutStyles.blank} />
                    <div className={aboutStyles.blank} />
                </div>
                <div className={aboutStyles.textWrapper}>
                    <div className={aboutStyles.text}>
                        <p className={aboutStyles.name}>{name}</p>
                        <p className={aboutStyles.description}>{position}, {team}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MemberCard

export const Head = () => <title>Extended Reality @ Berkeley</title>