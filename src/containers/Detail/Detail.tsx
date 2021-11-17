import React from 'react';
import { useParams } from 'react-router-dom';

export interface DetailProps {}

export const DetailContainer: React.FC<DetailProps> = (props) => {
    const { id } = useParams() as any;

    return (
        <React.Fragment>
            <h1>Detail Page: ID {id}</h1>
        </React.Fragment>
    );
}