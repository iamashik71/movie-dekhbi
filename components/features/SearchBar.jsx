// components/SearchBar.js
import { FaSearch } from "react-icons/fa";
import { Button } from "@/components/ui/button"; // Adjust path for your ShadCN button
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center bg-white border border-gray-300 rounded-md overflow-hidden">
        <span className="px-4 text-gray-500">
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="সার্স কর..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full px-4 py-2 text-gray-700 focus:outline-none"
        />
      </div>
      <Button onClick={handleSubmit}>Search</Button>
    </div>
  );
};

export default SearchBar;
