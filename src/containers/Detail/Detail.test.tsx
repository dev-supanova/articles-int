import React from 'react';
import ReactDOM from 'react-dom';
import { DetailContainer, DetailProps } from './Detail';

describe('<DetailContainer />', () => {
    let div: any;
    let props: DetailProps;

    beforeEach(() => {
        div = document.createElement('div');

        props = {}
    });

    it('[SMOKE - DEEP] renders without crashing', () => {
        ReactDOM.render(<DetailContainer {...props} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})