import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./pinPal.module.css"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ImageLoader from "../components/imageLoader"
import mapVideo1 from "./pinPal/pinningVid.mp4"
import mapVideo2 from "./pinPal/constructions.mp4"
import Header from "../components/header";


export default () => {
  return (
     /* Intro */
    <Layout>
      <div>
        <Header
          name  = {"Pinpal"}
          date  = {"November 2019 (8 weeks)"}
          number  = {"Team: 4"}
          oneliner  = {"Bringing back memorable experiences through collectable tokens."}
        />
        <ImageLoader filename="pinPal/CI.png" className={style.introImage}/>
        <div className={style.section}> Intro </div>
        <div className={style.intro}> 
              When you look around the streets, most people have their 
              faces buried in their smartphone screens oblivous to the rich 
              possibilities in their own neighborhood.
              My teammates and I designed an app to help explore users' 
              personal geography, a way to pin the shops, locales and spots 
              with personal meaning in their community. <br></br>
              What if you could knock your screen to pin your location 
              using GPS? <br></br><br></br>
              My role was _____<br></br><br></br>
              You can jump to the final design <a href="#FD">here</a>
        </div>
        <div className={style.section}> Research </div>
        <hr></hr>
        <p className={style.paragraph}> 
              According to our survey research, users on the move listen to music, 
              go on social media and use navigation tools. It’s as if they are on a
              different planet! <br></br>
              The richness of their neighborhoods and local communities go unexplored.
              Current mapping apps are great for finding how to get from point A to B.  
              They don’t curate interesting things to do in your immediate neighborhood 
              or report incidents or construction site work.
        </p>
        <ImageLoader filename="pinPal/problemIcons.png" className={style.Himage}/>
              <div className={style.conText}> Icons designed by Elena Bremnner </div>
        <div className={style.subtitle}> Goal </div>
        <p className={style.paragraph}> 
             Think pocket guide but personalized and simplified. 
             Our product brings the digital liking ability onto 
             a physical map and will allow users to build a community 
             in passive environments through shared reviews. We will 
             seamlessly create an interface for commuters by allowing them
             to decide which destinations they want to go to. Users can manage 
             their daily activities, such as pinning locations, construction alerts,  
             and real-time events just by passing by the space.The app will collect 
             informational data that users will be able to review later in an 
             activity log. Pinpal supports user needs and helps them stay immersed 
             in their immediate environments.
        </p>
        <div className={style.subtitle}> Knock Knock </div>
        <ImageLoader filename="pinPal/knocking.png" className={style.Vimage}/>
        <p className={style.paragraph}> 
            On Huawei mobile, users can knock their knuckles on their screens to trigger a 
            feature like a screen shot. This function could also be used to engage GPS to 
            capture and pin a specific location without the hassle of opening several apps. 
            We envision this being an option on more smartphones in the future.
        </p>
        <div className={style.conText}> Illustration by Shuyuan Zheng </div>
        <div className={style.subtitle}> Meet Marty!</div>
        <ImageLoader filename="pinPal/persona.png" className={style.Himage}/>
        <p className={style.paragraph}> 
            PinPal is designed for users who want to immerse 
            themselves more into their community by getting to know 
            local shops and areas. At the same time, they would prefer 
            not to depend on their phones for information while walking, 
            as they view their phone as a root of distraction.
        </p>
        <div className={style.subtitle}>UX Blueprint</div>
            <ImageLoader filename="pinPal/blueprint.png" className={style.Himage}/>
        <div className={style.section}> Ideation </div>
            <hr></hr>
        <p className={style.paragraph}> 
            After we had a clear idea of the features we wanted to focus on, 
            we started creating paper mockups of our ideas. After several rounds 
            of user-testing, we took a trip to Boston to experience a dense urban 
            setting to imagine how a user might micro-map using this app.
        </p>
        <div className={style.subtitle}> Features </div>
        <ImageLoader filename="pinPal/icons.png" className={style.Himage}/>
            <div className={style.conText}> Icons designed by Elena Bremnner </div>
        <div className={style.subtitle}> Process </div>
          <table className={style.list}>
            <th > 1. Wizard of Oz prototypes  </th>
            <th > 2. Iteration  </th>
            <th > 3. Refine </th>
          </table>
        <div className={style.section} id = "FD"> Final Design </div>
            <hr></hr>
        <div className={style.subtitle}> Notification </div>
            <ImageLoader filename="/pinPal/1.png" className={style.listImage}/>
            <ImageLoader filename="/pinPal/2.png" className={style.listImage}/>
            <ImageLoader filename="/pinPal/3.png" className={style.listImage}/>
        <div className={style.subtitle}> Maps </div>
            <ImageLoader filename="/pinPal/Maps.png" className={style.FDImage}/>
              <video controls autoplay loop className={style.FDVid}>
                <source src={mapVideo1} type="video/mp4" />
              </video>
              <video controls autoplay loop className={style.FDVid}>
                <source src={mapVideo2} type="video/mp4" />
              </video>
        <div className={style.subtitle}> Activity Log </div>
            <ImageLoader filename="/pinPal/finaldesign2.png" className={style.FDImage}/>
        <div className={style.section}> Self Reflection </div>
          <hr></hr>
        <p className={style.paragraph} > 
            How we retain information through screens is something that has perplexed me 
            for a while. While the ubiquity of smartphones is something that gives us 
            convenience, it seems as though people are being less mindful about what kind 
            of information we intake. Most of us have thousands of pictures in our camera 
            roll, but how many of those pictures do we remember taking? This project allowed 
            me to explore ways in which people can connect to their environment with the help 
            of their phone, instead of depending soley on their phone.
            In terms of the process, I noticed how user-testers are really good at pointing 
            out the blindspots. It can be difficult to step out of your project and view things
            from a different perspective.Note to future self:
            Challenges are a lot more fun when you have a passionate group of teammates working
            by your side.
        </p>
      </div>
    </Layout>
  )
}