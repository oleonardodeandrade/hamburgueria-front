import styled from 'styled-components'

export const Container = styled.div`
    background-color: #0A0A10;
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
    min-height: 100vh;

`;

export const Image = styled.img`
/* margin-top: 30px; */
height: 300px;
`;

export const Div = styled.div `
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 20px;
padding: 20px ;

background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;

width: 342px;
height: 110px;

border: none;
outline: none;

p{
    font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 28px;

color: #FFFFFF;
}

button{
    background: none;
    border: none;
    cursor: pointer;
}
`;

export const User = styled.div `
/* display: flex; */
justify-content: space-around;
align-items: center;

width: 342px;
height: 58px;

border: none;
outline: none;

p{
    font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 28px;

color: #FFFFFF;
}

button{
    background: none;
    border: none;
    cursor: pointer;
}
`;


