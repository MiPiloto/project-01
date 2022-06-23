import { Button } from '.';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
  it('should render the button with text "Load More"', () => {
    render(<Button text="Load More" />);

    expect.assertions(1);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load More" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    userEvent.click(button);
    // fireEvent.click(button);

    expect(fn).toHaveBeenCalled();
  });

  it('should be disabled when disabled is true', () => {
    render(<Button text="Load More" disabled={true} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    render(<Button text="Load More" disabled={false} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeEnabled();
  });

  it('should match the snapshot', () => {
    const { container } = render(<Button text="Load More" disabled={false} />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });
});
