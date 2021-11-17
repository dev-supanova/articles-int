import React from 'react';
import { Result } from '../../models/articles.model';

export interface DetailProps {
    article: Result
}

export const ArticleDetail: React.FC<DetailProps> = (props) => {
    return (
        <div>
            <h1>{props.article.title}</h1>
        </div>
    );
}
