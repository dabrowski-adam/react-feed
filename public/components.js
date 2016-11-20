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
    
    
    render() {

        return (
        <div className="commentBox">
            <h3>Comments</h3>
            <h4 className="comment-count">??? Comments</h4>
            <div className="comment-list">
                <Comment 
                    author="Dude McDudeson" body="Cool stuff, man!" />
                <Comment 
                    author="Katherine Jones" body="I'm sexy and I know it" />           
            </div>
        </div>
        );
    }
}

ReactDOM.render(
    <StoryBox/>, document.getElementById('story-app')
);