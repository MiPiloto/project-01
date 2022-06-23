import { render, screen } from '@testing-library/react';
import { TextInput } from '.';
import userEvent from '@testing-library/user-event';

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'test'} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input).toBeInTheDocument();

    expect(input.value).toBe('test');
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    const value = 'test value';

    userEvent.type(input, value);

    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match the snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} />);

    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });
});
