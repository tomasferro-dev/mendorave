import { useState } from "react";
import Content from "./Content";
import Header from "./Header";
import styled from 'styled-components';
import Footer from "./Footer";

const BackGround = styled.div`
  background-color: #023047;
`;

function FilterableShowsList({shows}) {

  const [filterText, setFilterText] = useState('');
  
  return (
  <BackGround>
    <Header 
      filterText={filterText}
      onFilterTextChange={setFilterText} />
    <Content 
      shows={shows}
      filterText={filterText} />
    <Footer />
  </BackGround> 
  )
}


export default FilterableShowsList
