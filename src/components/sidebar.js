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
  color: "#70FFCE",  //5AC3FF
}


const Sidebar = props =>
  <div>

    <h className={style.ElenaBremner}>
        Elena Bremner 
    </h>
    <h className={style.shift}>
        <a className = {style.work}>
     
          <Link to="/"  style={linkStyle} activeStyle={linkActiveStyle} >
            Work
          </Link>
          <Link to="/UX/" className={style.optionalWork} style={linkStyle} activeStyle={linkActiveStyle}>
            UX/UI
          </Link>
          <Link to="/physical/" className={style.optionalWork} style={linkStyle} activeStyle={linkActiveStyle}>
            Physical 
          </Link>
          <Link to="/sketch/" className={style.optionalWork} style={linkStyle} activeStyle={linkActiveStyle}>
            Explorations
          </Link>
        </a>
        <Link className = {style.work} to="/about/" style={linkStyle} activeStyle={linkActiveStyle}>
            About me
        </Link>
      <a className = {style.work} href={resume} style={linkStyle}>Resume</a>
    </h>
  </div>



export default Sidebar
      // <div>
      //     <ImageLoader filename="pinPal/ElenaBremnerBold.png" className={style.ElenaBremner}/>
      // </div>
    // <div className={style.contact}>
    //   ebremner@risd.edu
    // </div>