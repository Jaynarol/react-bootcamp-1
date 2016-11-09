import React, {Component} from 'react'
import LeftPanel from './LeftPanel'
import MainPanel from './MainPanel'

class BodyContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: 'jaynarol',
            tweets: [],
            numFollowers: 0,
            numFollowings: 0,
            isFollowing: false,
        }
    }

    render() {

        const props = {
            name: 'Nova',
            username: 'jaynarol',
            numTweets: 13,
            numFollowers: 5361124,
            numFollowings: 6,
            isFollowing: false,
        }

        return (
            <div className="container body">
                <LeftPanel  {...props} />
                <MainPanel/>
            </div>
        )
    }

}

export default BodyContainer