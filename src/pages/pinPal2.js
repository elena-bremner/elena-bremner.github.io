import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Styles from "./pinPal2.module.css"
import Img from "gatsby-image"


export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "pages/pinPal2/arduino.jpg"  }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            
            ...GatsbyImageSharpFluid

          }
        }
      }
    }
  `)
  return (
    <Layout>
    <div>
        <h1 className={Styles.title}>More background</h1>
        <h1 className={Styles.test}>
            We started with a concept that focuses on creating a responsive 
            human body interface to bridge the digital activity of the user in the passive space and physical body. 
            Utilizing touch sensing technology and basic Arduino prototyping, we were able to simply visualize the 
            digital interface and have it manipulated by the gestures. The product will be a band formed wearable 
            piece with a minimum LED light reminder that allows the user to operate their mobile device without 
            having them out or in the pocket.
        </h1>

    </div>
    </Layout>
  )
}
