import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ImageLoader from "../components/imageLoader"
import Header from "../components/header";
import style from "./GCal.module.css"


export default () => {
  return (
    <Layout>
        <Header
          imageLoader = {<ImageLoader filename="NASA/NASAcover.png" />}
          name  = {"NASA Lunar Habitat Design"}
          date  = {"March 2020 (8 weeks)"}
          number  = {"Collaboration with 6 other designers"}
          role  = {"Crew Quarters Lead"}
          p1 = {"In the spring of 2020, working collaboratively with six other designers, we presented a habitat design to NASA for the 2024 Artemis mission. We were taught and guided by Michael Lye, NASA coordinator and RISD professor. "}
          p2 = {"The objective was to  design a lunar surface habitat for a 30-day mission for 4 astronauts. The habitat was to be contained within a cylindrical module with an interior of 4.4 meters by 7 meters. "}
        />
        <div className={style.margin}>
          <ImageLoader filename="NASA/MainDeck.png" className={style.Himage}/>
          <ImageLoader filename="NASA/CQ.jpg" className={style.Himage}/>
          <ImageLoader filename="NASA/Portside.png" className={style.Himage}/>
          <ImageLoader filename="NASA/Starboardside.png" className={style.Himage}/>
        </div>
    </Layout>
  )
}