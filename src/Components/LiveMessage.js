const LiveMessage = ({name, message}) => {
  return(
    <div className="live-message">
      <h6>{name}</h6>
      <p>{message}</p>
    </div>
  );
};

export default LiveMessage;
