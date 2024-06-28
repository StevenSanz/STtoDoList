import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons';

export const Todolist = () => {
    const [taskList, setTasklist] = useState(['Make the bed','Eat','Walk the dog', 'Coding']);
    const [inputValue, setInputValue] = useState(''); 
    const [showButton, setShowButton] = useState(null);


    const inputChange = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
      };

      const keyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            setTasklist(prevState => [...prevState, inputValue]);
            setInputValue('');
             
        }
      };
      const deleteTask = (index) => {
        setTasklist((prevState) => prevState.filter((_, i) => i !== index));
      };

      const handleMouseEnter = (index) => {
        setShowButton(index);
      };
    
      const handleMouseLeave = () => {
        setShowButton(null);
      };
    return (
        <div className="container">
            <div className="mb-2">
                <label className="fs-4 text-white">Your tasks here: 
                  <input type="text" placeholder="what needs to be done" value={inputValue} onChange={inputChange} onKeyDown={keyDown} /> 
                </label>
            </div>
            {taskList.length > 0 ? (
                <ul className="d-flex flex-column bg-dark ps-0" > 
                    {taskList.map((item, index) => (
					          <li onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}
                    className="fs-2 ms-3 p-2 text-white rounded border border-danger d-flex justify-content-center" key={index}>{item}    
                    <div className="d-flex ms-auto"> {showButton === index && (<button type="button" onClick={() => deleteTask(index)} className="btn btn-dark">
                      <FontAwesomeIcon icon={faCircleXmark} /></button>)}</div></li>
                    ))}
                    <li className="fs-5 d-flex ms-3 me-auto bg-dark text-white">{taskList.length} items left</li>
                </ul>
            ) : (
              <p className="fs-2 ms-3 p-2 text-white d-flex justify-content-center">NOT PENDING TASKS</p>
            )}     
        </div>
    );
}
