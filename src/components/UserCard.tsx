interface User{
  avatar_url: 'string',
  name: 'string',
  bio: 'string' | null,
  followers: 'number',
  public_gists: number,
  public_repos: number,
  html_url: 'string',
}

const UserCard: React.FC<User> = ({ avatar_url, name, bio, followers, public_gists, public_repos, html_url }) => {
  return(
    <div className="cardWidth border-2 border-black flex p-5">
      <img src={avatar_url} className="w-16 h-16 rounded-full mt-2" alt="avatar" />
      <div className="mx-5">
        <a href={html_url} className="text-3xl font-extrabold">{name}</a>
        <p>{bio}</p>
        <div className="flex justify-between font-semibold mt-2">
          <p className="mr-2">Followers: [{followers}]</p>
          <p className="mr-2">gists: [{public_gists}]</p>
          <p>repos: [{public_repos}]</p>
        </div>
      </div>
    </div>
  )
}

export default UserCard;