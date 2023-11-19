"use client";
import React from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { IoCamera } from "react-icons/io5";

const NewRecipeImageUploadWidget = ({ onImage, onSetImage }) => {
  return (
    <div
      className="w-40 h-48 rounded-md"
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.582)",
      }}
    >
      <div className="w-40 h-40 border-2 border-blue-600 flex justify-center rounded-t-lg flex-col shadow-inner">
        {onImage && (
          <CldImage src={onImage} crop="fill" width={160} height={160} alt="Your Image" className="rounded-t-md" />
        )}
      </div>

      <CldUploadWidget
        uploadPreset="lobz0s8r"
        options={{
          sources: ["local", "camera", "url"],
          multiple: false,
          cropping: true,
          styles: {
            palette: {
              window: "#2563EB",
              windowBorder: "#90A0B3",
              tabIcon: "#FFFFFF",
              menuIcons: "#FFFFFF",
              textDark: "#000000",
              textLight: "#FFFFFF",
              link: "#2563EB",
              action: "#CA5515",
              inactiveTabIcon: "#0E2F5A",
              error: "#E62517",
              inProgress: "#2563EB",
              complete: "#20B832",
              sourceBg: "#FFFFFF",
            },
          },
        }}
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info;
          onSetImage(info.public_id);
        }}
      >
        {({ open }) => (
          <button
            onClick={() => open()}
            className="bg-blue-600 text-white rounded-b-md flex items-center justify-center w-40 h-8"
          >
            <IoCamera size={30} />
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default NewRecipeImageUploadWidget;
