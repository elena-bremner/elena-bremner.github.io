import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./VirtualOffice.module.css"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ImageLoader from "../components/imageLoader"
import Header from "../components/header";
import full from "./VirtualOffice/DLvid.mp4"
import login from "./VirtualOffice/login.mp4"
import hover from "./VirtualOffice/hover.mp4"
import high5 from "./VirtualOffice/high5.mp4"



        // <div className={style.section}> Intro </div>
        // <div className={style.intro}> 
        //       copy <br></br>
        //       copy  <br></br><br></br>
        //       My role was _____<br></br><br></br>
        //       You can jump to the final design <a href="#FD">here</a>
        // </div>
        // <div className={style.section}> Our Ask </div>
        // <hr></hr>
        // <p className={style.paragraph}> 
        //       Copy
        // </p>

export default () => {
  return (
    <Layout>
      <div className={style.wrapper}>
        <Header
          name  = {"Virtual Office"}
          date  = {"July 2020 (4 weeks)"}
          number  = {"Team: 3"}
          oneliner  = {"Digital and Social activation that vizualizes company achievements, activity, and culture"}
        />
        <ImageLoader filename="VirtualOffice/dayMode.png"/>

        <video controls autoplay loop className={style.FDVid}>
            <source src={full} type="video/mp4"/>
        </video>
        <video controls autoplay loop className={style.threeVid}>
            <source src={login} type="video/mp4"/>
        </video>
        <video controls autoplay loop className={style.threeVid}>
            <source src={hover} type="video/mp4"/>
        </video>
        <video controls autoplay loop className={style.threeVid}>
            <source src={high5} type="video/mp4"/>
        </video>
      </div>
    </Layout>
  )
}
