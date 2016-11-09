import React from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileDetail from './ProfileDetail'
import ProfileFollow from './ProfileFollow'

const Profile = (props) => (
    <div className="profile">
        <ProfileHeader
            name={props.name}
            username={props.username}
        />
        <ProfileDetail
            numTweets={props.numTweets}
            numFollowers={props.numFollowers}
            numFollowings={props.numFollowings}
        />
        { props.isOwnProfile
            ? null
            : <ProfileFollow
            isFollowing={props.isFollowing}
            handleToggleFollow={()=>{}}
        /> }
    </div>

)

export default Profile