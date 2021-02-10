import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./featured-styles.module.css"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ImageLoader from "../components/imageLoader"
import Header from "../components/header";
import blend from './AR/blend.gif'
import purp from './AR/purp.gif'
import orange from './AR/orange.gif'
import touch from './AR/touch.gif'

import AOS from 'aos';
import 'aos/dist/aos.css';


import phone from "./AR/phone_view.mp4"
import main from "./AR/all_vid.mp4"



export default () => {
  return (
    <Layout>
        <Header
          imageLoader = {< ImageLoader filename="AR/background.jpg"/>}
          name  = {"House Party"}
          date  = {"November 2020 (1 month )"}
          number  = {"For fun"}
          oneliner  = {""}
          role  = {"AR, 3D Modeling"}
          p1 = {"Due to public health and social measures put in place by the novel CoronaVirus, I spent most of my fall semester at home. While these restrictions are dire, I can’t help feel down about the lively college parties I’m missing out on. I decided to take matters into my own hands. With the magic of Augmented Reality, I created my own party and had a blast with new friends (yeah, without masks!). "}
        />
        <div className={style.margin}>
            <div className={style.section}> Video </div>
            <div className={style.grid2} data-aos="fade-up" >
                <div className={style.descWrapper} >
                    <div className={style.descHeadline}>
                          Screen Capture
                    </div>
                    <div className={style.desc} >
                        This is the screen capture of the final product. 
                    </div>  
                </div>
                <div className={style.vidWrapper} >
                    <video controls autoplay loop className={style.largeVid} preload="meta">
                        <source src={main} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className={style.grid2} data-aos="fade-up" >
                <div className={style.vidWrapper} >
                <video controls autoplay loop className={style.largeVid} preload="meta">
                        <source src={phone} type="video/mp4" />
                 </video>
                </div>
                <div className={style.descWrapper} >
                    <div className={style.descHeadline}>
                          Phone Capture
                    </div>
                    <div className={style.desc} >
                        I used Unity and Xcode to push the AR experience to my phone. This allowed me to playtest and tweak with sizing and color.
                    </div>  
                </div>
            </div>
            <div className={style.section}> Features </div>
            <div className={style.subtitle} data-aos="fade-up">
                AR Trackers
            </div>
            <div className={style.desc}  data-aos="fade-up">
                I used three detectors (coded with c#) to spawn my blob friends: <b>plane detection</b>, <b>image tracker</b>, and <b>touch detection.</b> 
            </div> 
            <div className={style.vidWrapper} data-aos="fade-up"> 
                <div className={style.grid3}>
                    <div> 
                        <div className={style.descHeadline}> Image Tracker </div>
                        <img src={purp} className={style.fullVid}/>  
                    </div>
                    <div>
                        <div className={style.descHeadline}> Image Tracker </div>
                         <img src={orange} className={style.fullVid}/>
                    </div>
                    <div>
                        <div className={style.descHeadline}> Tap to Spawn </div>
                         <img src={touch} className={style.fullVid}/>
                    </div>
                </div>
            </div>
            <div className={style.section}> Behind the scenes </div>
            <div className={style.subtitle}>
                Character Design
            </div>
            <div className={style.desc}>
                I modeled and animated the characters in Blender and exported them into Unity. 
            </div>
            <img src={blend} className={style.HimageS}/>
            <div className={style.descHeadline}>
                Programming with C#
            </div>
            <div className={style.desc} >
                 
            </div>  
            <ImageLoader filename="AR/code.png" className={style.Himage}/>
            <div className={style.desc} >
                 Thank you for viewing. I had a lot of fun making this, please tell me what you think if you enjoyed it!
            </div>  
        </div>
    </Layout>
    )
}