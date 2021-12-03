import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Username{
  [key: string]: string
}

const App = () => {
  const [user, setUser] = useState<any>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean | null>(null);  
  const [username, setUsername] = useState<Username>({
    name: '',
  });

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setUsername({...username, [name]: value})
  };

  const findUser = async (e: React.FormEvent<HTMLButtonElement>, name: string) => {
    e.preventDefault();
    setLoading(true);
    setIsError(false);
    
    try{
      const user = await axios.get(`https://api.github.com/users/${name}`);
      if(user.data){
        setUser(user.data);
      }
    }catch(err){
      setIsError(true);
    }
    setUsername({name: ''});
    setLoading(false);
  }
  
  return (
    <div className="w-full h-full">
      <div className="absolute top-0 left-0 w-screen h-screen backdrop-filter backdrop-blur-sm z-40">
        <form className="py-32 px-16">
          <h1 className="text-5xl font-semibold mb-10">Github profile</h1>
          <input type="text" name="name" placeholder="Search a github user" onChange={changeName} value={username.name} className="border-b-2 border-black mr-4 outline-none focus:border-blue-300 hover:border-gray-200 transition-colors" />
          <button type="submit" onClick={(e)=>{findUser(e, username.name)}} className="border-b-2 border-black text-2xl px-1 hover:border-gray-200 transition-colors">Search</button>
        </form>
        <div>
          {isLoading == null ? (
            null
          ): !isLoading ? (
            <>
              <h1 className="text-5xl px-20">Result</h1>
              {isError ? (
                <div>
                  <h1>Error</h1>
                </div>
              ): user != null ? (
                <div>
                  <h1>Work</h1>
                </div>
              ): null }
            </>
          ): <div>Loading</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
