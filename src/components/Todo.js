/*
    react custome components should start with capital letter
    react destinguish between built in tags and custome tags by syntax capitalize first charachter
*/

/*
    in order to pass values to component we use prop concept here prop is a javascript object contain
    every attributes added to component when we call it
    props concept allow component to accept data from outside
*/

/*
    react treat all this body as html content so in order to show variables passed as prop we add {}
    inside {} every thing treated as javascript
*/

/*
    we can add onClick event for the button by user onClick attributes and after that define annynemous
    inline function like:
        onClick={ () => { // function body } }   we can use this syntax in modern javascript
    or using arrow function syntax like:
        onClick={ function(){  function body } }
    or point to another function like:
        inside component function we define our function like tradional javascript functions:
        function delectHandler(){
            // body
        }

        add attribute onClick={function name only witout ()}
        when we use () after function name then this means the function will executed when evaluate 
        component body 
 */

function Todo(props) {
  // name convenient delectHandler
  function delectHandler() {
    console.log(props.text);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={delectHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
