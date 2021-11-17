import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import { MasterContainer, MasterProps } from './Master';

configure({ adapter: new Adapter() });

describe('<MasterContainer />', () => {
    let div: any;
    let props: MasterProps;

    jest.mock('react-router', () => ({
        ...jest.requireActual("react-router"),
        useLocation: jest.fn().mockImplementation(() => {
           return {
              pathname: "/testroute"
           };
        })
     }));

    beforeEach(() => {
        div = document.createElement('div');

        props = {}
    });

    it('[SMOKE - DEEP] renders without crashing', () => {
        ReactDOM.render(<MasterContainer {...props} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('[SMOKE - SHALLOW] renders without crashing', () => {
        shallow(<MasterContainer {...props} />);
    });
})