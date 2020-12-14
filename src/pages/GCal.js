import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./GCal.module.css"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ImageLoader from "../components/imageLoader"
import Header from "../components/header";



export default () => {
  return (
    <Layout>
        <Header
          name  = {"Google Management"}
          date  = {"September 2020 (1 WEEK)"}
          number  = {"Personal Project"}
          oneliner  = {""}
        />
        <ImageLoader filename="GCal/icon.png" className={style.HimageXS}/>
        <ImageLoader filename="GCal/noMac.png" className={style.Himage}/>
        <div className={style.section}> Intro </div>
        <div className={style.intro}> 

          With the majority of the U.S. population working from home, respecting each other’s space and being aware of 
          each other’s schedules has become more vital than ever. Mynute annoyances like worrying about your toddler 
          accidentally interrupting, or housemates not following protocol can take a toll on your productivity. Sharing schedules, 
          and verbal communications are effective. However, when these methods fail, nuanced messages like closing the door or wearing 
          headphones are sometimes not enough. <b>Hannah’s main concern is not being too aggressive or repetitive with her housemates and 
          finding a way to open up discussion in midst of roommate trouble. </b>
          
        </div>
        <div className={style.subtitle}> Google Manager Features </div>
        <ImageLoader filename="GCal/feature1.png" className={style.Himage}/>
        <div className={style.subtitle}> Google Calendar Addons </div>
        <ImageLoader filename="GCal/feature2.png" className={style.Himage}/>
        <div className={style.section}> User-Testing </div>
        <div className={style.subtitle}> The Roommate Experiment </div>
        <div className={style.paragraph}>Remote user testing </div>
        <ImageLoader filename="GCal/instructions.png" className={style.HimageS}/>
        <div className={style.section}> Key Insights </div>
        <ImageLoader filename="GCal/WFH.png" className={style.illus}/>
         <div className={style.list}>1. With more awareness of each others’ schedules, Hannah finds herself reaching  out to her roommates during their free times. </div>
         <div className={style.list}>2. Hannah and her roommates prefer not to associate time with tasks, and would prefer an overall planning and organization tool. </div>
         <div className={style.list}>3. Hannah has a difficult time switching from play to work mode particularly after dinner time. </div>
        <div className={style.section}> Key Takeaways </div>
        <ImageLoader filename="GCal/takeaways.png" className={style.Himage}/>

    </Layout>
  )
}