import { render, screen } from '@testing-library/react';
import PostCard from '.';
import { PostCardPropsMock } from './mock';

const props = PostCardPropsMock;

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    const { debug } = render(
      <PostCard key={props.id} id={props.id} title={props.title} cover={props.cover} body={props.body} />,
    );

    // "console.log" do método render
    // debug()

    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument();
  });
});
