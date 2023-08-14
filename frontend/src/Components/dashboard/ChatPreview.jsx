const ChatPreview = ({ avatar, username, lastMessage }) => {
  const MAX_WORD_COUNT = 5; // Adjust this number as needed

  const words = lastMessage.split(" ");

  const truncatedMessage =
    words.length > MAX_WORD_COUNT
      ? words.slice(0, MAX_WORD_COUNT).join(" ") + "..."
      : lastMessage;

  return (
    <div className="p-2 bg-slate-200 border-b-slate-400 border-2 h-1/6 overflow-hidden">
      <h1 className="flex justify-left items-center">
        {avatar}
        {username}
      </h1>
      <p></p>
      <p className="pt-10 pb-0 text-slate-500">{truncatedMessage}</p>
    </div>
  );
};

export default ChatPreview;
