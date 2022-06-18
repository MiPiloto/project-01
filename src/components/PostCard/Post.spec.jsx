import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock;

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    // const { debug } = render(<PostCard {...props} />);
    // debug();
    render(<PostCard {...props} />);

    // expect(screen.getByRole('img', { name: /title 1/i }))
    //   .toHaveAttribute('src', 'img/img.png');
    expect(screen.getByAltText(/title 1/i))
      .toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: 'title 1 1' }))
      .toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const { container } = render(<PostCard {...props} />);

    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();


  })
});