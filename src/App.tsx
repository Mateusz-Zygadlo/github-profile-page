import React, { useState } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';

interface Username{
  [key: string]: string
}

const App: React.FC = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean | null>(null);  
  const [user, setUser] = useState<any>(null);
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
    <div className="w-screen h-screen flex flex-col items-center">
      <form className="pt-32 px-16">
        <h1 className="text-5xl font-semibold mb-10">Github profile</h1>
        <input type="text" name="name" placeholder="Search a github user" onChange={changeName} value={username.name} className="border-b-2 border-black mr-4 outline-none focus:border-blue-300 hover:border-gray-200 transition-colors" />
        <button type="submit" onClick={(e)=>{findUser(e, username.name)}} className="border-b-2 border-black text-2xl px-1 hover:border-gray-200 transition-colors">Search</button>
      </form>
      <div className="mt-10">
        {isLoading == null ? (
          null
        ): !isLoading ? (
          <>
            {isError ? (
              <h1 className="text-3xl font-extrabold">Not found user</h1>
            ): user != null ? (
              <div className="w-screen flex justify-center">
                <UserCard
                  avatar_url={user.avatar_url}
                  name={user.name}
                  bio={user.bio}
                  followers={user.followers}
                  public_gists={user.public_gists}
                  public_repos={user.public_repos}
                  html_url={user.html_url} />
              </div>
            ): null }
          </>
        ): <h1 className="text-3xl font-extrabold">Loading...</h1>}
      </div>
    </div>
  );
}

export default App;