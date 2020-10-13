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

    </Layout>
  )
}