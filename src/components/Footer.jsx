import styled from "styled-components"

const BackGround = styled.div`
    background-color: #264653;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const TomasFerroDev = styled.p`
    color: #14213d;
`;

function Footer() {
  return (
    <BackGround>
      <TomasFerroDev>Tomas Ferro Dev</TomasFerroDev>
      <TomasFerroDev>2024</TomasFerroDev>
    </BackGround>
  )
}

export default Footer
