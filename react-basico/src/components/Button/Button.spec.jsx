import { fireEvent, render, screen } from '@testing-library/react';
import Button from '.';

describe('<Button />', () => {
  // Text
  it("should render the button with text 'Load More Posts' ", () => {
    render(<Button text="Load More Posts" />);

    // expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more posts/i });

    expect(button).toHaveAttribute('class', 'btn');
    expect(button).toBeInTheDocument();
  });

  // Onclick
  it('should call function on button click', () => {
    const fn = jest.fn();

    render(<Button onClick={fn} text="Load More Posts" />);

    const button = screen.getByRole('button', { name: /load more posts/i });

    fireEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  // disabled
  it("should disabled when 'disabled' is true", () => {
    render(<Button disabled={true} text="Load More Posts" />);

    const button = screen.getByRole('button', { name: /load more posts/i });

    expect(button).toBeDisabled();
  });

  // emabled
  it("should enabled when 'disabled' is false", () => {
    render(<Button disabled={false} text="Load More Posts" />);

    const button = screen.getByRole('button', { name: /load more posts/i });

    expect(button).toBeEnabled();
  });
});
