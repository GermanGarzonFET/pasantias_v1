import React,{Component} from 'react'
import Menu from './Menu'
import '../styles/menu.css'
import '../styles/home.css'
import {Redirect} from 'react-router-dom'
import Img from '../img/1.jpg'


class Header extends Component{

    render(){

      const token =sessionStorage.getItem('x-token');
        return(

          <div>
            {
              !token && <Redirect to="/login"/>
            }
            <div className="header">
            <Menu></Menu>
            <img src={Img} width="300" height="100"  />
            </div ><br/>
          </div>
        )
    }

}

export default Header;