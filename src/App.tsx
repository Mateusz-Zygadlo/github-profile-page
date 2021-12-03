const App = () => {
  return (
    <div className="w-full h-full">
      <div className="absolute top-0 left-0 w-screen h-screen backdrop-filter backdrop-blur-sm z-40">
        <div className="absolute top-40 left-40">
          <h1 className="text-6xl font-semibold mb-10">Github profile</h1>
          <input type="text" name="userName" placeholder="Search a github user" className="border-b-2 border-black mr-4 outline-none focus:border-blue-300 hover:border-gray-200 transition-colors" />
          <button className="border-b-2 border-black text-2xl px-1 hover:border-gray-200 transition-colors">Search</button>
        </div>
      </div>
    </div>
  );
}

export default App;
