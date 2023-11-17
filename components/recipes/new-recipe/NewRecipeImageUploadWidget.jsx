"use client";
import React from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

const NewRecipeImageUploadWidget = ({onImage, onSetImage}) => {
  return (
    <div>
      {onImage && <CldImage src={onImage} width={270} height={180} alt="Your Image" className="border-4 border-slate-300 rounded-sm drop-shadow-lg" />}
      <CldUploadWidget uploadPreset="lobz0s8r" onUpload={(result, widget) => {
        if (result.event !== "success") return;
        const info = result.info;
        onSetImage(info.public_id);
      }} >
        {({ open }) => (
          <button className="" onClick={() => open()}>
            Upload Image
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default NewRecipeImageUploadWidget;
