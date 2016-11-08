import React, { Component, PropTypes } from 'react'
import NewTweet from './NewTweet'
import TweetList from './TweetList'

class MainPanel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: 'jaynarol',
            tweets: [],
        }
        this.addToTweetList = this.addToTweetList.bind(this)
    }

    componentDidMount() {
        const uri = 'http://192.168.31.106:3000/api/tweets'
        const filter = `{ "where": { "username": "${this.state.username}" }}`
        fetch(`${uri}?filter=${filter}`)
            .then(response => response.json())
            .then(tweets => {
                this.setState({
                    tweets: tweets
                })
            })
    }

    addToTweetList(tweet) {
        let tweetWithId = tweet
        tweetWithId.id = this.state.tweets.length
        this.setState({
            tweets: [
                ...this.state.tweets,
                tweetWithId,
            ]
        })
    }


    render() {
        return (
            <div className="main-panel">
                {this.props.enableTweet
                    ? <NewTweet
                    name="Akkaradech"
                    username={this.state.username}
                    addToTweetList={this.addToTweetList}
                />
                    : null}
                <TweetList tweets={this.state.tweets}/>
            </div>
        )
    }
}

MainPanel.propTypes = {
  enableTweet: PropTypes.bool,
}

MainPanel.defaultProps = {
  enableTweet: true,
}
export default MainPanel