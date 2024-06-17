import React,{useState} from "react";
export const Todolist = () => {
    const [taskList, setTasklist] = useState(['Make the bed', 'Eat', 'Walk the dog', 'Coding']);
    const [inputValue, setInputValue] = useState(''); 

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };

      const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            setTasklist([...taskList, inputValue]);
            setInputValue('');
        }
      };
      const deleteTask = (index) => {
        setTasklist(taskList.filter((_, i) => i !== index));
      };
    
    

    return (
        <div className="container">
            <div className="mb-2">
                <input type="text" value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} />
            </div>
                <ul className="d-flex flex-column" > 
                    {taskList.map((item, index) => (
					<li className='fs-2 ms-3 p-2 bg-dark text-white rounded border border-danger d-flex justify-content-center' key={index}>{item}    <div className="d-flex ms-auto"><button type="button" onClick={() => deleteTask(index)} className="btn btn-dark">borrar</button></div></li>
				    ))}
                </ul>
        </div>
    );
}
