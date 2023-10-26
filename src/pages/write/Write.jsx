import { useContext, useState } from 'react'
import './write.css';
import axios from 'axios';
import { Context } from "../../context/Context";;

const Write = () => {
    const[title , setTitle] = useState("");
    const[desc , setDesc] = useState("");
    const[file , setFile] = useState(null);
    const {user} = useContext(Context);

    const deploy = "https://devstop.onrender.com";
    const local = "http://localhost:5000";

  const handleSubmit = async (e)=> {
    e.preventDefault();
    const newPost = {
      username : user.username,
      title,
      desc,
    }
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name",filename);
      data.append("file",file);
      newPost.photo = filename;
      try{
        await axios.post( deploy +  "/api/upload",data);
      }catch(err){
        console.log(err)
      }
    }
    try{
      const res = await axios.post( deploy + "/api/posts",newPost);
      window.location.replace("/post/" + res.data._id);
    }catch(err){
      console.log(err);
    }
  }

  
  return (
    <div className='write'>
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
        <form  className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-sharp fa-solid fa-plus"></i>
                </label>
                <input type="file" name='file' id='fileInput' style={{display: 'none'}} onChange={(e)=> setFile(e.target.files[0])} />
                <input type="text" className='writeInput' autoFocus={true} placeholder='Title' onChange={(e)=> setTitle(e.target.value)} />
            </div>
            <div className="writeFormGroup">
                <textarea name="" className='writeInput writeText' id="" cols="30" rows="10" onChange={(e)=> setDesc(e.target.value)}></textarea>
            </div>
            <button className='writeSubmit'type='submit'>Publish</button>
        </form>
    </div>
  )
}

export default Write
