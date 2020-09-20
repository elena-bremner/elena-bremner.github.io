import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./doodleJump.module.css"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ImageLoader from "../components/imageLoader"
import Header from "../components/header";
import screenRec from "./doodleJump/wholeScreen.mp4"



export default () => {
  return (
    <Layout>
        <Header
          name  = {"Doodle Jump"}
          date  = {"December 2019 (2 WEEKS)"}
          number  = {""}
          oneliner  = {"Explorations in object oriented programming with Java"}
        />
    <div className={style.section}> Intro </div>
    <div className={style.intro}>
        <b> 
            In the fall of 2019, I took a course in “Introduction to 
            Object-Oriented Programming” at Brown University
        </b>.
        For one of my assignments, I programmed a game of Doodle Jump in Java. 
        <br></br><br></br> 
        The objective of this assignment was to represent parts of the program 
        like the “doodle” or the platforms both graphically and logically. 

    </div>
     <video controls autoplay loop className={style.vid}>
            <source src={screenRec} type="video/mp4"/>
    </video>
    <div className={style.section}> Classes </div>
    <p className={style.paragraph}> 
       Classes are a blueprint from which objects are created. 
       Thus, in order to organize my code in a clear way, 
       I created classes for the main game, the doodle, and the platforms.
    </p>
    <div className={style.subtitle}> Game </div>
    <p className={style.paragraph}> 
        The game class contains all the logic. For instance, it manages what the doodle does when 
        it interacts with the platforms, the timeline, and when the game ends. 
        The game class also includes the KeyHandler, which controls doodle movement 
        with key input. Since the doodle is falling and bouncing, there is physics 
        added to the doodle when it intersects with any of the platforms. 
    </p>
    <ImageLoader filename="doodleJump/arrowKeys.png" className={style.HimageXS}/>
    <ImageLoader filename="doodleJump/gameCode.png" className={style.HimageS}/>
    <div className={style.subtitle}> Platforms and Doodle </div>
    <p className={style.paragraph}> 
        The platforms are in the form of an arraylist in order to continually 
        index new platforms. The doodle class enables the program to remember 
        doodle’s location throughout the game, which is vital to check if the doodle 
        is bouncing or falling. 
    </p>
    <ImageLoader filename="doodleJump/doodle.png" className={style.HimageXS}/>

    </Layout>
  )
}
