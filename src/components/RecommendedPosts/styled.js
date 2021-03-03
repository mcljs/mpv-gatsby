import styled from "styled-components"
import media from 'styled-media-query'
import {Link }from 'gatsby'



export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid #38444d;
  border-top: 1px solid #38444d;
  background: #192734;
  display: flex;
`

export const RecommendedLink = styled(Link)`
 font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  align-items: center;
  background: #192734;
  color: #fff;
  display: flex;
  padding: 3rem;
  text-decoration: none;

  width: 50%;
  ${media.lessThan('large')`
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}
  &:hover {
    background: var(--borders);
  }
  &.previous {
    border-right: 1px solid var(--borders);
  }
  &.next {
    justify-content: flex-end;
  }
  &.next:only-child {
    margin-left: auto;
    border-left: 1px solid var(--borders);
  }
  &.previous:before {
    content: '\\2190';
    margin-right: 0.5rem;
  }
  &.next:after {
    content: '\\2192';
    margin-left: 0.5rem;
  }
`


// export const RecommendedLink = styled(Link)`
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
//   align-items: center;
//   background: #192734;
//   color: #fff;
//   display: flex;
//   padding: 3rem;
//   text-decoration: none;
//   transition: background 0.5s;
//   width: 50%;
//   &:hover {
//     background: #38444d;
//   }
//   &.previous {
//     border-right: 1px solid #38444d;
//   }
//   &.next {
//     justify-content: flex-end;
//   }
//   &.previous:before {
//     content: "\\2190";
//     margin-right: 0.5rem;
//   }
//   &.next:after {
//     content: "\\2192";
//     margin-left: 0.5rem;
//   }
// `
