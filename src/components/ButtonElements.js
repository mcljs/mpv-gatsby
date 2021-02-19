import styled from "styled-components";

export const Button = styled.button`
    border-radius: 4px;
    background: ${({primary}) =>(primary ? "#C81617" : "#E2191A")};
    white-space: nowrap;
    padding: ${({big}) => (big ? "20px 64px" : "10px 20px")};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? "20px" : "16px")};
    outline: none;
    border: none;
    cursor: pointer;
    font-family: "Ubuntu", sans-serif;

    &:hover {
        transition: all 0.3s ease-out;
        background: ${({primary}) =>(primary ? "#E2191A" :  "#C81617")};
    } 

    @media screen and (max-width: 960px){
        width: 100%
    }
`
