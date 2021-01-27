import React from "react";
import style from "./sidebar.module.css";
import { Link } from "gatsby"
import resume from './resume.pdf'
import ImageLoader from "../components/imageLoader"



const linkStyle = {
  color: 'black',
  textDecoration: 'none',
}
const linkActiveStyle = {
  color: "gray",  //70FFCE
}


const Sidebar = props =>
  <table>
    <h className={style.shift} >
        <span className = {style.work}>
        <th>
          <Link to="/UX/" className={style.optionalWork} style={linkStyle} activeStyle={linkActiveStyle}>
            UX/UI
          </Link>
        </th>
        <th>
          <Link to="/physical/" className={style.optionalWork} style={linkStyle} activeStyle={linkActiveStyle}>
            PRODUCTS 
          </Link>
        </th>
        <th>
          <Link to="/sketch/" className={style.optionalWork} style={linkStyle} activeStyle={linkActiveStyle}>
            PLAY
          </Link>
        </th>
        <th>
          <Link to="/"  style={linkStyle} activeStyle={linkActiveStyle} >
            WORK
          </Link>
        </th>
        </span>
        <Link className = {style.work} to="/about/" style={linkStyle} activeStyle={linkActiveStyle}>
            ME
        </Link>
      <a className = {style.work} href={resume} style={linkStyle}>RESUME</a>
    </h>
  </table>



export default Sidebar


    /*
    <h className={style.ElenaBremner}>
        Elena Bremner 
    </h>
*/