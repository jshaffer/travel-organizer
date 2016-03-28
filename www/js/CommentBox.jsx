"use strict";

import React from "react"

export default class CommentBox extends React.Component {

    loadCommentsFromServer () {
        console.log("in loadCommentsFromServer");
        var self = this;
        $.ajax({
            url: self.props.url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                console.log("in success");
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    getInitialState() {
        console.log("in getInitialState");
        return {data: []};
    }

    componentWillMount() {
        console.log("in componentDidMount");

        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    }

    render() {
        console.log("in render");

        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm />
            </div>
        );
    }


}

class CommentList extends React.Component {
    render() {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
}

class CommentForm extends React.Component {
    render() {
        return (
            <form className="commentForm">
                <input type="text" placeholder="Your name"/>
                <input type="text" placeholder="Say something..."/>
                <input type="submit" value="Post"/>
            </form>
        );
    }
}

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        );
    }
}