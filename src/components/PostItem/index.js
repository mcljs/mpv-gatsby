import React from 'react'
import PropTypes from "prop-types"

import * as S from './styled'

const PostItem = ({
    slug,
    background,
    category,
    date,
    timeToRead,
    title,
    description,
  }) => (
        <div className="font">
    <S.PostItemLink  to={slug}>
        <S.PostItemWrapper>
<S.PostItemTag background={background}>{category}</S.PostItemTag>
            <S.PostItemInfo>
                <S.PostItemDate>{date} • {timeToRead} minuto de lectura</S.PostItemDate>
                <S.PostItemTitle>{title}</S.PostItemTitle>
                <S.PostItemDescription>
                    {description}
                </S.PostItemDescription>
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>
    </div>
)

PostItem.propTypes = {
    slug: PropTypes.string.isRequired,
    background: PropTypes.string,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

export default PostItem;