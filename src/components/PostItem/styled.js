import styled from 'styled-components';
import {Link} from 'gatsby';

export const PostItemLink = styled(Link)`
color: #1062ae;
  display: flex;
  text-decoration: none;
  
  &:hover {
    color: #1fa1f2;
  }
`

export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid #38444d;
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
  font-family: "Ubuntu", sans-serif;

`

export const PostItemTag = styled.div`
  align-items: center;
  background: ${props => props.background ? props.background : '#1fa1f2'};
  border-radius: 50%;
  color: #fff;
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;
  font-family: "Ubuntu", sans-serif;
 

`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  font-family: "Ubuntu", sans-serif;

`

export const PostItemDate = styled.time`
color: #888;
    text-transform: uppercase;
    font-weight: 500;

  font-size: 0.9rem;
  font-family: "Ubuntu", sans-serif;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
  font-family: "Ubuntu", sans-serif;
 
  
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
  font-family: "Ubuntu", sans-serif;

  color: black;
  font: inherit;
  vertical-align: baseline;
  `