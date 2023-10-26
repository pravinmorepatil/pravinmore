import axios from 'axios';
import { useEffect, useState } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const [cats , setCats] = useState([]);

    const deploy = "https://devstop.onrender.com";
    const local = "http://localhost:5000";

    useEffect(()=>{
        const getCat = async () =>{
            const res = await axios.get(deploy + "/api/categories")
            setCats(res.data)
        }
        getCat()
    },[])
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://cdn-icons-png.flaticon.com/512/236/236832.png" alt="My Avatar" />
            <p>
                Adipisicing magna enim adipisicing enim incididunt ad incididunt elit id pariatur fugiat. Consectetur commodo adipisicing tempor proident.
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {
                    cats.map((c)=>(
                        <li className="sidebarListItem">
                            <Link to={`/?cat=${c.name}`} className="link">
                                {c.name}
                            </Link>
                        </li>
                    ))
                }
                {/* <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li> */}
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW ME</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon  fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
            </div>
        </div>

    </div>
  )
}

export default Sidebar
