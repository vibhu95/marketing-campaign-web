import React from 'react';
import './App.css';
import {Content, Drawer, Header, Layout, Navigation} from "react-mdl";
import Main from "./components/main";
import {Link} from "react-router-dom";

function App() {
  function hideToggle() {
    let selectorId = document.querySelector('.mdl-layout');
    selectorId.MaterialLayout.toggleDrawer();
  }
  return (
      <div>
        <Layout>
          <Header className="header-color" title={<Link to={"/"} style={{textDecoration:'none', color:'white'}} >Marketing Campaigner</Link>} scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/recipients">View Recipients</Link>
              <Link to="/campaigns">View Campaigns</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link to={"/"} style={{textDecoration:'none', color:'black'}} >Marketing Campaigner</Link>} onClick={()=> hideToggle()}>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/recipients">View Recipients</Link>
              <Link to="/campaigns">View Campaigns</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
  );
}

export default App;
