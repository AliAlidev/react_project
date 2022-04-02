/*
  here App is a regular javascript script but the only deference is it return html code (jsx) code
*/

import Todo from "./components/Todo";
import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";

/*
  this is called react component which is a function can be reuseable in another places
  important note this function should return renderable body which can be rendered in the browser
 */

/*
  add Todo component here like un html element with self colsing or not
*/

function App() {
  return (
    <div>
      <div>
        <h1> My ToDos </h1> <Todo text="ali" />
        <Todo text="slman" />
        <Todo text="mohamad" />
      </div>
    </div>
  );
}

// this needed to make this script available outside of this file
export default App;
