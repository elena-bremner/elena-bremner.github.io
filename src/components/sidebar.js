import React from "react";
import style from "./sidebar.module.css";
import { Link } from "gatsby"
import resume from './websiteResume.pdf'
import ImageLoader from "../components/imageLoader"


const linkStyle = {
  color: 'black',
  textDecoration: 'none',
}
const linkActiveStyle = {
  color: "#70FFCE",  //5AC3FF
}

// <div className={style.ElenaBremner}>
//     Elena Bremner 
// </div>
const Sidebar = props =>
  <div>
      <div>
          <ImageLoader filename="pinPal/ElenaBremnerBold.png" className={style.ElenaBremner}/>
      </div>
    <div className = {style.work}>
      <Link to="/" style={linkStyle} activeStyle={linkActiveStyle}>
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
    </div>
    <Link to="/about/" style={linkStyle} activeStyle={linkActiveStyle}>
        About me
    </Link>
    <br/>
    <Link to="/contact/" style={linkStyle} activeStyle={linkActiveStyle}>
      Contact
    </Link>
    <br/> 
      <a href={resume} style={linkStyle}>Resume</a>
    <br/>
  </div>


export default Sidebar