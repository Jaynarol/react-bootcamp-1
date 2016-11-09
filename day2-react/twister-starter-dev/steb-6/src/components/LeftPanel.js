import React from 'react'
import Profile from './Profile'

const LeftPanel = (props) => (
    <div className="left-panel">
        <Profile {...props} />
    </div>
)

export default LeftPanel