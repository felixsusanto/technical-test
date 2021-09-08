import React from 'react';
import Container from '../../components/Container';
import styled from 'styled-components';
import ticketImg from '../../assets/images/ticket.svg';
import { DndProvider, useDrop, XYCoord  } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableCard from '../../components/DraggableCard';
import DropArea from '../../components/DropArea';
import _ from 'lodash';
import update from 'immutability-helper';


const Box = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
`;

const Btn = styled.div`
  color: #fff;
  line-height: 1;
  padding: 14px 32px;
  border-radius: 4px;
  background: #550DED;
  text-align: center;
`;

const RaffleWrapper = styled.div`
  ${Container} {
    display: flex;
    min-height: 850px;
    .left-col {
      flex: 1;
      height: 100%;
    }
    .right-col {
      flex: 3;
      padding-left: 40px;
    }
  }
  .title {
    font-weight: 700;
    font-size: 20px;
  }
  .separator {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    &.bottom {
      border-bottom: 1px solid #ddd;
    }
    &.top {
      border-top: 1px solid #ddd;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    .mainbox {
      flex: 1;
      text-align: center;
      padding: 20px;
    }
  }
  .box-footer {
    display: flex;
    .subtitle {
      padding-top: 0.2em;
      color: #808080;
      font-weight: 700;
      b {
        color: #2d2d2d;
      }
    }
    .content {
      padding-top: 1em;
      max-width: 380px;
      font-size: 15px;
      font-weight: 700;
    }
  }
  .cards-container {
    text-align: center;
  }
  .card-wrapper {
    position: relative;
    padding: 10px;
    display: inline-block;
    .indicator {
      position: absolute;
      padding: 1.3em 1em;
      font-size: 16px;
      font-weight: 700;
      line-height: 0;
      background: #550DED;
      border-radius: 50%;
      color: #fff;
      right: 0;
      top: 0;
    }
  }
  .drop-area {
    width: 80%;
    height: 500px;
    border: 3px dashed #ddd;
    margin: 0 auto;
  }
`;

const initTickets: TicketProps[] = [
  {
    valueType: 'silver',
    qty: 1
  },
  {
    valueType: 'gold',
    qty: 3
  },
  {
    valueType: 'diamond',
    qty: 4
  }
];

interface TicketProps {
  valueType: 'silver' | 'gold' | 'diamond';
  qty: number;
}

const Raffle = () => {
  const [tickets, setTickets] = React.useState<TicketProps[]>(initTickets);

  const handleDrop = React.useCallback(
    (item: { valueType: string }) => {
      const { valueType } = item;
      const clone = _.cloneDeep(tickets);
      const getItem = _.find(clone, { valueType });
      if (typeof getItem === 'object') {
        getItem.qty = getItem.qty - 1;
      }
      console.log(clone);
      setTickets(clone);
      
      console.log('tickets?', tickets);
      
    }, [tickets])

  return (
    <RaffleWrapper>
      <DndProvider backend={HTML5Backend}>
        <Container>
          <div className="left-col">
            <Box style={{minHeight: 850}}>
              <div className="separator bottom">
                <div className="col title">Get More Tickets</div>
                <div className="col">
                  <Btn>Buy</Btn>
                </div>
              </div>
              <div className="cards-container">
                {tickets.map((ticket, index) => {
                  return (
                    <div className="card-wrapper" key={index}>
                      <DraggableCard valueType={ticket.valueType} /> 
                      <div className="indicator">
                        {ticket.qty}
                      </div>
                    </div>
                  );
                })}
              </div>
              
            </Box>
          </div>
          <div className="right-col">
              
            <Box style={{height: 850}}>
              <div className="container">
                <div className="mainbox">
                  <h1>Collectors Event</h1>
                  <p>Participate and win high quality currated NFTs</p>
                  {/* <div className="drop-area" /> */}
                  <DropArea onDrop={(a) => {handleDrop(a)}}/>
                </div>
                <div className="separator top">
                  <div className="col box-footer">
                    <div className="col" style={{paddingRight: '2em'}}>
                      <img src={ticketImg} />
                    </div>
                    <div className="col">
                      <div className="title">Draw Tickets</div>
                      <div className="subtitle"><b>10</b> Tickets found</div>
                      <div className="content">
                        Open  your tickets and get a chance to win $1000 worth of high quality NFTs! {' '}
                        <a href="#">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <Btn>Draw Ticket</Btn>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </Container>
      </DndProvider>
    </RaffleWrapper>
  );
};

export default Raffle;
