import { useState, useEffect } from 'react';
import { loadPosts } from '../../utils/loadPosts';
import Posts from '../../components/Posts';
import Button from '../../components/Button';
import SearchInput from '../../components/SearchInput';
import './styles.css';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  // const [postsPerPage, setPostsPerPage] = useState(2);
  const [postsPerPage] = useState(2);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;

  useEffect(() => {
    (async () => {
      const postsAndPhotos = await loadPosts();

      setPosts(postsAndPhotos.slice(page, postsPerPage));
      setAllPosts(postsAndPhotos);
    })();
  }, []);

  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLocaleLowerCase());
      })
    : posts;

  const handleChange = (e) => {
    const { value } = e.target;

    setSearchValue(value);
  };

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);

    setPage(nextPage);
  };

  return (
    <div className="container">
      <div className="search-container">
        <SearchInput searchValue={searchValue} handleChange={handleChange} />

        {!!searchValue && <p>Search Value: {searchValue}</p>}
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

      {filteredPosts.length === 0 && <p>Nada encontrado na busca</p>}

      <div className="button-container">
        {!searchValue && <Button disabled={noMorePosts} onClick={loadMorePosts} text="Load More Posts" />}
      </div>
    </div>
  );
};

// Class Component
// class Home2 extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             posts: [],
//             allPosts: [],
//             page: 0,
//             postsPerPage: 2,
//             searchValue: "",
//         };
//     }

//     async componentDidMount() {
//         const { page, postsPerPage } = this.state;

//         const postsAndPhotos = await loadPosts();

//         this.setState({
//             posts: postsAndPhotos.slice(page, postsPerPage),
//             allPosts: postsAndPhotos,
//         });
//     }

//     loadMorePosts = () => {
//         const { page, postsPerPage, allPosts, posts } = this.state;
//         const nextPage = page + postsPerPage;
//         const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

//         posts.push(...nextPosts);

//         this.setState({
//             posts,
//             page: nextPage,
//         });
//     };

//     handleChange = (e) => {
//         const { value } = e.target;

//         this.setState({
//             searchValue: value,
//         });
//     };

//     render() {
//         const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
//         const noMorePosts = page + postsPerPage >= allPosts.length;

//         const filteredPosts = !!searchValue
//             ? allPosts.filter((post) => {
//                   return post.title
//                       .toLowerCase()
//                       .includes(searchValue.toLocaleLowerCase());
//               })
//             : posts;

//         return (
//             <div className="container">
//                 <div className="search-container">
//                     <SearchInput
//                         searchValue={searchValue}
//                         handleChange={this.handleChange}
//                     />

//                     {!!searchValue && <p>Search Value: {searchValue}</p>}
//                 </div>

//                 {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

//                 {filteredPosts.length === 0 && <p>Nada encontrado na busca</p>}

//                 <div className="button-container">
//                     {!searchValue && (
//                         <Button
//                             disabled={noMorePosts}
//                             onClick={this.loadMorePosts}
//                             text="Load More Posts"
//                         />
//                     )}
//                 </div>
//             </div>
//         );
//     }
// }

export default Home;
