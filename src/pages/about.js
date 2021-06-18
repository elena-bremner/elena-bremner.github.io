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
    <div className={Styles.margin}>
      <div className={Styles.grid} >
          <div className={Styles.pic}>
            <Img 
              fluid={data.file.childImageSharp.fluid}
              // fixed={data.file.childImageSharp.fixed}
              alt="Elena's pic"/>
          </div>
          <div>
              <div className={Styles.name}>
              Hi there,
              </div>
              <div className={Styles.introduction}> 
              <div className={Styles.oneliner}> Product designer originally from Tokyo, Japan. </div>  
                    <br></br>
                Motivated to design experiences for users that outlive digital screens. As technology evolves, 
                so will design. I often ask myself, “What would UX/UI look like if screens are no longer the main 
                sources of information?” 
                <br></br>
                Good design is about solving problems for users and those problems will most 
                likely be different in the decade ahead.
                    <br></br><br></br>
                <div>Rhode Island School of Design 21'</div>
                <br></br>
                <b>This website is coded by Elena.</b>
              </div>
          </div>

      </div>
    </div>
    </Layout>
  )
}