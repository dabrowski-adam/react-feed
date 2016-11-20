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
        const commentList = [
            { id: 1, author: "Morgan Freeman", body: "I like toast."},
            { id: 2, author: "Katherine Jones", body: "I'm sexy."}
        ];

        return commentList.map((comment) => {
            return (
                <Comment author={comment.author} body={comment.body} key={comment.id} />
            );
        });
    }
    
    render() {
        const comments = this._getComments();
        const commentsTitle = this._getCommentsTitle(comments.length);

        return (
        <div className="commentBox">
            <h3>Comments</h3>
            <h4 className="comment-count">{commentsTitle}</h4>
            <div className="comment-list">
                {comments}       
            </div>
        </div>
        );
    }
}

ReactDOM.render(
    <StoryBox/>, document.getElementById('story-app')
);