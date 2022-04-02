/*
    react custome components should start with capital letter
    react destinguish between built in tags and custome tags by syntax capitalize first charachter
*/

import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

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

/*
  react conatin built in state called state which allow us to switch app cases we need it to show modal when click button and close it when we
  click confirm or cancel to use stat first we should add useState inside component directly
  useState we can deal with it as afunction returning two variables the first one is the current state and the second
  is a function to set the model state
  after that we add condition to render modal section we can use two syntax first
  {isModelOpen ? <Modal /> : null}
  or
  {isModelOpen && <Modal />}

  in order to close model whe click on cancel or confirm we define handler for this buttons and pass ot's name
  to Modal component as onClick event after that inside Modal component we add attribute for cancel button 
  which is onClick and assign it with the function name passed with props

*/

function Todo(props) {
  // user state
  // set current state to not rendered
  // useState is react hooks
  const [isModelOpen, setModalOpen] = useState(false);

  // name convenient delectHandler
  function delectHandler() {
    setModalOpen(true);
  }

  function cancelHandler() {
    setModalOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={delectHandler}>
          Delete
        </button>
        {isModelOpen && (
          /*
            here we can define any proprty because it is a custome component
          */
          <Modal cancelHandler={cancelHandler} confirmHandler={cancelHandler} />
        )}
        {isModelOpen && <Backdrop cancelHandler={cancelHandler} />}
      </div>
    </div>
  );
}

export default Todo;
