import Link from "next/link";
import React from "react";
import Image from "next/image";

const RecipeCard = (props) => {
  const { title, image, description, slug } = props.recipe;

  const imagePath = `/images/recipes/${slug}/${image}`;
  const linkPath = `/recipes/${slug}`;
  return (
    <li className="border-2 p-2 flex shadow-lg shadow-slate-300 rounded-md">
      <Link href={linkPath} className="flex">
        <div className="flex-shrink-0">
          <Image src={imagePath} alt={title} width={200} height={200} className="rounded-lg border-2 border-slate-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-gray-700">{description}</p>
        </div>
      </Link>
    </li>
  );
};

export default RecipeCard;
