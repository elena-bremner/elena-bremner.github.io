import React from "react"
import Work from "../components/work"
import Styles from "./index.module.css"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

/* this page is what you see in the home page 
* including name image and link to each page
*/
export default ({data}) => {
  var current_date = new Date()
  var cday = current_date.getDay()
  var weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday",
                    "Thursday", "Friday", "Saturday");
  return (
  <Layout>

  <div className={Styles.intro}>
    <p>Happy {weekday[cday]}!
    I'm Elena   </p>
   I study <a className = {Styles.mark}> industrial design </a> with a concentration in computation at the <a className = {Styles.mark}> Rhode Island School of Design</a> (RISD). 

  </div>
  
<div className={Styles.wrapper}> 
  {data.allMarkdownRemark.edges.map(({ node }) =>
      <div key={node.id} className={Styles.subwrapper}>
        <Work
          name={node.frontmatter.title}
          picture= {node.frontmatter.square.childImageSharp.fluid}
          link={"work" + node.fields.slug}
        />
      </div>
    )}
 </div>

 
 </Layout>
)
}


export const query = graphql`
  query IndexQuery {
    allMarkdownRemark (sort: { fields: [frontmatter___order], order: ASC }, filter: {frontmatter: { content: {eq: "index"} } } ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            square{
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            content
            order
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;



