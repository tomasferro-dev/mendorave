import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import event1 from '../assets/aura-2104-260395-min-cuadrado.jpg'; // Ejemplo de importación de imágenes
import event2 from '../assets/nicomoreno-cuadrado.jpg';
import event3 from '../assets/pfirter-cuadrado.jpg';
import styled from 'styled-components';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;
  color: #fff;
`;

const SearchInput = styled.input`
  width: 80%;
  max-width: 400px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const StyledTitle = styled.h1`
  /* color: #222; */
`;

const BeatTicket = styled.h4`
  /* color: #222; */
  margin-bottom:20px;
`;


function Header({filterText, onFilterTextChange}) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1.7,
    slidesToScroll: 1
  };

  return (
    <>
      <ContentContainer>
        <BeatTicket>BEAT TICKET</BeatTicket>
      </ContentContainer>
      <div>
        <Slider {...settings}>
          <div>
            <img src={event1} alt="Event 1" width='100%'/>
          </div>
          <div>
            <img src={event2} alt="Event 2" width='100%'/>
          </div>
          <div>
            <img src={event3} alt="Event 3" width='100%'/>
          </div>
        </Slider>
      </div>
      <ContentContainer>
        <StyledTitle>Eventos y más en Mendoza</StyledTitle>
      </ContentContainer>
      <ContentContainer >
        <SearchInput 
          type="text" 
          placeholder='Buscar una fiesta...'
          value={filterText} 
          onChange={(e) => onFilterTextChange(e.target.value)}
          />
      </ContentContainer>
    </>
  )
}

export default Header
