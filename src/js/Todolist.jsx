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

    return (
        <div className="container">
            <div className="mb-2">
                <input type="text" value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} />
            </div>
                <ul>
                    {taskList.map((item, index) => (
					<li className='fs-2 ms-3 p-2 bg-secondary text-white rounded border border-danger' key={index}>{item}</li>
				    ))}
                </ul>
        </div>
    );
}
