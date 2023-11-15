import React from "react";
import Image from "next/image";

const RecipeHeader = (props) => {
  const { title, image } = props;
  return (
    <header className="w-full flex justify-between border-b-2 pb-6">
      <h1 className="text-7xl font-bold text-center flex p-14">{title}</h1>
      <Image src={image} alt={title} width={200} height={200} className="rounded-lg border-2 border-slate-600 mr-8 mt-8" />
    </header>
  );
};

export default RecipeHeader;
