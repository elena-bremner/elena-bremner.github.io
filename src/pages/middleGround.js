import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ImageLoader from "../components/imageLoader"
import Header from "../components/header";
import style from "./featured-styles.module.css"
import onb from "./middleGround/onboarding.mp4"
import made4u from "./middleGround/home_madeForU.mp4"
import join from "./middleGround/home_joinDisc.mp4"
import weekly from "./middleGround/movements_weeklyConvo.mp4"
import pitch from "./middleGround/3minpres.mp4"




export default () => {
  return (
    <Layout>
        <Header
            imageLoader = {<ImageLoader filename="middleGround/hero.jpg" />}
            name  = {"Adobe X Twitch Creative Jam"}
            date  = {"March 2021 (1 week)"}
            number  = {"Amber Li and Elena Bremner (me)"}
            role  = {"UX/UI - Presenter - User Researcher "}
            p1 = {"In April of 2021, our team participated and placed second out of 400+ teams in Adobe’s creative jam sponsored by Twitch. The brief was to create a web app that enables communities to help each other connect the dots between multiple sources"}
        />

            <div className={style.margin2}>
                <div className={style.wrap}>
                    <div className = {style.h6}> Overview </div>
                    <div className = {style.line}> </div>
                </div>
                <div className={style.paragraph}> 
                  The adobe creative jam is an event where students create solutions to a challenge proposed by Adobe. Creative solutions are judged and reviewed by a panel by experts in the field. In this case our design was scored by one Adobe designer and two twitch designers. 
                </div>

                <div className={style.colorBackground}>
                  <div className={style.section}> 
                      Problem 
                  </div>
                  <div className={style.oneliner}> 
                    We live in a world of hyper-partisan politics and information bubbles.   
                  </div> 
                  <div className={style.paragraph}> 
                    Individuals want to participate and act...but some don’t know how exactly. Out of the 50 participants that answered our survey questions, 84% answered that they would want to be more involved in social justice movements. 65% of our participants are currently informed of social justice news on either Facebook, Instagram, or Twitter. Social platforms as such make it more accessible for people to learn more about current social issues. However, the information is scattered and the Filter Bubbles limit political diversity within the platform. 
                  </div>
                </div>



                <div className={style.colorBackground}>
                  <div className={style.section}> 
                      Opportunity 
                  </div>
                  <div className={style.oneliner}> 
                    What’s needed are nuanced views and reliable information when it comes to social issues that matter.   
                  </div> 
                  <div className={style.paragraph}> 
                    In our user-interviews, 88% of our  participants said that they want to be more active about social justice issues. According to an Oxford study, Instagram is the most used social network app among people under 35 years old. Features like instagram stories and multiple photos provide concise and snack-able content. However,  55% of U.S. social media users say they are ‘worn out’ when they are met with political posts and discussions when they use the app mainly for entertainment. 
                  </div> 
                </div>

                <div className={style.colorBackground}>
                  <div className={style.section}> 
                      Goal 
                  </div>
                  <div className={style.oneliner}> 
                      The primary goal is to embolden individuals to take socially-meaningful actions.</div> 
                  <div className={style.paragraph}> 
                    Middle Ground is platform that empowers users to take action in the social justice movements. Centered around mitigating information bubbles and personal curated information on how they can make an impact, it offers an all in one hub for people who are passionate about making a change. 
                  </div> 
                </div>
          </div>

          <div className={style.test}>
          <div className={style.margin}> 
            {/* MAIN FEATURES */}

            <div className={style.wrap}>
                <div className = {style.h6White}> Main features </div>
                <div className = {style.lineWhite}> </div>
            </div>

            {/* ONBOARDING GRID */}

            <div className={style.grid31} >
                <video controls autoplay loop className={style.HimageM}>
                    <source src={onb} type="video/mp4"/>
                </video>
                <div className={style.descWrapper}>
                    <div className = {style.headerWhite}> Onboarding </div>
                    <div className={style.descWhite} >
                      The onboarding process prompts Middle Ground users to answer questions and select movement they may be interested in to help us better curate the app.         
                    </div> 
                </div> 
            </div>

            {/* MADEFORU GRID */}
            <div className={style.grid13} >
                <div className={style.descWrapper}>
                    <div className = {style.sectionWhite}> Home </div>
                    <div className = {style.headerWhite}> Made for you </div>
                    <div className={style.descWhite} >
                      Users can click through the cards to learn more about a given topic. These are also shareable on social media platforms to spread the information.          
                    </div> 
                </div> 
                <video controls autoplay loop className={style.HimageM}>
                  <source src={made4u} type="video/mp4"/>
                </video>
            </div>
            

            {/* NUTSHELL GRID */}
            <div className={style.grid31}>
                <ImageLoader filename="middleGround/home_nutshell.jpg"className={style.HimageM}/>
                <div className={style.descWrapper}>
                    <div className = {style.sectionWhite}> Home </div>
                    <div className = {style.headerWhite}> Nutshell </div>
                    <div className={style.descWhite} >
                      High-level view of movements that were active during the week.   
                    </div> 
                </div> 
            </div>

            {/* JOIN CONVO GRID */}
            <div className={style.grid13} >
                <div className={style.descWrapper}>
                    <div className = {style.sectionWhite}> Home </div>
                    <div className = {style.headerWhite}> Join the discussion</div>
                    <div className={style.descWhite} >
                      Users can read and share personal anecdotes by answering selected daily prompts.           
                    </div> 
                </div> 
                <video controls autoplay loop className={style.HimageM}>
                  <source src={join} type="video/mp4"/>
                </video>
            </div>

            {/* MOVEMENTS GRID */}
            <div className={style.grid31}>
                <video controls autoplay loop className={style.HimageM}>
                  <source src={weekly} type="video/mp4"/>
                </video>
                <div className={style.descWrapper}>
                    <div className = {style.sectionWhite}> Movements Page </div>
                    <div className = {style.headerWhite}> Week's Conversation</div>
                    <div className={style.descWhite} >
                      Weekly discussions between two experts on opposing sides of a movement having a conversation to find a middle ground.            
                    </div> 
                </div> 
            </div>
          </div>
        </div>
           
        <div className={style.margin2}>
            {/* PROCESS*/}
            <div className={style.wrap}>
                <div className = {style.h6}> Process </div>
                <div className = {style.line}> </div>
            </div>

            <div className = {style.section}> Information Architecture  </div>
            <ImageLoader filename="middleGround/infoArch.png"/>
            <div className = {style.section}> User Research  </div>
            <div className = {style.header}> Insights  </div>
            <div className = {style.insightTextWrapper}>
                <div className = {style.caption}> Scattered thoughts about social justice posts on social media platforms.</div>
                <div className = {style.subCaption} > While some think it's performative, others feel inspired to get more involed. </div>
                <ul>
                  <li className = {style.quote}> “It’s good for spreading awareness, but it's easy to just see it as performative.” -Rachel</li>
                  <li className = {style.quote}> “They have taught me so much but I wish people would cite their sources more and there was a better way to get more involved than petitions” -Andrew </li>
                </ul>
            </div>
            <div className = {style.insightTextWrapper}>
                <div className = {style.caption}> Young people prefer videos and infographics compared to other media (text, images, etc).</div>
                <div className = {style.subCaption} > 64% of participants prefered infographics and videos to learn more about social movements. </div>
            </div>

      
            <div className = {style.header}> Painpoints  </div>
            <ol>
                <li> Many want to be more active in social justice. But the information on activism is scattered.</li>
                <li> Some like how easily consumable educational information about activism on instagram stories are. However, they don't feel like instagram is the right place.  </li>
                <li> Information is in a bubble. </li>
            </ol>
            <div className={style.wrap}>
                <div className = {style.h6}> End Note </div>
                <div className = {style.line}> </div>
            </div>
            <ImageLoader filename="middleGround/second.png"/>
            <div className = {style.section}> Pitch </div>
            <div className = {style.vidWrapper}>
                <video controls autoplay loop className={style.HimageM}>
                    <source src={pitch} type="video/mp4"/>
                </video>
            </div>
            <div className = {style.section}> Feedback </div>
              <div className = {style.grid3}>
                <div>
                    <div className = {style.name}> Handel </div> 
                    <div className = {style.role}>Social Media Manager at Twitch </div>
                    <ImageLoader filename="middleGround/Handel"/>
                    <div className = {style.quote}>
                        “The UX is bold and clearly designed. Something that can be 
                        improved would be more guidance since there are a lot of features.”
                    </div>
                </div>
                <div>
                    <div className = {style.name}>Anthony</div> 
                    <div className = {style.role}> Senior social media manager at Twitch</div>
                    <ImageLoader filename="middleGround/Anthony"/>
                    <div className = {style.quote}>
                        “I kinda felt overwhelmed with the UI, there is a lot of information 
                        to go through. However, the design is feature-rich and extremely 
                        focused on the audience that will expect a wider community conversation.”
                    </div>
                </div>
                <div>
                    <div className = {style.name}>Lars</div> 
                    <div className = {style.role}> Lead designer at Adobe </div>
                    <ImageLoader filename="middleGround/Lars"/>
                    <div className = {style.quote}> 
                        “The visuals are super high-impact. Consider reducing 
                        the amount of donate buttons, as it may be overwhelming”
                    </div>
                </div>
              </div>

            <div className = {style.section}> Reflection </div>
            <div className={style.paragraphWrapper}>
                <div className={style.paragraph}> 

                     While many of the judges found our feature-rich design was 
                     intriguing and impactful, I fear that may have been one of our drawbacks. 
                     As this was a one-week sprint, we tried to check off as many solutions to 
                     the opportunities we’ve found in our research. In hindsight, the feature-rich 
                     aspects of the design may have overwhelmed the user given that this is an educational 
                     platform. Another approach would have been to focus on a few ideas and allow 
                     users to explore and learn in a more mindful manner. 

                     <br></br><br></br>

                     Overall, this marathon-type experience was a great learning opportunity. 
                     I am extremely grateful to have worked alongside an amazing designer 
                     like <a href="https://www.amber-li.com/" target="_blank">Amber</a> and we were completely dumbfounded when we were notified that 
                     we had placed second out of over 400 teams. As I begin my professional UX design practice, I hope to 
                     bring the best features of a design sprint into my work. 
                </div> 
            </div>
         
        </div>


    </Layout>
  )
}
