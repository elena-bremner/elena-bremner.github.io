import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/**
* This page contains the static query that loads all images in this project 
under the pages directory.  
* This allows easy image access by file name "<ImageLoader filename="name.png"/>"
**/
const ImageLoader = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile (
          filter: {
            extension: { regex: "/(jpg)|(png)|(jpeg)s/" }
            relativeDirectory: { regex: "pages/" }
          }
        ){
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 800, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find(n => {
        console.log("filename = " + props.filename);
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) { return null; }
      
      return (
        <Img
          fluid={image.node.childImageSharp.fluid}
          className={props.className}
        />
      );
    }}
  />
)

export default ImageLoader