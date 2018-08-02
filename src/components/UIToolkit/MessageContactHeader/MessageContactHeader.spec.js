import React from 'react';
import { shallow } from 'enzyme';

import MessageContactHeader from './MessageContactHeader';

describe('<MessageContactHeader />', () => {
  it('should render the user name', () => {
    const name = 'Firstname Lastname';

    const wrapper = shallow(<MessageContactHeader name={name} />);
    expect(wrapper.text()).toMatch(name);
  });

  it('should render lastSeen in minutes', () => {
    const lastSeen = '20';

    const wrapper = shallow(<MessageContactHeader  lastSeen={20}/>);
    expect(wrapper.text()).toMatch(`Last seen ${lastSeen} minutes ago`);
  });

})