import React, { Component, PropTypes } from 'react'
import NewTweet from './NewTweet'
import TweetList from './TweetList'

class MainPanel extends Component {
  render() {
    return (
      <div className="main-panel">
        {this.props.enableTweet
          ?<NewTweet
            name="Nova"
            username="jaynarol"
            addToTweetList={this.props.addToTweetList}
          />
          :null}
        <TweetList tweets={this.props.tweets} />
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