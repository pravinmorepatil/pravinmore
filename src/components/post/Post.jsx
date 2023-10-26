import { Link } from 'react-router-dom';
import './post.css';

const Post = ({post}) => {

  const deploy = "https://devstop.onrender.com";
  const local = "http://localhost:5000"
  const PF = deploy + "/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}

export default Post
