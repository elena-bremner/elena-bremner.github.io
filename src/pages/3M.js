import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import style from "./3M.module.css"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ImageLoader from "../components/imageLoader"
import Header from "../components/header";


export default () => {
  return (
    <Layout>
        <Header
          imageLoader = {<ImageLoader filename="3M/back.png"/>}
          name  = {"3M Internship"}
          date  = {"June 2019 (1 MONTH)"}
          number  = {"Internship"}
          role  = {"Designer"}
          p1 = {"During the summer of 2019, I served as a design intern at 3M Japan, where I researched and explored several of the company's advanced materials including DI-NOC films. Exploring the relationship between textures and patterns, I helped create new implementations and designs of their materials."}
        />

    </Layout>
  )
}