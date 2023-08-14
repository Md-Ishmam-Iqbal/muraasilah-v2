import ChatPreview from "./ChatPreview";
import { UserCircleIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

const DashboardSidebar = () => {
  return (
    <section className="flex justify-center flex-col h-full">
      <header className="flex justify-between py-5 items-center">
        <h1 className="flex justify-around items-center">
          <UserCircleIcon className="h-14 w-14 mx-2 stroke-2 fill-indigo-400" />
          <span className="text-xl font-normal font-sans">User name</span>
        </h1>
        <PencilSquareIcon className="h-5 w-5 stroke-0 mx-5" />
      </header>
      <section className="grow-0">
        <input
          className="w-full px-3 py-2 border-slate-300 border-y-2"
          type="text"
          placeholder="Search for chat"
        />
      </section>
      <section className="bg-red-50 grow h-full">
        <ChatPreview
          avatar={
            <UserCircleIcon className="h-8 w-8 stroke-2 mx-2 fill-slate-400" />
          }
          username={"Username"}
          lastMessage={
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested"
          }
        />
        <ChatPreview
          avatar={
            <UserCircleIcon className="h-8 w-8 stroke-2 mx-2 fill-slate-400" />
          }
          username={"Username"}
          lastMessage={
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested"
          }
        />
        <ChatPreview
          avatar={
            <UserCircleIcon className="h-8 w-8 stroke-2 mx-2 fill-slate-400" />
          }
          username={"Username"}
          lastMessage={
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested"
          }
        />
        <ChatPreview
          avatar={
            <UserCircleIcon className="h-8 w-8 stroke-2 mx-2 fill-slate-400" />
          }
          username={"Username"}
          lastMessage={
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested"
          }
        />
        <ChatPreview
          avatar={
            <UserCircleIcon className="h-8 w-8 stroke-2 mx-2 fill-slate-400" />
          }
          username={"Username"}
          lastMessage={
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested"
          }
        />
        <ChatPreview
          avatar={
            <UserCircleIcon className="h-8 w-8 stroke-2 mx-2 fill-slate-400" />
          }
          username={"Username"}
          lastMessage={
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested"
          }
        />
      </section>
    </section>
  );
};

export default DashboardSidebar;
