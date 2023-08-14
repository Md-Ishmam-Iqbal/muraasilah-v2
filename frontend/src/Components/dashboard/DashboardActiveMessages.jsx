import { PencilSquareIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const DashboardActiveMessages = () => {
  return (
    <section className="flex flex-col max-h-screen h-screen">
      <header className="flex justify-between py-5 items-center border-slate-200 border-b-2 bg-slate-300">
        <h1 className="flex justify-around items-center">
          <UserCircleIcon className="h-14 w-14 mx-2 stroke-2 fill-slate-50" />
          <span className="text-xl font-normal font-sans">
            Active User name
          </span>
        </h1>
      </header>
      <section className="grow flex justify-center items-center">
        <div>Messages</div>
      </section>
      <input
        type="text"
        placeholder="Type a message"
        className="p-2 m-5 border-2 border-slate-300 br-5 rounded-md"
      />
    </section>
  );
};

export default DashboardActiveMessages;
