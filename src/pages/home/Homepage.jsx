import { useState,useEffect } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import './homepage.css';
import axios from 'axios';
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts , setPosts] = useState([]);
  const {search} = useLocation();

  const deploy = "https://devstop.onrender.com";
  const local = "http://localhost:5000";

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get( deploy + "/api/posts"+search)
      setPosts(res.data)
    }
    fetchPosts()
  },[search]);
  return (
    <>
    <Header />
    <div className="home">
      <Posts posts={posts}/>
      {/* <Post /> */}
      <Sidebar />
    </div>
    </>
  )
}

export default Home
