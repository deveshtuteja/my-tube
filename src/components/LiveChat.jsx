import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      console.log("Api Polling");
      dispatch(
        addMessage({
          name: "Devesh Tuteja",
          message: "Lorem Ipsum Dolor Site",
        })
      );
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <div className="p-2 ml-2 border border-black h-[500px] bg-slate-100 rounded-lg overflow-y-scroll">
      <h1 className="font-bold text-2xl pb-2">Live Chat</h1>
      {ChatMessages.map((c, index) => (
        <ChatMessage name={c.name} message={c.message} key={index} />
      ))}
    </div>
  );
};

export default LiveChat;
