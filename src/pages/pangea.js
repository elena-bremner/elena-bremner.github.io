import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ImageLoader from "../components/imageLoader"
import Header from "../components/header";
import style from "./featured-styles.module.css"



export default () => {
  return (
    <Layout>
        <Header
            imageLoader = {<ImageLoader filename="pangea/hero.jpg" />}
            name  = {"Pangea.app"}
            date  = {"January 2021 (3 months)"}
            number  = {"Startup Experience"}
            role  = {"UX Designer"}
            p1 = {"Pangea.app is a platform that connects students to startups through paid freelance work. I joined in as a UX design intern earlier this year while they were going through Y-Combinator. "}
            p2 = {"Please contact me to learn more about what I worked on!"}
        />

    <div className={style.margin}>
      <div className={style.paragraph}>
          You can check out the platform <a href="https://pangea.app/home" target="_blank">here.</a>
      </div>
    </div>

    </Layout>
  )
}
