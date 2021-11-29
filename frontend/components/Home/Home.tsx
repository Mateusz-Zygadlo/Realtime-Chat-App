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
      setChat(data);
    })
  }, [socket])

  useEffect((): any => {
    if (typeof document !== 'undefined') {
      userToken = document.cookie.split(' ')[0].split('=')[1];
      
      let user = decodeUser();
    
      setUser(user);
    }
    socket.emit('chat');
  }, [])

  return(
    <>
      <h1 className="text-3xl flex justify-center my-5 font-extrabold text-white">Chat page</h1>
      <div className="h-64 bg-white pl-5 mx-5 overflow-y-scroll overflow-x-hidden flex flex-col py-5">
        {chat ?
          <div>
            {chat.map(({name, message}: any, index: number) => (
              <>
                {name == userName.nickname ? 
                  <div className="flex justify-end my-1" key={index}>
                    <div className="flex bg-blue-300 px-2 py-1 rounded-full mr-4">
                      {/* <h2 className="mr-2">{name}: </h2> */}
                      <h1>{message}</h1>
                    </div>
                  </div>
                : 
                  <div className="flex my-1" key={index}>
                    <div className="flex bg-gray-200 px-2 py-1 rounded-full mr-4">
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