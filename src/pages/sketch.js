import React from "react"
import Work from "../components/work"
import Styles from "./sketch.module.css"
import Layout from "../components/layout"
import { graphql } from "gatsby"

/* this page is what you see in the UX page 
* including name image and link to each page
*/
export default ({data}) => (
  <Layout>
  <div className={Styles.intro}>
    <p> Explorations </p>
  </div>

  <div className={Styles.wrapper}> 
  {data.allMarkdownRemark.edges.map(({ node }) =>
      <div key={node.id} className={Styles.subwrapper}>
        <Work
          name={node.frontmatter.title}
          picture= {node.frontmatter.square.childImageSharp.fluid}
          link={"/work" + node.fields.slug}
        />
      </div>
    )}
 </div>
 </Layout>

)

export const query = graphql`
  query SQuery {
          allMarkdownRemark (sort: { fields: [frontmatter___order], order: ASC }, filter: {frontmatter: { worktype: {eq: "sketch"} } } ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            square{
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            worktype
            title
      
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