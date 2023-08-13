const DashboardShell = () => {
  return (
    <div className="grid grid-cols-4">
      <section className="col-span-1">
        <header>
          <h1 className="py-5">
            <span>Avatar</span>User name
          </h1>
          <div>Write new message icon</div>
        </header>
        <section>Search for chat</section>
        <section>Chats with other users</section>
      </section>
      <section className="col-span-3 bg-gray-300">
        <h1 className="py-5">
          <span>Avatar</span>Active user name
        </h1>
        <section>Messages</section>
        <input type="text" placeholder="type a message" />
      </section>
    </div>
  );
};

export default DashboardShell;
