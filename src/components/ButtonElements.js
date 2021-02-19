import styled from "styled-components";

export const Button = styled.button`
    border-radius: 4px;
    background: ${({primary}) =>(primary ? "rgb(250,56,94)" : "rgb(226,52,86)")};
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
        background: ${({primary}) =>(primary ? "rgb(226,52,86)" :  "rgb(250,56,94)")};
    } 

    @media screen and (max-width: 960px){
        width: 100%
    }
`
