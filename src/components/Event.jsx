import styled from "styled-components"

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  /* border: 1px solid red; */
  background-color: #222;
  color: #fff;
  border-radius: 10px;
  position: relative;
  ::after{
    position: absolute;
    top: 5px;
    left: 5px;
    content: ' ';
    background-color: #222;
    width: 100%;
    height: 100%;
    filter: blur(10px);
    z-index: -1;
  }


  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
`;

const EventImage = styled.img`
  width: 250px;
  height: auto;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 20px solid black;


`;



const EventInfo = styled.div`
  flex: 1;
`;

const EventTitle = styled.h2`
  font-size: 24px;
  margin-top: 20px;
`;

const EventDate = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

const EventLocation = styled.p`
    font-size: 14px;

    @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const BuyButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  /* margin-top: 10px; */

  @media (max-width: 768px) {
    width: 80%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    /* border: 1px solid red; */

  }
`;

const BuyButtonWrapper = styled.div`
  display: grid;
  align-items: center;
  /* border: 1px solid red; */
  min-height: 150px;
  @media (max-width: 768px) {
    width: 100%;
    border: none;
    display: flex;
    justify-content: center;
    /* border: 1px solid red; */
  }
`;


// function Event({title, date, location, link, image}) {
function Event({show}) {
    
  return (
    <EventContainer>
      <EventImage  src={show.squareImage} width='100px'/>
      <EventInfo>
        <EventTitle>{show.title}</EventTitle>
        <EventDate >{show.date}</EventDate>
        <EventLocation >{show.location}</EventLocation>
      </EventInfo>
      <BuyButtonWrapper>
        <BuyButton href={show.link} target="blank"><h3>Comprar</h3></BuyButton> 
      </BuyButtonWrapper>
    </EventContainer>
  )
}

export default Event
