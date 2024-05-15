import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import event1 from '../assets/aura-2104-260395-min-cuadrado.jpg'; // Ejemplo de importación de imágenes
import event2 from '../assets/nicomoreno-cuadrado.jpg';
import event3 from '../assets/pfirter-cuadrado.jpg';
import styled from 'styled-components';
import { slidesOnLeft } from 'react-slick/lib/utils/innerSliderUtils';
import MainLogo from '../assets/icons8-ticket-96-1.png'

const HeadContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 20px 0;
  color: #fff;
  /* border: 1px solid red; */
`;

const SearchContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;
  color: #fff;
  /* border: 1px solid red; */
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

`;

const BeatTicket = styled.h4`

`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoMain = styled.img`

`;


function Header({filterText, onFilterTextChange}) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    // slidesToShow: 1.7,
    // slidestoShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 1600,
    autoplay: true,
    adaptiveHeight: true,
    centerMode: true,
    cssEase: 'ease-out',
    // fade: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    rows: 1,

  };

  return (
    <>

      <HeadContentContainer>
        <LogoContainer>
          <LogoMain src={MainLogo} alt='logo' />
        </LogoContainer>
        <LogoContainer>
          <BeatTicket>BEAT TICKET</BeatTicket>
        </LogoContainer>
      </HeadContentContainer>
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
      <SearchContentContainer>
        <StyledTitle>Eventos y más en Mendoza</StyledTitle>
      </SearchContentContainer>
      <SearchContentContainer >
        <SearchInput 
          type="text" 
          placeholder='Buscar una fiesta...'
          value={filterText} 
          onChange={(e) => onFilterTextChange(e.target.value)}
          />
      </SearchContentContainer>
    </>
  )
}

export default Header
