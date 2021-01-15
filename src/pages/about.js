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
          # width is giving error sometimes (gatsby bug)
          # fixed (width:350) {
          #   ...GatsbyImageSharpFixed
          # }
          fluid(maxWidth: 915, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className={Styles.hello}><br></br></div>
      <div className={Styles.pic}>
        <Img 
          fluid={data.file.childImageSharp.fluid}
          // fixed={data.file.childImageSharp.fixed}
          alt="Elena's pic"
        />
      </div>
      <div className={Styles.name}>
      Hi there,
      </div>
      <div className={Styles.introduction}> 
        I am an Industrial designer originally from Tokyo, Japan.  
            <br></br><br></br>
        I remember the thrill of my first design project. “So, I can make this hand mixer look like whatever I want?!”
        The challenge, of course, was understanding the set of constraints that I had to design around. I still approach 
        my projects with the same excitement, ready to solve the next puzzle. 
            <br></br><br></br>
        My interest in UX/UI really began with my fascination with how to create a powerful experience through a 5-inch screen that can impact the daily life of a user. 
        A designer must think about each transition, flow and visual aspect of an interface.   
            <br></br><br></br>
        As technology evolves, so will design. I often ask myself, “What would UX/UI look like if screens are no longer the main sources of information?” 
        Smart design is about solving problems for users and those problems will most likely be different in the decade ahead.
            <br></br><br></br>
        As a result, I’m always searching for new design sensibilities and  tools that I can use in my work. For the past two years, I’ve been taking computer science classes at Brown University, 
        which has helped me widen my design language. 
        My journey as a designer is just beginning, but I’m excited by the possibilities ahead!
         <br></br><br></br><br></br>
        <b>This website is coded by Elena. <br></br><br></br> I'm still learning! so, please let me know of any improvements I can make!</b>
      </div>
    </Layout>
  )
}