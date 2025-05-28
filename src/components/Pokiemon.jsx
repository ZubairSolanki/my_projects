import { useEffect, useState } from "react";
import { PokieCard } from "./PokieCard";

export const Pokiemon = () => {
  const [pokie, setPokie] = useState([]);
  const [error, setError] = useState("");
  const [lodding, setLoding] = useState(true);
  const [search,setsearch]=useState("")

  const url = "https://pokeapi.co/api/v2/pokemon?limit=50";

  const fetchApi = async () => {
    try {
      const val = await fetch(url);
      const data = await val.json();
      console.log(data);
      const pokidata = data.results.map(async (crele) => {
        //  console.log(crele.url)
        const data = await fetch(crele.url);
        const val=await data.json();
         return val
      });
    // console.log(pokidata);
    const mypkoie=await Promise.all(pokidata)
    console.log(mypkoie)
    setPokie(mypkoie)
    setLoding(false)

     
    } catch (error) {
      console.log(error);
      setError(error);
      setLoding(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);


  const SearchPokie=pokie.filter((data)=>{
   return data.name.toLowerCase().includes(search.toLowerCase())
  })

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  if (lodding) {
    return (
      <div>
        <h1>Lodiggggg...</h1>
      </div>
    );
  }

  
   return (
  <div className="min-h-screen bg-gray-100 px-4 py-6">
    {/* Centered Input */}
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search Pokémon..."
       
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={search}
      onChange={(e)=>setsearch(e.target.value)}
      />
    </div>

    {/* Grid of Cards */}
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {SearchPokie.map((data) => (
        <PokieCard key={data.id} data={data} />
      ))}
    </ul>
  </div>
);

  
};
