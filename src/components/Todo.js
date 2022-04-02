/*
    react custome components should start with capital letter
    react destinguish between built in tags and custome tags by syntax capitalize first charachter
*/

/*
    in order to pass values to component we use prop technique here prop is a javascript object contain
    every attributes added to component when we call it
*/
function Todo(prop) {
  return (
    <div className="card">
      <h2>Title</h2>
      <div className="actions">
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}

export default Todo;
