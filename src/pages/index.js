import React from "react"
import Work from "../components/work"
import Styles from "./index.module.css"
import Layout from "../components/layout"
import { graphql } from "gatsby"

/* this page is what you see in the home page 
* including name image and link to each page
*/
export default ({data}) => (
  <Layout>

  <div className={Styles.intro}>
    <p> Welcome!I'm Elena. </p>
    I am currently studying industrial design with a concentration in computation at RISD. 
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


export const query = graphql`
  query IndexQuery {
    allMarkdownRemark (sort: { fields: [frontmatter___order], order: ASC }) {
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

