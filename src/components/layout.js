import React from 'react'
import { Link } from "gatsby"
import resume from './websiteResume.pdf'
import style from './layout.module.css'
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import Button from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/core/styles";
import Sidebar from "./sidebar";



/* sidebar 
* includes linke to each page + resume
* wrapper contains grid
*/

/**
* StylesProvider is used to override the custom CSS over materialUI's CSS
*/
export default ({ children }) => {
    return (
      <StylesProvider injectFirst>
        <div className={style.container} > 
          <Button className={style.menu}>Menu</Button> 
            <div className={style.sidebar}>
            <Sidebar/>
            </div>
            <div className={style.maincontent}>
              { children }
            </div>
        </div>
      </StylesProvider>
    ) 
}
 

