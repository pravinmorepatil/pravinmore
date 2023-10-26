import './setting.css'
import Sidebar from '../../components/sidebar/Sidebar';
import { useContext , useState } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';

const Setting = () => {
  const {user,dispatch} =useContext(Context);
  const[file , setFile] = useState(null);
  const[username , setUsername] = useState("");
  const[password , setPassword] = useState("");
  const[email , setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const PF = "http://localhost:5000/images/"

  const deploy = "https://devstop.onrender.com";
  const local = "http://localhost:5000";

  const handleSubmit = async (e)=> {
    e.preventDefault();
    dispatch({type : "UPDATE_START"});
    const UpdatedUser = {
      userID : user._id,
      username,
      email,
      password
    }
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name",filename);
      data.append("file",file);
      UpdatedUser.profilepicture = filename;
      try{
        const res = await axios.post(deploy + "/api/upload",data);
        dispatch({type : "UPDATE_SUCCESS",payload : res.data})
      }catch(err){
        dispatch({type : "UPDATE_FAILURE"})
        console.log(err)
      }
    }
    console.log(user)
    try{
      await axios.put( deploy + "/api/users/"+user._id,UpdatedUser);
      setSuccess(true); 
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className='setting'>
      <div className="settingWrapper">
        <div className="settingTitle">
            <span className="settingUpdateTitle">Update Your Account</span>
            <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className="settingForm" onSubmit={handleSubmit}>
            <label htmlFor="">Profile Picture</label>
            <div className="settingPP">
                <img src={file ? URL.createObjectURL(file) : PF + user.profilepicture} alt="" />
                <label htmlFor="fileInput">
                <i className="settingIcon fa-sharp fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display: 'none'}} onChange={(e)=> setFile(e.target.files[0])}/>
            </div>
            <label htmlFor="">Username</label>
            <input type="text" placeholder={user.username} onChange={(e)=>setUsername(e.target.value)}/>
            <label htmlFor="">Email</label>
            <input type="email" placeholder={user.email} onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="">password</label>
            <input type="password" placeholder=''onChange={(e)=>setPassword(e.target.value)}/>
            <button className="settingSubmit" type='submit'>Update</button>
            {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Setting
