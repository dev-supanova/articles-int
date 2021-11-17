import { DataResponse } from '../models/articles.model';
import http from './http-common';

type DAY = 1 | 7 | 30;

const getData = (day: DAY) => {
    return http.get<DataResponse>("mostpopular/v2/viewed/7.json?api-key=CaApadcPzn6vnKapCzYEJlwU5R5qPFrG");
}

const search = (id: number) => {
    return http.get<any>(`search/v2/articlesearch.json?fq=id:(${id})&api-key=CaApadcPzn6vnKapCzYEJlwU5R5qPFrG`)
}

const DataService = {
    getData, search
};

export { DataService };