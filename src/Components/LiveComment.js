import { useEffect, useState } from "react";
import LiveMessage from "./LiveMessage";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/help";

const LiveComment =  () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);
 
  useEffect(() => {
   const i = setInterval(() => {
    // API Polling
   
  
   dispatch(setMessage({
    name: generateRandomName(),
    messages: makeRandomMessage(20),
   }));
  }, 1500);

   return () => clearInterval(i);
  }, []);

  return(
    <>
    <div className="live-comment">
      <h3>live</h3>
      {chatMessage.map((c, i) => <LiveMessage key={i} name={c.name} message={c.messages}/>)}
    </div>
    <form onSubmit={((e) => {
      e.preventDefault();
      dispatch(setMessage({
        name: "Ajay Baba",
        messages: liveMessage,
      }));
      setLiveMessage(" ");
    })}
      className="input">
      <input value={liveMessage} type="text" onChange={(e) => {
        setLiveMessage(e.target.value);
      }} />
      <button >send</button>
    </form>
    </>
  );
};

export default LiveComment;
