import React from "react";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import style from "./page.module.css"


/*template for each portfolio page
* every page includes title, date, and description of work
*/

export default ({data}) => {
  let post = data.markdownRemark
  return (
    <Layout>
    <div >
      <p className={style.title}> {post.frontmatter.title} </p>
      <p className={style.date}> {post.frontmatter.date} </p>
      <p className={style.team}> {post.frontmatter.team} </p>
      <p className={style.description}> {post.frontmatter.desc} </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
    </Layout>
  );
};


export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date 
        desc
      }
    }
  }
`;

