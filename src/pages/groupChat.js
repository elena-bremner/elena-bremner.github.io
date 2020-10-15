import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./groupChat.module.css"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ImageLoader from "../components/imageLoader"
import Header from "../components/header";



export default () => {
  return (
    <Layout>
        <Header
          name  = {"Google Design Challenge"}
          date  = {"January 2020 (1 WEEK)"}
          number  = {"Personal Project"}
          oneliner  = {"Coming soon..."}
        />
        < ImageLoader filename="GroupChat/introImg.png"className={style.introImage} />
        <div className={style.section}> Intro </div>
        <div className={style.intro}> 
        <b> 
            The goal was to strengthen the school community by encouraging experienced students to connect with new students and help them adjust to campus life. 
        </b>
               <br></br><br></br> 
        </div>
        <div className={style.section}> Research </div>
         <p className={style.oneliner}> 
              copy
        </p>
        <p className={style.paragraph}> 
          copy
        </p>
        <div className={style.subtitle}> Interviews </div>
        <p className={style.paragraph}> 
          I interviewed students across different grades and majors to hear about how the initially adjusted to college life. I paid close attention to international and transfer students to see how their stories differed. 
          <br></br> 
          My questions were less mentor/mentee focused and centered around how students build relationships. 
        </p>
        < ImageLoader filename="GroupChat/interview.png"className={style.Himage} />
        <div className={style.subtitle}> Primary Insights </div>
        <div className={style.subtitle}> Secondary Insights </div>
        <div className={style.section}> Problem </div>
        <div className={style.section}> The Idea </div>
        <div className={style.subtitle}> Target Users </div>
        <div className={style.subtitle}> Wireflows </div>
        <div className={style.subtitle}> User Testing </div>
        <div className={style.subtitle}> Iterations </div>
        <div className={style.section}> Final Design </div> 
    </Layout>
  )
}