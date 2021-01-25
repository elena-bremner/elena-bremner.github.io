gridWrapperimport React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./featured-styles.module.css"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ImageLoader from "../components/imageLoader"
import Header from "../components/header";

// <ImageLoader filename="GCal/icon.png" className={style.HimageXS}/>

export default () => {
  return (
    <Layout>
        <Header
          imageLoader = {< ImageLoader filename="GCal/noMac.png"/>}
          name  = {"Google Management"}
          date  = {"September 2020 (1 week )"}
          number  = {"Personal Project"}
          oneliner  = {""}
          role  = {"UX/UI, User-Testing, Visual Design"}
          p1 = {"With the majority of the U.S. population working from home, respecting each other’s space and being aware of each other’s schedules has become more vital than ever. Minute annoyances like worrying about your toddler accidentally interrupting or housemates not following protocol can take a toll on your productivity. Sharing schedules and verbal communications are effective. However, when these methods fail, nuanced messages like closing the door or wearing headphones are sometimes not enough. "}
          p2 ={"The users' main concern is not being too aggressive or repetitive with her housemates and finding a way to open up discussion in midst of roommate trouble."}
        />
        <div className={style.margin}>
        
            <div className={style.subtitle}> Google Manager Features </div>
            <ImageLoader filename="GCal/feature1.png" className={style.Himage}/>
            <div className={style.subtitle}> Google Calendar Add-ons </div>
            <ImageLoader filename="GCal/feature2.png" className={style.Himage}/>
            <div className={style.subtitle}> The Roommate Experiment </div>
            <div className={style.paragraph}> Given the COVID-19 social distancing restrictions, I created a set of instructions for a take home experiment for some user-testing. 
            Hannah, and her three roommates used this method for two weeks and answered daily questions on a google doc. </div>
            <div className={style.grid2}>
                <ImageLoader filename="GCal/pt1.png" className={style.HimageS}/>
                <ImageLoader filename="GCal/pt2.png" className={style.HimageS}/>
            </div>
            <div className={style.grid} >
              <div>
                  <div className={style.subtitle}> User Feedback </div>
                   <div className={style.list}>With more awareness of each others’ schedules, Hannah finds herself reaching  out to her roommates during their free times. </div>
                   <div className={style.a}> "Hannah and I worked out on day 2 and day 5 when our calendars were free" - Roommate  </div>
                   <div className={style.list}>Hannah and her roommates prefer not to associate time with tasks, and would prefer an overall planning and organization tool. </div>
                   <div className={style.a}> “We forgot to defrost the chicken last night which delayed our dinner” - Roommate  </div>
                   <div className={style.list}>Hannah has a difficult time switching from play to work mode particularly after dinner time. </div>
                   <div className={style.a}> "I feel like I'm overspending my boundaries if I nudge them to be quiet during dinner hour" - Hannah  </div>
              </div>
              <div>
                  <ImageLoader filename="GCal/WFH.png" className={style.illus}/>
                  <span className={style.descWrapper3}>Drawn by Elena (Me)</span>
              </div>
            </div>
            <div className={style.subtitle}> Key Takeaways </div>
            <div className={style.gridWrapper}>
                <div className={style.grid2}>
                    <div className={style.box}>
                      <ImageLoader filename="GCal/convo.png" className={style.HimageXS}/>
                      <div className={style.list}> Feels like this method has opened up conversation. </div>
                    </div>
                    <div className={style.box}>
                      <ImageLoader filename="GCal/habit.png" className={style.HimageXS}/>
                      <div className={style.list}> More mindful of eachothers' habits. </div>
                    </div>
                </div>
                <div className={style.grid2}>
                    <div className={style.box}>
                      <ImageLoader filename="GCal/mindful.png" className={style.HimageXS}/>
                      <div className={style.list}> More mindful of eachothers' work styles. </div>
                    </div>
                    <div className={style.box}>
                      <ImageLoader filename="GCal/prior.png" className={style.HimageXS}/>
                      <div className={style.list}> Cognizant of others'priorities. </div>
                    </div>
                </div> 
            </div>  
        </div>

    </Layout>
  )
}