import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ImageLoader from "../components/imageLoader"
import Header from "../components/header";
import style from "./featured-styles.module.css"
import { Link } from "gatsby"



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

    <div className={style.margin2}>
      <div className={style.wrap}>
          <div className = {style.h6}> About the company </div>
          <div className = {style.line}> </div>
      </div>
      <br></br>
      <div className={style.paragraph}>
          Pangea provides a platform for smaller companies to hire talent. 
          Not everyone can afford unpaid interships. Since all jobs are paid on Pangea, 
          students can gain experience related to what they’re studying throughout the school year.
      </div>
      <br></br>
      <div className={style.paragraph}>
          You can check out the platform <a href="https://pangea.app/" target="_blank">here.</a>
      </div>
      
      {/* 
      <div className={style.wrap}>
          <div className = {style.h6}> My contribution </div>
          <div className = {style.line}> </div>
      </div>
      <div className={style.paragraph}>
          I worked as a UX designer on the team and helped build the features listed below. 
      </div>
      <ol className={style.list}>
        <li className = {style.quote}>  <Link to="#test">Forums</Link></li>
        <li className = {style.quote}> Post a Job </li>
        <li className = {style.quote}> <a href="#test"> Mobile & Web designs </a> </li>
      </ol>
      <div className={style.wrap}>
          <div className = {style.h6}> Features </div>
          <div className = {style.line}> </div>
      </div>
      <div className={style.paragraph} id="test">
        Forums
      </div> 
      */}



    </div>
    </Layout>
  )
}
