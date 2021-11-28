import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

let userToken: any;

const decodeUser = () => {
  if(!userToken){
    return;
  }
  const decoded = jwt_decode(userToken);

  return decoded;
}

const socket = io("http://localhost:8000");

socket.on("connect", () => {
  socket.emit('connectUser', {connect: true})
});

socket.on("disconnect", () => {
  socket.emit('connectUser', {connect: false})
});

const Home = () => {
  const [userName, setUser] = useState<any>(null);
  
  const [chat, setChat] = useState<any>(null);
  const [userMessage, setMessage] = useState<any>({message: ''})

  const changeValue = (e: any) => {
    const {name, value} = e.target;
    
    setMessage({
      ...userMessage,
      [name]: value
    })
  }

  const submitMessage = (e: any) => {
    e.preventDefault();
    const {message} = userMessage;
    
    if(userName.nickname && message){
      socket.emit('message', userName.nickname, message);
      
      return setMessage({message: ''})
    }
  }

  useEffect(() => {
    socket.on('serverMessage', (data: any) => {
      console.log(data);
      setChat(data);
    })
  }, [socket])

  useEffect((): any => {
    if (typeof document !== 'undefined') {
      userToken = document.cookie.split(' ')[0].split('=')[1];

      if(!userToken){
        return;
      }

      let user = decodeUser();
  
      if(!user){
        return;
      }
      
      setUser(user);
    }
  }, [])

  return(
    <>
      <h1 className="text-3xl flex justify-center my-5 font-extrabold text-white">Hello chat page</h1>
      <div className="h-64 bg-white pl-5 mx-5 overflow-scroll flex flex-col pt-5">
        {chat ?
          <div>
            {chat.map(({name, message}: any, index: number) => (
              <>
                {name == userName.nickname ? 
                  <div className="flex justify-end mr-4" key={index}>
                    <div className="flex bg-blue-300 px-2 py-1 rounded-full">
                      {/* <h2 className="mr-2">{name}: </h2> */}
                      <h1>{message}</h1>
                    </div>
                  </div>
                : 
                  <div className="flex" key={index}>
                    <div className="flex bg-gray-200 px-2 py-1 rounded-full">
                      {/* <h2>{name}: </h2> */}
                      <h1>{message}</h1>
                    </div>
                  </div>
                }
              </>
            ))}
          </div>
        :
          <h1>No messages</h1>
        }
      </div>
      <form onSubmit={submitMessage}>
        <input type="text" name="message" className="inputStyle" placeholder="Enter your message" value={userMessage.message} onChange={changeValue} />
        <button className="buttonStyle shapeBg">Submit message</button>
      </form>
    </>
  )
} 

export default Home;