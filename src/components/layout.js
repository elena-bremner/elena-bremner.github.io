import React from 'react'
import style from './layout.module.css'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { StylesProvider } from "@material-ui/core/styles";
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import Sidebar from "./sidebar";
import ImageLoader from "../components/imageLoader"




/* sidebar 
* includes linke to each page + resume
* wrapper contains grid
*/

/**
* StylesProvider is used to override the custom CSS over materialUI's CSS
*/
class SidebarToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuButtonOn: false,
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth < 1025 });
  }

  componentDidMount() {
    this.setState({ isMobile: window.innerWidth < 1025 });
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleClick() {
    this.setState(state => ({
      isMenuButtonOn: !state.isMenuButtonOn
    }));
  }

  render() {
    console.log("isToggleOn");
    console.log(this.state.isMenuButtonOn);
    console.log("IsMobil?");
    console.log(this.state.isMobile);
    if (this.state.isMobile && !this.state.isMenuButtonOn) {
      return(    
        <div>
          <MenuOutlinedIcon className={style.menu} onClick={this.handleClick}></MenuOutlinedIcon> 
          <div className={style.maincontent} >
            { this.props.children }
          </div>
        </div>
      );
    }

    // else display SideBar
    return (
      <div>
        <CloseOutlinedIcon className={style.cancelIcon} onClick={this.handleClick}></CloseOutlinedIcon> 
        <div className={style.sidebar}  >
          <Sidebar/>
        </div>
        <div className={style.maincontent}>
          { this.props.children }
        </div>
      </div>
    );
  }
}


export default ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <div className={style.container} > 
        <SidebarToggle>
          {children}
        </SidebarToggle>
      </div>
    </StylesProvider>
  ) 
}
 

