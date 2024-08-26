import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, generateRandomStrings } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomStrings(25) + " 🚀",
        })
      );
    }, 1200);
    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <>
      <h1 className="font-bold text-2xl p-2">Live Chat</h1>
      <div className="p-2 ml-2 border border-black h-[500px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse dark:bg-stone-900">
        {ChatMessages.map((c, index) => (
          <ChatMessage name={c.name} message={c.message} key={index} />
        ))}
      </div>
      <form
        className="w-full mx-2 my-1 py-1"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Devesh Tuteja",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          placeholder="type your message here..."
          className="w-[400px] px-2 border border-black rounded-lg  dark:text-white dark:bg-gray-800"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100 rounded-lg dark:bg-gray-400 dark:hover:bg-gray-600">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
