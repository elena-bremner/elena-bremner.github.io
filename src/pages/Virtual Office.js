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
 
        <Header
          imageLoader = {< ImageLoader filename="VirtualOffice/dayMode.png"className={style.introImage} />}
          name  = {"Virtual Office"}
          date  = {"July 2020 (4 weeks)"}
          number  = {"Team: 3 Tommy O'Halloran (Design), and Roshan Benefo (Engineering) "}
          oneliner  = {"Digital and social activation that visualizes company achievements, activity, and culture"}
          role  = {"3D assets designer, motion designer, and UI designer"}
          p1 = {"  COVID-19 has compelled people to think about new and creative ways to continue workplace engagement and maintain a sense of community that is entirely online and physically distant. During my internship at Deeplocal, we accessed commonly used work platforms like Slack, and 15-five to trigger playful animations. The goal was to create a visual aid that would help bring back the office energy and a sense of community that have been lost during the lockdown. "}
        />
      <video autoplay muted loop controls className={style.FDVid}><source src={full} type="video/mp4"/></video>
      <div className={style.margin} >
        <div className={style.section}> Design Process </div>
          <p className={style.oneliner}> 
              Visualize office activity via whimsical animations.
          </p>
          <p className={style.paragraph}> 
          Simulating company culture through curated colors and style, 
          we created a visual aid that helps bring back the office energy 
          that has been lost during lockdowns in the age of the Covid pandemic. 
          3D models were created in Blender and 3Dmax and the user interface for 
          the website was coded in Javascript and CSS. 
          </p>
          <div className = {style.subtitle}> UI/UX </div>
              <div className = {style.name}>Hover </div>
              <p className={style.paragraph}>
                  Clients can uncover hidden easter eggs to learn more about the Deeplocal 
                  culture and values.  
              </p>
              <ImageLoader filename="VirtualOffice/chalkBot_hover.png" className={style.HimageS}/>
              <div className = {style.name}>Timeline</div>
              <p className={style.paragraph}>
                  To review past activity, employees can use the timeline 
                  to see what happened throughout the day. 
              </p>
              <ImageLoader filename="VirtualOffice/timeline.png" className={style.HimageS}/> 
              <div className = {style.name}>Login </div>
              <p className={style.paragraph}>   
                  With data collection comes privacy. Any feature polling private 
                  company information will only be accessible to Deeplocal 
                  employees through their gmail login. 
             </p>
              <ImageLoader filename="VirtualOffice/login.png" className={style.HimageXS}/> 

        <div className = {style.subtitle}> Exporting </div>
        <p className={style.paragraph}> 
            3D assets were exported as GLB files, which is a binary 
            format representation of 3D models, making it easier to 
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
        <div className = {style.subtitle}> Company Activity </div>
        <p className={style.paragraph}> 
             Company activity is represented through slack enabled windows. 
             The front windows turn on and off throughout the day to display 
             the percentage of employees active on slack. 
        </p>
        <ImageLoader filename="VirtualOffice/LightsMock.png"className={style.introImage}/>
        <div className = {style.subtitle}> Watch High-Fives High Fly </div>
        <p className={style.paragraph}> 
            When employees receive “high fives,” their names are projected on a 
            banner to celebrate their achievements and hard work. 
        </p>
        <ImageLoader filename="VirtualOffice/high5Mock.png"className={style.introImage}/>
        <div className = {style.subtitle}> The Virtual World </div>
        <p className={style.paragraph}> 
             Check out the virtual world <a href= "https://virtualoffice-285701.ue.r.appspot.com/" >here</a>. 
             Best seen on computer with a mouse. 
        </p>
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
