import Event from "./Event";
import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;
`;

const EventWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;


function Content({shows, filterText}) {

  const rows = []

  shows.forEach((show) => {
      if (
        show.title.toLowerCase().indexOf(
          filterText.toLowerCase()
        ) === -1
      ) {
        return;
      }
    rows.push(
      <Event 
        key={show.id}
        // title={show.title} 
        // link={show.link}
        // image={show.image}
        // date={show.date}
        // location={show.location}
        show={show}

      />
    )
  })

  return(
    <ContentContainer>
      <EventWrapper>
        <div className="elfsight-app-c18daa5e-eda1-4c95-869f-ae7c80f3238b" data-elfsight-app-lazy></div>
        {rows}
      </EventWrapper>
    </ContentContainer>
  )    

}

        


export default Content
