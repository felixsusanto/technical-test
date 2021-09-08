import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import Container from '../../components/Container';

const LandingWrapper = styled.div`
  .flex {
    display: flex;
    .flex-item {
      width: 25%;
    }
  }
`;

const Landing = () => {
  const cProps = {
    title: 'Dragon Rider on Lava Planet',
    imgUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=631&q=80',
    bidTime: '02h 30m 21s',
    value: '550',
    diff: '1.54',
    authorImg: 'https://randomuser.me/api/portraits/women/44.jpg',
    authorName: 'The Pixie Android',
    likes: 100,
    viewed: 2000

  }
  return (
    <LandingWrapper>
      <Container>
        <div className="flex">
          <div className="flex-item">
            <Card {...cProps}/>
          </div>
        </div>
      </Container>
    </LandingWrapper>
  );
};

export default Landing;
