import React, { Component } from "react";
import Switch from "@brookr/react-switch";
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from "react-router-bootstrap";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: true }; // Set default to true for dark mode >>> 
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  componentDidMount() {
    // Apply dark mode class to body when component mounts >>>
    this.setTheme();
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked }, this.setTheme); // Update the state and apply the theme >>>
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme = this.state.checked ? "dark" : "light"; // Apply the appropriate theme based on the state of the switch >>>
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles;
    }

    const HeaderTitleTypeAnimation = React.memo(() => {
      return this.titles
    }, () => true);

    return (
      <header id="home" style={{ height: window.innerHeight - 600, display: 'block' }}>
        <Nav activeKey="/home" fill style={{ position: 'absolute', top: 10, right: 10 }}>
          <Nav.Item> 
            <LinkContainer to="/">
              <Nav.Link href="/">Home</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>        
            <LinkContainer to="/about">
              <Nav.Link eventKey="about">About</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://docs.google.com/document/d/1F3kdv44uKw6tpClVx0ti3hnAQgEsggFehdJfoLD1hQ0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
              Resume
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Switch 
              checked={this.state.checked} // Default the switch to "on" position >>>
              onChange={this.onThemeSwitchChange}
              offColor="#baaa80"
              onColor="#353535"
              className="react-switch mx-auto"
              width={90}
              height={40}
              uncheckedIcon={
                <span
                  className="iconify"
                  data-icon="twemoji:owl"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "20px",
                    color: "#353239",
                  }}
                ></span>
              }
              checkedIcon={
                <span
                  className="iconify"
                  data-icon="noto-v1:sun-with-face"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "10px",
                    color: "#353239",
                  }}
                ></span>
              }
              id="icon-switch"
            />
          </Nav.Item>
        </Nav>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <br/>
              <h1 className="mb-0">
                {name}
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
