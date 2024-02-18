import Button from "./Button";

const ButtonList = () => {
 
  const list = ["All", "Gaming", "Live", "Music", "News", "Cricket", "Comedy", "Funny Short", "Romantic Songs", "Indian Pop Music", "Hindi Music", "Rapping", "Dance"];

  return (
    <div className="list">
      {list.map((name) => (<Button key={name}  name={name}/>))}
      
    </div>
  );
};

export default ButtonList;
