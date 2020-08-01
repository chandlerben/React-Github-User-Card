import React from 'react';
import './User-Card.css';


const UserCard = props => {
    const { userData } = props
    console.log('The component is working.')
    console.log("This is the userData", userData)
    return (
        <div class="card">
            <img src={userData.avatar_url} />
            <div class="card-info">
                <h3 class="name">{userData.name}</h3>
                <p class="username">{userData.login}</p>
                <p>Location: {userData.location}</p>
                <p>Profile:
      <a href={userData.html_url}>{userData.html_url}</a>
                </p>
                <p>Followers: {userData.followers}</p>
                <p>Following: {userData.following}</p>
                <p>Bio: {userData.bio}</p>
            </div>
        </div >
    )
}

export default UserCard;