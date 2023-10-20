import React from 'react';

const SearchForm = ({ city, handleCityChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className='mx-auto text-center my-6'>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleCityChange}
        className="border p-2 rounded-lg w-full sm:w-80 text-xl"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 ml-2 rounded-lg mt-2"
      >
        Get Weather
      </button>
    </form>
  );
};

export default SearchForm;