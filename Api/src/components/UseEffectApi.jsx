import React, { useEffect, useState } from "react";

const UseEffectApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        const result = await response.json();
        setData(result);
      } catch (e) {
        console.error("Error fetching data", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <p className="text-center text-blue-600 text-lg font-semibold mt-5">
        Loading...
      </p>
    );

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Fetch Get API
      </h1>
      {data.length > 0 ? (
        <ul className="space-y-3">
          {data.map((item) => (
            <li
              key={item.id}
              className="p-3 bg-gray-100 border-l-4 border-blue-500 rounded-md shadow-sm hover:bg-gray-200 transition-all"
            >
              {item.title}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600">No data available</p>
      )}
    </div>
  );
};

export default UseEffectApi;
