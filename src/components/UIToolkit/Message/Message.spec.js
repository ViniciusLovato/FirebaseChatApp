import React from 'react';
import { shallow } from 'enzyme';

import Message from './Message';

describe('<Message />', () => {
  it('should render on the left ', () => {
    const wrapper = shallow(<Message position='start' msg={{message: 'hello, sir'}}/>);
    expect(wrapper.find('.start').length).toBe(1);
  });

  it('should render on the right ', () => {
    const wrapper = shallow(<Message position='end' msg={{message: 'hello, sir'}}/>);
    expect(wrapper.find('.end').length).toBe(1);
  });

  it('should render an <Avatar/> component ', () => {
    const wrapper = shallow(<Message position='end' msg={{message: 'hello, sir'}}/>);
    expect(wrapper.find('Avatar').length).toBe(1);
  });

  it('should render a <MessageBubble/> component ', () => {
    const wrapper = shallow(<Message position='end' msg={{message: 'hello, sir'}}/>);
    expect(wrapper.find('MessageBubble').length).toBe(1);
  });
})