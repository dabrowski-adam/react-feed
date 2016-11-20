class StoryBox extends React.Component {
    render() {
        const now = new Date();
        const topicsList = [ 'HTML', 'JavaScript', 'React'];

        return (
            <div>
                <h3>Story Box</h3>
                <p className="lead">Current time: {now.toTimeString()}</p>
                <ul>
                    {topicsList.map( topic => <li>{topic}</li>)}
                </ul>
                <CommentBox />
            </div>
        );
    }
}

class Comment extends React.Component {

    render() {
        return (
        <div className="comment">
            <p className="comment-header">{this.props.author}</p>
            <p className="comment-body">
                {this.props.body}
            </p>
            <div className="comment-footer">
                <a href="#" className="comment-footer-delete">
                    Delete comment
                </a>
            </div>
        </div>
        );
    }
}

class CommentBox extends React.Component {
    _getCommentsTitle(commentCount) {
        if (commentCount === 0) {
            return 'No comments yet';
        } else if (commentCount === 1) {
            return '1 comment';
        } else {
            return `${commentCount} comments`;
        }
    }

    _getComments() {
        const commentList = this.state.comments;

        return commentList.map((comment) => {
            return (
                <Comment author={comment.author} body={comment.body} key={comment.id} />
            );
        });
    }

    _handleClick() {
        this.setState({
            showComments: !this.state.showComments
        });
    }

    _addComment(author, body) {
        const comment = {
            id: this.state.comments.length + 1,
            author, 
            body
        };
        this.setState({
            comments: this.state.comments.concat([comment])
        });
    }

    constructor() {
        super();
        this.state = {
            showComments: false, 
            comments: [
                { id: 1, author: "Morgan Freeman", body: "I like toast."},
                { id: 2, author: "Katherine Jones", body: "I'm sexy."}
            ]
        };
    }
    
    render() {
        const comments = this._getComments();
        const commentsTitle = this._getCommentsTitle(comments.length);
        let commentNodes;
        let buttonText = 'Show comments';
        if (this.state.showComments) {
            commentNodes = <div className="comment-list">{comments}</div>;
            buttonText = 'Hide comments';
        }

        return (
        <div className="commentBox">
            <CommentForm addComment={this._addComment.bind(this)}/>
            <h3>Comments</h3>
            <h4 className="comment-count">{commentsTitle}</h4>
            <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
            {commentNodes}
        </div>
        );
    }
}

class CommentForm extends React.Component {
    _handleSubmit(event) {
        event.preventDefault();
        let author = this._author;
        let body = this._body;

        this.props.addComment(author.value, body.value);
    }

    render() {
        return (
            <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
                <label>Join the discussion</label>
                <div className="comment-for-fields">
                    <input placeholder="Name:" ref={(input) => this._author = input } />
                    <textarea placeholder="Comment: " ref={(textArea) => this._body = textArea }></textarea>
                </div>
                <div className="comment-form-actions">
                    <button type="submit">
                        Post comment
                    </button>
                </div>
            </form>
        );
    }
}

ReactDOM.render(
    <StoryBox/>, document.getElementById('story-app')
);