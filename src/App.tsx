import Images from './components/Images';

const App = () => {
  return(
    <div className="grid grid-cols-4 w-screen h-screen">
      <div className="col-start-0 col-span-3 bg-black">
        <Images />
      </div>
      <div></div>
    </div>
  )
}

export default App;