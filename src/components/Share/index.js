import React from 'react';
import {css} from '@emotion/react'
import {TwitterShareButton, FacebookShareButton} from 'react-share';


const Share = ({url, title, twitterHandle}) => (
  <>
  <div
    css={css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      div,
      button {
        margin-right: 20px;
        cursor: pointer;
        :hover {
          /* react-share uses inline styles */
          color: #e41e25 !important;
        }
      }
      span {
        margin-right: 20px;
        font-size: 70%;
        text-transform: uppercase;
        line-height: 2.5;
        opacity: 0.7;
      }
    `}
  >
    <div
      css={css`
        flex-grow: 1;
        border-top: 1px solid rgb(211, 211, 211);

        @media screen and (max-width: 960px) {
        margin-left: 25px;
        }
      `}
    />
    <span>Compartir articulo</span>
    <TwitterShareButton
      url={url}
      title={title}
      via={twitterHandle}
    >
      Twitter
    </TwitterShareButton>
    <FacebookShareButton
      url={url}
      quote={title}
      via={twitterHandle}
      css={css`
        cursor: pointer;
      `}
    >
      Facebook
    </FacebookShareButton>
  </div>
  </>

)

export default Share
