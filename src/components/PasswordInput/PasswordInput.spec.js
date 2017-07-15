import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput';
import {shallow} from 'enzyme';

test('toggles input type when show/hide password clicked', ()=> {
    const wrapper = shallow(<PasswordInput
    htmlId="test"
    name="test"
    value=""
    onChange={()=>{}}
    showVisibilityToggle
    />
    );
    wrapper.find('a').simulate('click');
    
});

test('hides password quality by default', () => {
    const tree = renderer.create(<PasswordInput
        htmlId="test"
        name="test"
        onChange={()=>{}}
        value="Uisi38#8iad"/>).toJSON();
    expect(tree).toMatchSnapshot();
});

