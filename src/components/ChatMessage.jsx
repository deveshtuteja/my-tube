const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex gap-2 py-1 items-center shadow-sm">
      <img
        className="w-8 h-8"
        src="https://cdn-icons-png.flaticon.com/512/9203/9203764.png"
        alt="profile-icon"
      />
      <span className="font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
