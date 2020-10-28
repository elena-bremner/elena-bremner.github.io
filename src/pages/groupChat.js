import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./groupChat.module.css"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ImageLoader from "../components/imageLoader"
import FruitBasket from "./groupChat/FruitBasket.mp4"
import buddy from "./groupChat/buddy.mp4"
import cancel from "./groupChat/cancel.mp4"
import Header from "../components/header";



export default () => {
  return (
    <Layout>
        <Header
          name  = {"Google Design Challenge"}
          date  = {"January 2020 (1 WEEK)"}
          number  = {"Personal Project"}
          oneliner  = {"Connecting experienced and new students through extracurriculars"}
        />
        < ImageLoader filename="GroupChat/introImg.png"className={style.introImage} />
        <div className={style.section}> Intro </div>
        <div className={style.intro}> 

            I completed this project as a 1 week design challenge. The goal was to 
            strengthen the school community by encouraging experienced students to connect 
            with new students and help them adjust to campus life. 
            <br></br><br></br> 
            I researched and interviewed for the best way to connect students in a campus 
            environment with the presence of intimidation and hierarchy. 
            I created a mobile platform focusing on creating new connections 
            through hosting and attending extracurricular events. 
            <br></br><br></br> 
            Click <a> here </a> to jump to my process. 

        </div>
        <div className={style.section}> The Idea </div> 
         <p className={style.paragraph}> 

          <a>Groupchat </a> allows students across campus to host and attend “adventures.” 
          The host will set the activity, date, location, and the number of attendees. 
          Instead of a guest list, the events will be on a first come first served basis, 
          diversifying users’ social circles. 
          <br></br><br></br> 
          Not only will students be able to share common interests, 
          they will also be able to intermingle with students across all grades and majors. 

         </p>
         < ImageLoader filename="GroupChat/prop.png"className={style.HimageXS} />
        <div className={style.subtitle}> Fruit Basket </div>
         <p className={style.paragraph}> 

          Users will only be able to view the guest list after they have joined 
          the adventure to allow integration with users from other grades and majors.
          <br></br><br></br> 
          They will be added to the group chat along with other guests attending the 
          event, where they can discuss any further plans on the adventure.

         </p>
        <video controls autoplay loop className={style.FDVid}>
                <source src={FruitBasket} type="video/mp4" />
        </video>
         <div className={style.subtitle}> Buddy System </div>
         <p className={style.paragraph}> 

          Joining a group of new people may be unnerving for students, 
          especially those who are introverted. The sharing feature allow students 
          to share and invite a friend to the adventure to mitigate some of the intimidation.

         </p>
        <video controls autoplay loop className={style.FDVid}>
                <source src={buddy} type="video/mp4" />
        </video>
          <div className={style.subtitle}> Accountability </div>
          <p className={style.paragraph}> 

           We want people to be mindful when joining the adventures. Therefore, 
           when there is less than 3 hours to the start of an event, users must 
           message the hosts to be removed from the adventure. With 3 hour canceling 
           limits, it advises users to have more accountability when adding the event 
           to their schedule. 

         </p>
          <video controls autoplay loop className={style.FDVid}>
                <source src={cancel} type="video/mp4" />
        </video>
        <div className={style.section}> Research </div>
        <div className={style.subtitle}> Interviews </div>
        <p className={style.paragraph}> 
          I interviewed students across different grades and majors to hear about how the 
          initially adjusted to college life. I paid close attention to international and 
          transfer students to see how their stories differed. 
          <br></br> 
          My questions were less mentor/mentee focused and centered around how students 
          build relationships. 
        </p>
        < ImageLoader filename="GroupChat/interview.jpg"className={style.Himage} />
        < ImageLoader filename="GroupChat/questions.png"className={style.Himage} />
        <div className={style.subtitle}> Key Insights </div>
        <p className={style.paragraph}> 
              1.  <a> Proximity and consistency </a> is 
              a big factor of building and maintaining relationships. New students 
              tend to me more intimidated to talk to older students. <a>They need an avenue 
              or excuse to reach out to older students. </a> 
              <br></br><br></br> 
              2.  Experienced students are willing to share and talk to new students. 
              At the same time, <a>they do not want the experience to interrupt their 
              tight schedules.</a> 
              <br></br><br></br> 
              3.  All students expressed that it is difficult to allocate time to reach out 
              and meet new people. 
        </p>
        <div className={style.subtitle}> Opportunity </div>
        <p className={style.paragraph}> 
          With their busy schedules, ambitious students find it difficult to connect 
          with people outside of one's major or class. <a>While a university campus is 
          mainly a place for academics, social interaction and networking are also vital to 
          a student’s personal growth and broader education. </a> For instance, mentor/mentee 
          programs are a great way for students to build leadership skills as well as learn 
          from the first-hand experiences of others.
          <br></br><br></br> 
          However, first-year or transfer students tend to feel more intimidated about 
          reaching out to older students without an excuse or an obvious opportunity. 
          Many older students, meanwhile, are willing to connect if it does not interrupt 
          their busy schedules.         
          <br></br> <br></br> 
          <a>The objective is to create an environment where students have the opportunity to 
          connect through shared extracurricular activities. </a> Based on my research, students 
          are more likely to carve out time in their schedule if it helps them academically. 
        </p>
        <div className={style.section}> Hunch </div>
        <p className={style.paragraph}> 
            My research suggests that interaction and experience is the best way to build a relationship. 
            Therefore, I sought to create an experience where students can do just that. 
            <br></br> <br></br> 
            People will host or attend adventures and join a group of students with shared interests.
            The design enables people to discover new activities and events while building new 
            friendships along the way. 
            <br></br> <br></br> 
            Groupchat gives students the opportunity to talk to others 
            outside of their grades and majors.        
            <br></br> 
        </p>
        <div className={style.subtitle}> Target Users </div>
          < ImageLoader filename="GroupChat/users.png"className={style.Himage} />
        <div className={style.subtitle}> Sketching </div>
        <p className={style.paragraph}> 
            My Ideation process usually starts off on paper. It allows me to quickly get 
            my ideas down on paper. At this stage, I don’t restrict my design to practicality 
            or feasibility. I then can assess and create wireframes to test and listen to user 
            feedback. 
        </p>
          < ImageLoader filename="GroupChat/sketch.png"className={style.HimageS} />
        <div className={style.subtitle}> Wireflows </div>
          < ImageLoader filename="GroupChat/wireFlow.png"className={style.Himage} />
        <div className={style.subtitle}> Guerilla Testing </div>
        <p className={style.paragraph}> 
          I began user-testing on students by contextualizing the project. 
          The participants went through the process of using the app with paper wireframes. 
          I gained new perspectives on how gender and age plays a role in the inclination of 
          reaching out to others. For instance, a 20 year old male student felt uncomfortable 
          reaching out to girls in the fear of being too assertive. This was something I needed 
          to keep in mind for the final design.  
        </p>
        < ImageLoader filename="GroupChat/roy.jpg"className={style.HimageS} />
        <div className={style.subtitle}> Iterations </div>
         < ImageLoader filename="GroupChat/iterations.png"className={style.Himage} />
    </Layout>
  )
}