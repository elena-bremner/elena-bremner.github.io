import React from "react"
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
          imageLoader = {< ImageLoader filename="pinterest/background2.png"/>}
          name  = {"Pinterest Redesign"}
          date  = {"October 2020 (1 week )"}
          number  = {"Kleiner Perkins Design Challenge (Finalist)"}
          oneliner  = {""}
          role  = {"UX/UI, Visual Design"}
          p1 = {"Pinterest has had an immense impact on my design process, particularly when I'm seeking creative inspiration. It’s an awesome portal for visual discovery of all sorts of things that make life interesting. So it is with a sense of deep admiration for the company’s design practices that I take up this challenge. In my redesign proposal, I sought to declutter the overall interface and put a greater emphasis on expediting the discovery process of the Pinterest home page."}
        />
        <div className={style.margin}>
        
            <div className={style.section}> Research </div>
            <div className={style.paragraph}> 
            <div className={style.subtitle}> Customer Reviews </div>
              To get a sense of what people like and dislike about the current platform, I studied rating and reviews.  
            </div>
                <div className={style.gridSquare}>
                    <ImageLoader filename="pinterest/review1.png" className={style.HimageS}/>
                    <ImageLoader filename="pinterest/review2.png" className={style.HimageS}/>
                    <ImageLoader filename="pinterest/review3.png" className={style.HimageS}/>
                    <ImageLoader filename="pinterest/review4.png" className={style.HimageS}/>
                </div> 
            <div className={style.subtitle}> Original Design </div>
            <div className={style.paragraph}> 
              To start off, I quickly identified and annotated possible improvement opportunities present in the current design. 
            </div>

            <ImageLoader filename="pinterest/old.png" className={style.Himage}/>
            <div className={style.section}> Brainstorming Phase </div>
            <div className={style.subtitle}> Opportunity 1: Home Page </div>
            <div className={style.paragraph}> 
                One of Pinterest’s design strengths is how it allows users to explore new information and be inspired through 
                links to related content. However, the current design is cluttered at times and does not allow users to make 
                discoveries in the most efficient way. 
            </div>
            <ol className={style.list}>
                <li> The changes in board setting slow down the users’ information discovery process and forces users to multi-task.</li>
                <li> There are three buttons that lead to the same weblink for the pin’s source. That is redundant. </li>
                <li> The burger menu is scattered inconsistently around the home page, creating a messy and confusing navigation.</li>
            </ol>
            <ImageLoader filename="pinterest/callouts.png" className={style.callout}/>
          
            <div className={style.subtitle}> Wireframes </div>
            <div className={style.paragraph}> 
              Creating wireframes allowed me to ideate and discover additional flaws in the current design. 
            </div>
            <ImageLoader filename="pinterest/wframe.png" className={style.HimageS}/>
            <div className={style.section}> Redesign </div>
            <div className={style.subtitle}> Home Page </div>
            <div className={style.paragraph}> 
              In the redesign, I simplified the page by creating a hierarchy and discarding any repetitive features that distract the users from finishing their task. 
            </div>
            <ImageLoader filename="pinterest/home.png" className={style.laptopShape}/>
            <div className={style.subtitle}> Changes to Expedite Discovery </div>
            <div className={style.grid2} >
                <div className={style.descWrapper} >
                    <div className={style.descHeadline}>
                          New Indicators
                    </div>
                    <div className={style.desc} >
                      Indicating  pins that are unrelated to your board is important to optimize discovery.
                      The eye icon indicates pins you have already seen before to limit unneeded revisits. 
                    </div>  
                </div>
                    <ImageLoader filename="pinterest/explore1.png" className={style.HimageS}/>
            </div>
            <div className={style.grid2}>
                <ImageLoader filename="pinterest/explore2.png" className={style.HimageS}/>
                <div className={style.descWrapper} >
                    <div className={style.descHeadline}>
                          Burger Relocation
                    </div>
                    <div className={style.desc} >
                        The burger is located to alert pins of any inappropriate content or broken links in the platform.
                    </div>
                </div>  
            </div> 
            <div className={style.subtitle}> Discourage Multi-Tasking </div>
            <div className={style.paragraph}> 
              In the current design, the drop-down board option changes based on Pinterest’s assumption of where the selected pin fits best with the users’ boards. This can often slow down the process when the assumption is flawed.
            </div>
            <div className={style.grid2}>
                  <ImageLoader filename="pinterest/current.png" className={style.current}/>
                  <div className={style.descWrapper} >
                      <div className={style.descHeadline}>
                        Current Design
                      </div>
                      <div className={style.desc}>
                          The drop-down option can distract users and make it difficult for them to focus on one board at a time. 
                      </div>
                  </div>  
            </div> 
              <div className={style.grid2}>
                  <div className={style.descWrapper} >
                      <div className={style.desc} >
                          <div className={style.descHeadline}>
                            Filtering With Intention
                          </div>
                        For a more intentional pinning process, the board setting is located at the top to streamline the activity. 
                      </div>  
                  </div>
                  <ImageLoader filename="pinterest/filter.png" className={style.descImage}/>
            </div> 
            <div className={style.subtitle}> Discovery </div>
            <div className={style.paragraph}> 
              Discovery through related content is what makes Pinterest so special. The inspired content feature allows users to quickly access potential pins to their boards. 
            </div>
            <div className={style.grid}>
                <ImageLoader filename="pinterest/discover.png" className={style.laptopShape}/>
                <div className={style.descWrapper2} >
                  <div className={style.descHeadline}>
                      Layout Changes
                  </div>
                  <div className={style.desc} >
                      When a user clicks on a pin, <b>inspired content</b> is located to the right instead of below, where it is less accessible. 
                  </div>
                </div>  
            </div>
                <div>
                    <div className={style.descHeadline}>
                      Current Design
                    </div>
                    <div className={style.desc}>
                      When a pin is selected, information on how another user pinned this board is displayed. This information is irrelevant to the user.
                    </div>
                </div>  
                <ImageLoader filename="pinterest/currentPinS.png" className={style.currentB}/>
                <div>
                    <div className={style.descHeadline}>
                      Related Boards
                    </div>
                    <div className={style.desc}>
                      Instead, other related boards should be linked and displayed for further exploration.
                    </div>
                </div>
                <ImageLoader filename="pinterest/pinS.png" className={style.laptopShape}/>
                <div>
                    <div className={style.subtitle}>
                      End Note
                    </div>
                    <div className={style.desc}>
                      Tools used include: Sketch, pen and paper. <br></br> Thank you for reading through. I would greatly appreciate any feedback. 
                    </div>
                </div>
                <ImageLoader filename="pinterest/sketch.png" className={style.laptopShape}/>
        </div>
    </Layout>
  )
}