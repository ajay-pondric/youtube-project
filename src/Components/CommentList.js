import Comment from "./Comment";

const CommentList = ({comments}) => {
  return(
    <div className="comment-list">
      {
        comments.map((comment , i) => <div key={i} className="comment-div">
          <Comment data={comment}/>
          <div className="reply">
        <CommentList comments={comment.reply}/>
      </div>
        </div>)
      }
    </div>
  );
};

export default CommentList;
