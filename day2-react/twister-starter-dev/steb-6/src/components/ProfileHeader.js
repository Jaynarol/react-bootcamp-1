import React from 'react'

const ProfileHeader = ({name, username}) => (
    <div className="header">
        <div className="name">{name}</div>
        <div className="screen-name">@{username}</div>
    </div>


)

export default ProfileHeader