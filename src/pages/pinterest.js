import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./GCal.module.css"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ImageLoader from "../components/imageLoader"
import Header from "../components/header";

// <ImageLoader filename="GCal/icon.png" className={style.HimageXS}/>

export default () => {
  return (
    <Layout>
        <Header
          imageLoader = {< ImageLoader filename="pinterest/introImage.png"/>}
          name  = {"Pinterest Redesign"}
          date  = {"October 2020 (1 week )"}
          number  = {"Design Challenge"}
          oneliner  = {""}
          role  = {"UX/UI, User-Testing, Visual Design"}
          p1 = {"Pinterest has had an immense impact on my design process, particularly when I'm seeking creative inspiration. It’s an awesome portal for visual discovery of all sorts of things that make life interesting. So it is with a sense of deep admiration for the company’s design practices that I take up this challenge. In my redesign proposal, I sought to declutter the overall interface and put a greater emphasis on expediting the discovery process of the Pinterest home page."}
        />
        <div className={style.margin}>
        </div>




    </Layout>
  )
}