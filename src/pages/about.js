// import React from 'react'
// import { useStaticQuery, graphql } from "gatsby"
// import Layout from '../components/layout'
// import Styles from './about.module.css'
// import Img from "gatsby-image"



//  const About = () => (
//   	<Layout> 
// 		<div id="main-content2" >  
// 		    <h1 className={Styles.hello}>Hello! - <br></br> I'm Elena.</h1>
// 		    <h2 className={Styles.introduction}> 
//             I am an Industrial Designer originally from Tokyo, Japan.  
//             <br></br><br></br>
          
//             I remember the thrill of my first design project. “So, I can make this hand mixer look like whatever I want?!”
//             The challenge, of course, was understanding the set of constraints that I had to design around. I still approach 
//             my projects with the same excitement, ready to solve the next puzzle. 
//             <br></br><br></br>
//             My interest in UX/UI really began with my fascination with how to create a powerful experience through a 5-inch screen that can impact the daily life of a user. 
//             A designer must think about each transition, flow and visual aspect of an interface.   
 
//             <br></br><br></br>
//             As technology evolves, so will design. I often ask myself, “What would UIUX look like if screens are no longer the main sources of information?” 
//             Smart design is about solving problems for users and those problems will most likely be different in the decade ahead.

//             <br></br><br></br>
//             As a result, I’m always searching for new design sensibilities and  tools that I can use in my work. For the past two years, I’ve been taking computer science classes at Brown University, 
//             which has helped me widen my design language. Oddly enough, sometimes I feel the most inspired when I take myself out of the design bubble.  
//             My journey as a designer is just beginning, but I’m excited by the possibilities ahead!

//                 </h2>
//             <h2 className={Styles.introduction}>  </h2>
// 		</div>
//  	</Layout>
// )

// export default About


import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Styles from "./about.module.css"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query aboutQuery {
      file(relativePath: { eq: "pages/about/elenapic1.jpg" }) {
        childImageSharp {

          # Specify the image processing specifications right in the query.
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Layout>
    <div className={Styles.pic}>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt="A corgi smiling happily"
      />
    </div>
    <h1 className={Styles.hello}>Hello! - <br></br> I'm Elena.</h1>
      <h2 className={Styles.introduction}> 
        I am an Industrial Designer originally from Tokyo, Japan.  
            <br></br><br></br>
        I remember the thrill of my first design project. “So, I can make this hand mixer look like whatever I want?!”
        The challenge, of course, was understanding the set of constraints that I had to design around. I still approach 
        my projects with the same excitement, ready to solve the next puzzle. 
            <br></br><br></br>
        My interest in UX/UI really began with my fascination with how to create a powerful experience through a 5-inch screen that can impact the daily life of a user. 
        A designer must think about each transition, flow and visual aspect of an interface.   
            <br></br><br></br>
        As technology evolves, so will design. I often ask myself, “What would UIUX look like if screens are no longer the main sources of information?” 
        Smart design is about solving problems for users and those problems will most likely be different in the decade ahead.
            <br></br><br></br>
        As a result, I’m always searching for new design sensibilities and  tools that I can use in my work. For the past two years, I’ve been taking computer science classes at Brown University, 
        which has helped me widen my design language. Oddly enough, sometimes I feel the most inspired when I take myself out of the design bubble.  
        My journey as a designer is just beginning, but I’m excited by the possibilities ahead!
      </h2>
    </Layout>
  )
}