import React from 'react'

const ProfileDetail = ({numTweets, numFollowers, numFollowings}) => (
    <div className="detail last-section">
        <div className="col">
            <div className="text">Tweets</div>
            <div className="number">{numTweets}</div>
        </div>
        <div className="col">
            <div className="text">Followers</div>
            <div className="number">{numFollowers}</div>
        </div>
        <div className="col">
            <div className="text">Following</div>
            <div className="number">{numFollowings}</div>
        </div>
    </div>
)

export default ProfileDetail