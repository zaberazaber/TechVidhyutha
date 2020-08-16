import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import '../styles/Main.scss';

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
        flipped: false,
        clicked: false,
    }
  };
  flip = () => {
    this.setState({
        flipped: !this.state.flipped,
        clicked: true,
      });
  }

  render() {
    var flippedCSS = this.state.flipped ? " Card-Back-Flip" : " Card-Front-Flip";
    if (!this.state.clicked) flippedCSS =  "";
    return (
        <main className="mainWrapper">
            <section>
            <h1>About US</h1>
            <p className="wrapper-abouUs">
            Tech Vaidhyutha is an E-learning platform launched in 2020. Our sole mission is to create a proficient
            skilful world by helping technical graduates and like-minded people through short and simplified
            online tutoring of technical engineering topics .our goal is to be one of the best resource and online
            learning tool for all who are looking technical knowledge. Self-paced learning helps the learner to
            complete their training in their own time and according to their own schedules.
            </p> 
        </section>
        <section>
            <h1>Our Products</h1>
            <details>
                <summary>product1</summary>
                <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
            </details>
            <details>
                <summary>product2</summary>
                <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
            </details>
            <details>
                <summary>product3</summary>
                <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
            </details>
            <details>
                <summary>product4</summary>
                <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
            </details>
            <details>
                <summary>product5</summary>
                <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
            </details>
        </section>
        <section className="cardWrapper">
            
            <div className="Card" id="1" onClick={this.flip}>
                <div className={"Card-Front"+flippedCSS}>
                <h3>Why Tech Vaidhyutha?</h3>
                <img className= "why-wrapper"></img>
                </div>
                <div className={"Card-Back"+flippedCSS}>
                <h3 className="why-tech-iduyatha"> Students who are finding difficult to strike a balance with regular classes and who have the zeal of learning new things can choose Tech Vaidhyutha for up skilling themselves in order to stay more competitive in the present world. 
                    <br/> 
                    <br/>
                    Our short elucidating videos minimize technical jargons with detailed illustrations and animations which helps in conveying the essentials of each topic’s with on- demand education. 
                    Our main motto is to inspire young engineers to inculcate more technical skills.
                </h3>
                </div>
            </div>
            
        </section>
        </main>
    );
  }
}

export default Main;
