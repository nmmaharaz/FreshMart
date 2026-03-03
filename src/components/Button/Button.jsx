import React from "react";

export default function Button(props) {
  return (
    <button className="bg-gradient-to-b from-orange-400 to-orange-600 text-white px-8 py-3 rounded-lg hover:scale-105 md:text-lg text-md hover:to-orange-700 transition-all duration-300 cursor-pointer">
      {props.content}
    </button>
  );
}
