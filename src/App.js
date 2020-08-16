import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Main from './components/Main'
import Map from './components/Map'
import './App.scss';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeTab: 1
    }
    
  }

  toggle = (tab) => {
    if(this.state.activeTab !== tab){
      this.setState({activeTab: tab})
    }
  }

  
  render() {
    return (
      <div className="mainWrapper">
        <header>
        <div class="wrapper">
          <div class="heading-wrapper">
            <h1 class="main-heading">Create Way of Learning</h1>
          </div>
        </div>
        </header>
          <Main />
        <footer className="footerWrapper">
          <div class="footer-left">
            
              <div className="logo"></div>
               <div class="footer-right col-md-4 col-sm-6">
              <div>
                <i class="fa fa-map-marker"></i>
                <span><span>&nbsp;&nbsp;</span>161, Seshadripuram Main Rd, DN Ramaiah Layout, Guttahalli, </span> Bengaluru, Karnataka 560020
              </div>
              <div>
                <i class="fa fa-phone"></i> <span>&nbsp;&nbsp;</span> (+91) 9392106419
              </div>
              <div>
                <i class="fa fa-envelope"></i> <span>&nbsp;&nbsp;</span> tech.vaidhyutha@gmail.com
              </div>
              </div>
              <p>Copyright 2020 Teah Vaidhyutha |  All Rights Reserved</p>
              <div class="footer-social-icons">
                <h4 class="_14">Follow us on</h4>
                <ul class="social-icons">
                    <li><a href="https://www.youtube.com/channel/UCg-ALchfioXka_NOl_KfcHQ" target="_blank" class="social-icon"> <i class="fa fa-youtube"></i></a></li>
                    <li><a href="https://www.facebook.com/TechVaidhyutha" target="_blank" class="social-icon"> <i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/home" class="social-icon" target="_blank"> <i class="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/company/tech-vaidyutha/?viewAsMember=true" target="_blank" class="social-icon"> <i class="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          <div class="footer-right">
				    <p>Contact Us</p>
            <form action="#" method="post">
              <input type="text" name="email" placeholder="Email"/>
              <br/>
              <textarea name="message" placeholder="Message"></textarea>
              <br/>
              <button>Send</button>
            </form>
			    </div>
        </footer>
      </div>
    );
  }
}

export default App;
