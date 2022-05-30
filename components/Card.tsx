import React from "react";

const Card = () => {
  return (
    <div className="w-96 shadow-lg border border-gray-50 rounded-lg p-10">
      <div className="flex justify-center items-center mb-4">
        <img
          className="rounded-full w-40 h-40 object-cover"
          src="/john-wick.jpeg"
          alt="john wick"
        />
      </div>

      <p className="text-center text-lg font-medium mb-4">
        &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
        mollitia deleniti est! Laboriosam debitis veritatis ex exercitationem
        dolorum vero placeat itaque perferendis!&quot;
      </p>
      <p className="text-center text-blue-400">Tanakorn Karode</p>
      <p className="text-center text-gray-700">Trainee @Finstable</p>
    </div>
  );
};

export default Card;
