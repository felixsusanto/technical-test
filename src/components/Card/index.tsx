import React from 'react';
import styled from 'styled-components';
import heart from '../../assets/images/heart-sml.svg';
import eye from '../../assets/images/eye.svg';

const CardWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 6px 15px -4px rgba(0, 0, 0, 0.2);
  .img-container {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: #ddd;
    position: relative;
    overflow: hidden;
    > img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .text-container {
    padding: 18px 10px;
    .title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 28px;
    }
  }
  .bid-container {
    display: flex;
    margin-bottom: 28px;
    .col {
      flex: 1;
    }
  }
  .small-title {
    color: #727272;
    font-size: 12px;
  }
  .value {
    font-weight: 700;
    font-size: 18px;
  }
  .diff {
    font-weight: 400;
    font-size: 14px;
  }
  .author-wrapper {
    display: flex;
    align-items: center;
    .author {
      flex: 1;
      display: flex;
      align-items: center;
      .author-img {
        width: 36px;
        height: 36px;
        border-radius: 18px;
        background-color: #ddd;
        background-size: cover;
      }
      .author-name {
        font-size: 14px;
        font-weight: 700;
        padding-left: 0.5em;
      }
    }
  }
  .meta {
    display: flex;
    align-items: center;
    .meta-value {
      color: #727272;
      font-weight: 400;
      font-size: 14px;
      vertical-align: center;
      display: inline-block;
      margin-left: 5px;
    }
    .meta-icon {
      margin-left: 10px;
    }
  }

`;

interface CardProps {
  title: string;
  imgUrl: string;
  bidTime?: string;
  value: string;
  diff: string;
  authorImg: string;
  authorName: string;
  likes: number;
  viewed: number;
}

const Card: React.FC<CardProps> = (p) => {
  return (
    <CardWrapper>
      <div className="img-container">
        <img src={p.imgUrl}/>
      </div>
      <div className="text-container">
        <div className="title">
          {p.title}
        </div>
        { p.bidTime && (
          <div className="bid-container">
            <div className="col">
              <div className="small-title">
                Current Bid
              </div>
              <div className="value">
                ${p.value}{' '}
                <span className="diff">
                  (Ξ{p.diff})
                </span>
              </div>
            </div>
            <div className="col">
              <div className="small-title">
                Time Left
              </div>
              <div className="value">
                {p.bidTime}
              </div>
            </div>
          </div>
        )}
        { !p.bidTime && (
          <div className="value">
            ${p.value}{' '}
            <span className="diff">
              (Ξ{p.diff})
            </span> 
          </div>
        )}

        <div className="author-wrapper">
          <div className="author">
            <div className="author-img" 
              style={{ backgroundImage: `url(${p.authorImg})`}} 
            />
            <div className="author-name">{p.authorName}</div>
          </div>
          <div className="meta">
            <div className="col">
              <img className="meta-icon" src={heart} />
              <span className="meta-value">{p.likes}</span>
            </div>
            <div className="col">
              <img className="meta-icon" src={eye} />
              <span className="meta-value">{p.viewed}</span>
            </div>
          </div>
        </div>

      </div>
    </CardWrapper>
  );
};

export default Card;
