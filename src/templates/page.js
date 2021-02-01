import React from "react";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header";
// import { Link } from "gatsby"



/*template for each portfolio page
* every page includes title, date, and description of work
*/
 /* displaying in each md file */
    // <div className={style.markedownWrapper}>
    //   <div className={style.title}> {post.frontmatter.title} </div>
    //   <div className={style.date}> {post.frontmatter.date} </div>
    //   <div className={style.team}> {post.frontmatter.team} </div>
    //   <div className={style.description}> {post.frontmatter.desc} </div>
    //   <div dangerouslySetInnerHTML={{ __html: post.html }} />
    // </div>
export default ({data}) => {
  let post = data.markdownRemark
  return (
    <Layout>

     <Header 
          name  = {post.frontmatter.title}
          date  = {post.frontmatter.date}
          number  = {post.frontmatter.team}


      />
       <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
        team
      }
    }
  }
`;

