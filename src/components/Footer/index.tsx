import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import logo from '../../assets/images/logo.svg';

const FooterWrapper = styled.footer`
  background: #2C0346;
  color: #fff;
  padding: 50px 0;
  .logo-wrapper {
    display: flex;
    font-size: 20px;
    font-weight: 600;
    line-height: 1;
    align-items: center;
    > img {
      margin-right: 1em;
    }
  }
  .title, .nav-item {
    cursor: pointer;
  }
  .title {
    font-weight: 700;
    padding: 1.5em 0; 
  }
  .left {
    flex: 1;
  }
  .right {
    display: flex;
    flex: 2;
    justify-content: space-between;
    .nav-item {
      + .nav-item {
        margin-top: 12px;
      }
    }
  }
  ${Container} {
    display: flex;
    justify-content: space-between;
  }
`;

const FooterNav = [
  {
    title: 'My account',
    items: [
      'Create a store',
      'List an Item for sale',
      'My Profile',
      'Browse'
    ]
  },
  {
    title: 'Need Help?',
    items: [
      'FAQ',
      'Mintable Guide'
    ]
  },
  {
    title: 'Buy an Item',
    items: [
      'Digital Items',
      'Stores'
    ]
  },
  {
    title: 'Legal',
    items: [
      'Privacy Policy',
      'Terms of Use'
    ]
  },
];

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <div className="left">
          <div className="logo-wrapper">
            <img src={logo} alt="mintable logo" /> Mintable
          </div>
          <div className="title">Join our community</div>
        </div>
        <div className="right">
          {FooterNav.map((item, index) => {
            return (
              <section className="section-nav">
                <div className="title">{item.title}</div>
                {item.items.map((navitem) => <div className="nav-item">{navitem}</div>)}
              </section>
            );
          })}
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
