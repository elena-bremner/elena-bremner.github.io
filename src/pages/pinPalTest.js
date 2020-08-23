import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Styles from "./pinPal.module.css"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ImageLoader from "../components/imageLoader"

export default () => {
  return (
    <Layout>
      <div>
        <span className={Styles.test}> hello </span>
        <ImageLoader filename="pinPal/1.png" className={Styles.imageTest}/>
        <ImageLoader filename="pinPal/2.png" className={Styles.imageTest}/>
        <ImageLoader filename="pinPal/bank.png"/>
        <b>Intro: </b> 
        When you look around the streets, most people have their faces buried in their smartphone screens oblivous to the rich 
        possibilities in their own neighborhood.
        My teammates and I designed an app to help explore their personal geography, a way to pin the shops, locales and spots with personal meaning in their community. 
        What if you could knock your screen to pin your location 
        using GPS?
      </div>
    </Layout>
  )
}