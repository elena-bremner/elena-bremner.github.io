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
          oneliner  = {"oneliner"}
        />
        <ImageLoader filename="GCal/icon.png" className={style.HimageXS}/>
        <ImageLoader filename="GCal/noMac.png" className={style.Himage}/>
        <div className={style.subtitle}> Google Manager Features </div>
        <ImageLoader filename="GCal/feature1.png" className={style.Himage}/>
        <div className={style.subtitle}> Google Calendar Addons </div>
        <ImageLoader filename="GCal/feature2.png" className={style.Himage}/>
        <div className={style.section}> User-Testing </div>
        <div className={style.subtitle}> The Roommate Experiment </div>
        <ImageLoader filename="GCal/instructions.png" className={style.HimageS}/>
       
        <div className={style.section}> Key Insights </div>
        <ImageLoader filename="GCal/WFH.png" className={style.illus}/>
         <div className={style.paragraph}>1. With more awareness of each others’ schedules, Hannah finds herself reaching  out to her roommates during their free times. </div>
         <div className={style.paragraph}>2. Hannah and her roommates prefer not to associate time with tasks, and would prefer an overall planning and organization tool. </div>
         <div className={style.paragraph}>3. Hannah has a difficult time switching from play to work mode particularly after dinner time. </div>
        <div className={style.section}> Key Takeaways </div>
        <ImageLoader filename="GCal/takeaways.png" className={style.Himage}/>

    </Layout>
  )
}