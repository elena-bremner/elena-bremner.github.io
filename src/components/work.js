import React from "react";
import Styles from "./work.module.css";
import Img from "gatsby-image"

// argument for image, link and text for each container

const Work = props =>
  <div>
     <a href={props.link}> 
      <div>
        <div className={Styles.container}>
          <Img fluid={props.picture} className={Styles.image}/>
          <div className={Styles.middle}>
            <span className={Styles.text}>
              {props.name}         
            </span>
          </div>
        </div>
      </div>    
    </a>
  </div>  

export default Work