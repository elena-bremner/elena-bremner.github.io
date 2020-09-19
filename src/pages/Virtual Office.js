import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./VirtualOffice.module.css"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ImageLoader from "../components/imageLoader"
import Header from "../components/header";
import full from "./VirtualOffice/DLvid.mp4"
import login from "./VirtualOffice/login.mp4"
import hover from "./VirtualOffice/info.mp4"
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
      <div c>
        <Header
          name  = {"Virtual Office"}
          date  = {"July 2020 (4 weeks)"}
          number  = {"Team: 3"}
          oneliner  = {"Digital and Social activation that vizualizes company achievements, activity, and culture"}
        />
        < ImageLoader filename="VirtualOffice/dayMode.png"className={style.introImage} />
        <div className={style.section}> Intro </div>
        <div className={style.intro}> 
             COVID-19 has compelled people to think about new and creative ways to continue workplace engagement 
             and maintain a sense of community that is entirely online and physically distant. During my internship at Deeplocal, 
             we accessed commonly used work platforms like Slack, and 15-five to trigger playful animations. <b> The goal was to create a visual 
             aid that would help bring back the office energy and a sense of community that have been lost during 
             the lockdown. </b>
             <br></br><br></br>
             This project was completed by Deeplocal’s summer 2020 interns, 
             Roshan Benefo, Elena Bremner and Tommy O'Halloran
             <br></br><br></br>
             <b>My Role:</b> 3D assets designer, motion designer, and UI designer
        </div>
        <video controls autoplay loop className={style.FDVid}>
            <source src={full} type="video/mp4"/>
        </video>
        <div className={style.section}> Design Process </div>
          <p className={style.oneliner}> 
              Visualize office activity via whimsical animations.
          </p>
          <p className={style.paragraph}> 
          Emulating company culture through curated colors and style, 
          we created a visual aid that helps bring back the office energy 
          that has been lost during lockdowns in the age of the Covid pandemic. 
          3D models were created in Blender and 3Dmax and the user interface for 
          the website was coded in Javascript and CSS. 
          </p>
          <div className = {style.subtitle}> Features </div>
          <table className={style.list} >
            <tbody>
              <tr >
                <th>Hover </th>
                <th>Log-in </th>
                <th>Timeline</th>
              </tr>
              <tr className={style.listText}>
                <th> <ImageLoader filename="VirtualOffice/chalkBot_hover.png"/> </th>
                <th> <ImageLoader filename="VirtualOffice/login.png"/> </th>
                <th> <ImageLoader filename="VirtualOffice/timeline.png"/> </th>
              </tr>
            </tbody>
        </table>
        <div className = {style.subtitle}> Exporting </div>
        <p className={style.paragraph}> 
            3D assets were exported as GLB files, which is a binary 
            format representation of 3D models making it easier to 
            implement in javascript. 
        </p>
        < ImageLoader filename="VirtualOffice/blender.png"className={style.Himage} />
         <div className={style.section}> Engineering Process </div>
        <p className={style.oneliner}> 
             API driven dynamic WebGL render in Three.js
        </p>
        <p className={style.paragraph}> 
             We polled the company Slack API to access online activity through 
             messages and checking user status.
        </p>
        <ImageLoader filename="VirtualOffice/code"className={style.Himage}/>
        <div className = {style.subtitle}> Online status </div>
        <ImageLoader filename="VirtualOffice/LightsMock.png"className={style.introImage}/>
        <div className = {style.subtitle}> High-fives </div>
        <ImageLoader filename="VirtualOffice/high5Mock.png"className={style.introImage}/>
        <div className = {style.subtitle}> three.js </div>
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
