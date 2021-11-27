import { io } from "socket.io-client";

const Home = () => {
  const socket = io("http://localhost:8000");

  socket.on("connect", () => {
    console.log(true);
  })

  const emitSocket = () => {
    socket.emit("message", "hello")
  }

  return(
    <>
      <h1 className="text-3xl flex justify-center my-5 font-extrabold text-white">Hello chat page</h1>
      <button onClick={emitSocket} className="buttonStyle shapeBg">Socket emit</button>
    </>
  )
} 

export default Home;