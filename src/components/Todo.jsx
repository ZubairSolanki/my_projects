import { useState } from "react";
import { Clock } from "./Clock";

export const Todo = () => {
  const [input, setinput] = useState({
    id: "",
    content: "",
    checked: false,
  });

  const [task, setTask] = useState([]);

  const handleInput = (value) => {
    setinput({ id: value, content: value, checked: false });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { id, content, checked } = input;

    // if any space or empty input filed not add

    if (!input.content.trim()) {
      setinput({ id: "", content: "", checked: false });
      return;
    }

    // if data same

    const matchData = task.find((data) => data.content === content.trim());
    if (matchData) {
      setinput({ id: "", content: "", checked: false });
      return;
    }

    setTask((prev) => [...prev, { id, content, checked }]);
    setinput({ id: "", content: "", checked: false });
  };

  const handleDelete=(value)=>{
       const updateddata=task.filter((crele)=>{
       return crele.id!==value.id
       })
       setTask(updateddata)
  }

  const handleClear=()=>{
    setTask([])
  }


 const handleChecked = (data) => {
  const updated = task.map((val) =>
    val.id === data.id ? { ...val, checked: !val.checked } : val
  );
  setTask(updated);
};

    
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-10">
         <Clock/>
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Todolist
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex gap-4 justify-center mb-6 w-full max-w-md"
      >
        <input
          type="text"
          value={input.content}
          onChange={(e) => handleInput(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a task..."
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Add_Data
        </button>
      </form>
      <ul className="w-full max-w-md space-y-4">
        {task.map((data) => (
          <li
            key={data.id}
            className="flex justify-between items-center bg-white shadow-md rounded-lg px-4 py-3"
          >
          <span className={`text-gray-800 ${data.checked ? 'line-through text-green-500' : ''}`}>
  {data.content}
</span>

            <div className="flex gap-2">
              <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200" onClick={()=>handleChecked(data)}>
                Checked
              </button>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                onClick={() => handleDelete(data)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
          <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-green-600 transition duration-200" onClick={handleClear}>
                Clear
              </button>
    </div>
  );
};
