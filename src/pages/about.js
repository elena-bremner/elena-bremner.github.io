import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Styles from "./about.module.css"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query aboutQuery {
      file(relativePath: { eq: "pages/about/elena.jpg" }) {
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
    <div className={Styles.margin}>
      <div className={Styles.grid} >
          <div className={Styles.pic}>
            <Img 
              fluid={data.file.childImageSharp.fluid}
              // fixed={data.file.childImageSharp.fixed}
              alt="Elena's pic"/>
          </div>
          <div className={Styles.wrapper}>
              <div className={Styles.name}>
              Hi there,  ✿ 
              </div>
              <div className={Styles.introduction}> 
              <div className={Styles.oneliner}> I'm a product designer originally from Tokyo, Japan. </div>  
                    <br></br>
                Good design is about solving problems for users in creative and effective ways. As technology evolves, so do the design challenges. 
                <br></br>
                What will UX/UI design look like if screens are no longer the main interface for sharing information? 
                    <br></br><br></br>

                 <div> Hobbies include making motion designs on Blender and watching oscar reaction videos. I climbed Mt. Fuji once. Will never do it twice!</div>
                  <br></br>
                <div className={Styles.school} >Rhode Island School of Design 21' </div>
                <div className={Styles.school} > Kleiner Perkins Design Fellow 21' </div>
                  <br></br>
                <div className={Styles.note}>This website is coded by Elena.</div>
              </div>
          </div>

      </div>
    </div>
    </Layout>
  )
}