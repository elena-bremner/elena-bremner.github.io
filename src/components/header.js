import React from 'react'
import style from './header.module.css'
import ImageLoader from "../components/imageLoader"
import Img from "gatsby-image"

const Header = props =>
<div> 
    <div className={style.title}> {props.name} </div>
    <div className={style.info}> {props.date}</div>
    <div className={style.info}> {props.number}</div>
        <br></br>
    <div className={style.oneliner}> {props.oneliner}</div>
        <br></br>
    
</div>

 

export default Header
