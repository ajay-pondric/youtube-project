const Comment = ({data}) => {
  const {name, comment} = data;
  return(
    <div className="comment">
      <h5>{name}</h5>
      <h5>{comment}</h5>
    </div>
  );
};

export default Comment;
