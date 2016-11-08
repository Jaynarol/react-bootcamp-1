import React, { Component } from 'react'

class NewTweet extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tweetText: '',
    }
    this.addTweet = this.addTweet.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this)
    this.handleTweetClick = this.handleTweetClick.bind(this)
  }

  addTweet(tweet) {
    fetch('http://192.168.31.106:3000/api/tweets', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tweet)
    })
        .then(response => response.json())
        .then((data) => {
          this.setState({
            tweetText: '',
          })
          this.props.addToTweetList(data)
        })
  }

  handleOnChange(event) {
    this.setState({
      tweetText: event.target.value
    })
  }

  handleOnKeyDown(event) {
    if (event.keyCode != 13) return
    event.preventDefault()
    this.addTweet(this.getTweet())
  }

  handleTweetClick(event) {
    this.addTweet(this.getTweet())
  }

  getTweet() {
    return {
      name: this.props.name,
      username: this.props.username,
      tweetText: this.state.tweetText,
    }
  }

  render() {
    return  (
      <div className="new-tweet">
        <form className="form-horizontal">
          <div className="form-group">
            <div className="tweet-text col-sm-10">
              <input
                type="text"
                id="tweetText"
                className="form-control"
                placeholder="What's happening"
                onChange={this.handleOnChange}
                onKeyDown={this.handleOnKeyDown}
                value={this.state.tweetText}
              />
            </div>
            <div className="col-sm-2">
              <input
                type="button"
                className="btn btn-default"
                onClick={this.handleTweetClick}
                value="Tweet"
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default NewTweet