import React from 'react';
import { shallow } from 'enzyme';

import MessageBubble from './MessageBubble';

describe('<MessageBuble />', () => {
  it('should render a simple tag content as a child', () => {
    const string = "Hello, sir";

    const wrapper = shallow(<MessageBubble><h1>{string}</h1></MessageBubble>);
    expect(wrapper.find('h1').text()).toBe(string);
  });

  it('should render a React component as a child', () => {
    const NewComponent =  () => (<span>New Component</span>);

    const wrapper = shallow(<MessageBubble><NewComponent/></MessageBubble>);
    expect(wrapper.find('NewComponent').length).toBe(1);
  })
})