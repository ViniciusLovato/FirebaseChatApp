import React from 'react';
import { shallow } from 'enzyme';

import Avatar from './Avatar';

describe('<Avatar />', () => {
  it('should render an <img/> tag', () => {
    const pic = 'https://lh5.googleusercontent.com/-tXZCIcKCsj4/AAAAAAAAAAI/AAAAAAAADAY/mOMsdBRjVMc/photo.jpg';
    const size = '80px';

    const wrapper = shallow(<Avatar pic={pic} size={size}/>);
    expect(wrapper.find('img').length).toBe(1);
  });
})