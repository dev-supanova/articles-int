import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Master.css';

import ArticleLink from '../../components/ArticleLink/ArticleLink';
import { Result } from '../../models/articles.model';

import { DataService } from './../../services/data.service';

export interface MasterProps {}

export const MasterContainer: React.FC<MasterProps> = (props) => {
    let { pathname } = useLocation();
    const [data, setData] = useState<Array<Result>>([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        DataService.getData(7).then((res: any) => {
            setData(res.data.results);
            console.log(res.data.results);
        }).catch(err => console.error(err));
    };

    return (
        <React.Fragment>
            <ul>
                {
                    data && data.map((article, index) => (
                        <li className='main-lit-item' key={article.id}>
                            <ArticleLink to={`${pathname}/${article.id}`} article={article} />
                        </li>
                    ))
                }
            </ul>
        </React.Fragment>
    );
}