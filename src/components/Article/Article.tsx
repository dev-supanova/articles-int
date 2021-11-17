import React from 'react';

import './Article.css';

import { Result } from '../../models/articles.model';

export interface ArticleProps {
    article: Result;
}

export const Article: React.FC<ArticleProps> = (props) => {
    return (
        <div className={'item-container'}>
            <div className={'img-container'}>
            </div>
            <div className={'content-container'}>
                <h3>{props.article.title}</h3>
                <p>{props.article.byline}</p>
                <span>{props.article.published_date}</span>
            </div>
        </div>
    );
}
