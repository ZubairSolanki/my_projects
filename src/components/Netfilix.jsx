import { useEffect, useState } from "react";
import jsondata from "../api/data.json";
import { Card } from "./Card";
export const Netfilix = () => {
  const [input, setInput] = useState("");
  const [netfilix, setData] = useState([]);

  useEffect(() => {
    setData(jsondata);
    console.log(jsondata);
  }, []);

  const search = netfilix.filter((data) => {
    return data.name.toLowerCase().includes(input.toLowerCase());
  });

  return (
    <>
      <h1>Letflix Movies</h1>
      <div className="flex justify-center ">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className=" border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter text..."
        />
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {search.map((crele) => (
          <Card key={crele.id} data={crele} />
        ))}
      </ul>
    </>
  );
};
