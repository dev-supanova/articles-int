import React from 'react'; 
import { NavLink } from 'react-router-dom';
import { Article, ArticleProps } from './../Article/Article';

import './ArticleLink.css';

export interface ArticleLinkProps extends ArticleProps {
    to: string
}

export const ArticleLink: React.FC<ArticleLinkProps> = (props) => {  
    return (
        <NavLink to={props.to}>
            <Article {...props} />
        </NavLink>
    );
};

export default ArticleLink;