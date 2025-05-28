export const Card = ({ data }) => {
  const { name, img_url, rating, description, cast, genre } = data;

  let age=17;
  return (
    <li className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={img_url} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
    <p
  className={`text-sm mb-1 ${
    rating > 8.2
      ? 'text-green-600'
      : rating < 8.2
      ? 'text-yellow-500'
      : 'text-red-500'
  }`}
>
  <span className="font-bold">Rating:</span> {rating}
</p>

        <p className="text-sm text-gray-600 mb-1"><span className="font-medium  font-bold">Cast:</span> {cast}</p>
        <p className="text-sm text-gray-600 mb-1  font-bold "><span className="font-medium">Genre:</span> {genre}</p>
        <p className="text-sm text-gray-700 mt-2 font-bold">Description:{description}</p>
        <div>
  <button
    className={`px-4 py-2 rounded-lg text-white font-semibold ${
      age >= 18 ? 'bg-green-600 hover:bg-green-700' : 'bg-red-500 cursor-not-allowed'
    }`}
  >
    {age >= 18 ? 'Watch' : 'Not Watch'}
  </button>
</div>

      </div>
    </li>
  );
};
