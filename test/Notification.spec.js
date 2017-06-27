import React from 'react';
import RsuiteInputNumber from '../src/index';
import { shallow } from 'enzyme';

const setup = () => {
  const state = {
    value: 0,
  };

  // 模拟 props
  const props = {
    defaultValue: 34,
    step: 1,
    max: 10,
    min: 0,
    onChange: jest.fn(value => {
    })
  };
  const wrapper = shallow(<RsuiteInputNumber {...props} />);

  return {
    state,
    props,
    wrapper
  };
};

describe('components', () => {
  describe('InputNumber', () => {
    const { wrapper, props, state } = setup();

    it('should render input', () => {
      expect(wrapper.find('input').length).toBe(1);
    });

    it('default value should be 34', () => {
      expect(wrapper.instance().props.defaultValue).toBe(34);
    });

    // it('press minus button, onChange callback should not called', () => {
    //   wrapper.find('button').last().simulate('click');
    //   expect(wrapper.instance().props.onChange).not.toBeCalled();
    // });

    it('press add button should be called', () => {
      wrapper.find('button').last().simulate('click');
      expect(props.onChange).toBeCalled();
    });
  });

});


