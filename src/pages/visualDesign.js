import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./featured-styles.module.css"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ImageLoader from "../components/imageLoader"
import Header from "../components/header";
import emoji from "./visualDesign/emoji_sound_sizeSmall.mp4"

export default () => {
  return (
    <Layout>

        <div className={style.margin}>
        <h1 >Emoji Pneumatic Tube</h1>
        <p className={style.paragraph} > 
            This motion design study was part of a class assignment exploring near future worlds. 
            Working along Catherine Park and Hannah Riley, we imagined a world where emotions act as currency 
            in the shape of emojis. This animation is a snapshot of how these emoticons are shipped 
            through pneumatic tubes from each household to a nearby bank. 
            <br></br> <br></br>
            Music: Prokofiev's "Morning Serenade" from Romeo & Juliet. 
        </p>
          <video autoplay loop controls className={style.HVid}>
            <source src={emoji} type="video/mp4"/>
          </video>
        <h1> Googlers </h1>
        <p className={style.paragraph} >
            During my internship at Deeplocal, I had the opportunity to work on a 
            project for one of Google’s teams. Our goal was to create a strategic document of how googlers 
            can check-in at Google offices post Covid times. I was asked to illustrate personas for one of 
            their pitch decks.
        </p>
        <ImageLoader filename="visualDesign/google_drawings.png" />
        </div>
    </Layout>
  )
}