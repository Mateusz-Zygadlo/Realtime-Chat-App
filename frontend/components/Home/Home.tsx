import { io } from "socket.io-client";
import { useState } from "react";

const Home = () => {
  const socket = io("http://localhost:8000");
  const [userMessage, setMessage] = useState({
    name: socket.id,
    message: '',
  })

  const changeValue = (e: any) => {
    const {name, value} = e.target;
    
    setMessage({
      ...userMessage,
      [name]: value
    })
  }

  const submitMessage = (e: any) => {
    e.preventDefault();
    const {name, message} = userMessage;
    socket.emit('message', {name}, {message}, (response: any) => {
      console.log(response.status);
    });
    setMessage({message: '', name})
  }

  return(
    <>
      <h1 className="text-3xl flex justify-center my-5 font-extrabold text-white">Hello chat page</h1>
      <div className="h-64 shapeColor pl-5 mx-5">
        <h1>Chat place</h1>
      </div>
      <form onSubmit={submitMessage}>
        <input type="text" name="message" className="inputStyle" placeholder="Enter your message" value={userMessage.message} onChange={changeValue} />
        <button className="buttonStyle shapeBg">Submit message</button>
      </form>
    </>
  )
} 

export default Home;