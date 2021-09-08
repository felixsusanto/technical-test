import React from 'react';
import styled from 'styled-components';
import mintable from '../../assets/images/logo.svg';
import navIcon from '../../assets/images/nav-icon.svg';
import Button from '../Button';
import Container from '../Container';


const NavBarWrapper = styled.div`
  .ticker {
    background: #4805D6;
    color: #fff;
    font-size: 14px;
    text-align: center;
    padding: 12px;
  }
  .flex {
    display: flex;
    align-items: center;
  }
  .navbar-main {
    background: rgb(85,13,237);
    background: linear-gradient(-90deg, rgba(85,13,237,1) 0%, rgba(98,7,245,1) 82%, rgba(112,0,255,1) 100%);
    .mobile-nav {
      display: none;
    }
    ${ Container } {
      width: 100%;
      justify-content: space-between;
    }
    .navitem-container {
      display: flex;
      .main-item {
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        + .main-item {
          margin-left: 48px;
        }
      }
    }
    .log-wrapper {
      display: flex;
      div + div {
        margin-left: 14px;
      }
    }
  }
  .navbar-sub {
    background: #fff;
    ${ Container } {
      justify-content: center;
    }
    
    .sub-item {
      cursor: pointer;
      + .sub-item {
        margin-left: 80px;
        
      }
    }
  }
`;

const mainnavItem = [
  'Browse', 'Discover', 'Mint an Item', 'Vote/DAO'
];

const subnavItem = [
  'Art', 'Collectibles', 'Game Items', 'Music', 'Domains', 'Templates', 'Videos'
];

const NavBar = () => {
  return (
    <NavBarWrapper>
      <div className="ticker">
        🔥 Ben Baller &amp; Nicky Diamonds Limited Edition NFTs Drop is LIVE! Check it out
      </div>
      <div className="navbar-main">
        <Container className="flex">
          <div className="logo-container">
            <img src={mintable} alt="mintable logo"/>
          </div>
          <div className="searchbar-container"></div>
          <div className="navitem-container">
            {mainnavItem.map((t) => <div key={t} className="main-item">{t}</div>)}
          </div>
          <div className="log-wrapper">
            <Button>Login</Button>
            <Button className="solid">Sign Up</Button>
          </div>
          <div className="mobile-nav">
            <img src={navIcon} alt="nav icon"/>
          </div>
        </Container>
      </div>
      <div className="navbar-sub">
        <Container className="flex">
          {subnavItem.map((t) => <div key={t} className="sub-item">{t}</div>)}
        </Container>
      </div>
    </NavBarWrapper>
  );
};

export default NavBar;
