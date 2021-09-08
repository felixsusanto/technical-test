import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #2C0346;
  color: #fff;

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
      Something here
    </FooterWrapper>
  );
};

export default Footer;
