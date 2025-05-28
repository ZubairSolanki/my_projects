export const PokieCard = ({ data }) => {
  return (
    <li className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-4 flex flex-col items-center text-center space-y-3">
      <img
        src={data.sprites.back_default}
        alt={data.name}
        className="w-24 h-24 object-contain"
      />
      
      <h1 className="text-xl font-bold capitalize text-gray-800">
        {data.name}
      </h1>

      <div className="text-sm text-gray-600">
        <p className="font-semibold">Abilities:</p>
        {data.abilities.map((abilityObj, index) => (
          <p key={index} className="capitalize">
            {abilityObj.ability.name}
          </p>
        ))}
      </div>

      <div className="text-sm text-gray-500 space-y-1">
        <p>Height: {data.height}</p>
        <p>Weight: {data.weight}</p>
      </div>
    </li>
  );
};
