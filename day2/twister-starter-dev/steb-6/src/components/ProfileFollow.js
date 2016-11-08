import React from 'react'
import classnames from 'classnames'


const ProfileFollow = ({isFollowing, handleToggleFollow}) => {

    const btnClass = classnames('btn btn-lg', {
        'btn-danger': isFollowing,
        'btn-default': !isFollowing,
    })

    return (
        <div className="action last-section">
            <input type="button" className={btnClass} value="Follow"/>
        </div>

    )
}

export default ProfileFollow