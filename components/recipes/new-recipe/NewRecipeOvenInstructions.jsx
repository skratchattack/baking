import React, { useRef } from "react";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { IoTimerOutline } from "react-icons/io5";
import { PiFanLight } from "react-icons/pi";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { IoWaterOutline } from "react-icons/io5";

const NewRecipeOvenInstructions = ({ onSetOvenInstructions, onOvenInstructions }) => {
  const ovenTempRef = useRef();
  const ovenTempUnitRef = useRef();
  const ovenTimeRef = useRef();
  const ovenFanSpeedRef = useRef();
  const ovenSteamRef = useRef();

  const fanSpeedOptions = ["None", "Low", "Medium", "High"];
  const temperatureUnit = ["°C", "°F"];

  const handleSetInstructions = () => {
    const ovenInstructions = {
      temperature: ovenTempRef.current.value,
      temperatureUnit: ovenTempUnitRef.current.value,
      time: ovenTimeRef.current.value,
      fanSpeed: ovenFanSpeedRef.current.value,
      steam: ovenSteamRef.current.value,
    };

    onSetOvenInstructions(ovenInstructions);
  };


  return (
    <div className="border-2 border-blue-400 rounded-lg pb-8 w-48 p-4 mt-10 h-44">
      <div className="flex justify-center">
        <label htmlFor="oven-temp">
          <Tooltip id="temperatureTooltip" />
          <LiaTemperatureHighSolid
            size={24}
            data-tooltip-place="left"
            data-tooltip-id="temperatureTooltip"
            data-tooltip-content="Temperature"
          />
        </label>
        <input onChange={handleSetInstructions} value={onOvenInstructions.temperature} type="text" ref={ovenTempRef} className="w-20 border-b-2 text-center" />
        <select onChange={handleSetInstructions} value={onOvenInstructions.temperatureUnit} ref={ovenTempUnitRef}>
          {temperatureUnit.map((unit, index) => (
            <option key={index}>{unit}</option>
          ))}
        </select>
      </div>
      <div className="flex justify-center mt-2">
        <label htmlFor="oven-time">
          <Tooltip id="bakingTimeTooltip" />
          <IoTimerOutline
            size={24}
            data-tooltip-place="left"
            data-tooltip-id="bakingTimeTooltip"
            data-tooltip-content="Baking time"
          />
        </label>
        <input onChange={handleSetInstructions} value={onOvenInstructions.time} type="text" ref={ovenTimeRef} className="w-20 mr-10 border-b-2 text-center" placeholder="hh:mm" />
      </div>
      <div className="flex justify-center mt-2">
        <label htmlFor="fan-speed">
          <Tooltip id="fanSpeedTooltip" />
          <PiFanLight
            size={24}
            data-tooltip-place="left"
            data-tooltip-id="fanSpeedTooltip"
            data-tooltip-content="Fan speed"
          />
        </label>
        <select onChange={handleSetInstructions} value={onOvenInstructions.fanSpeed} className="border-b-2 mr-10 text-center" ref={ovenFanSpeedRef}>
          {fanSpeedOptions.map((speed, index) => (
            <option key={index}>{speed}</option>
          ))}
        </select>
      </div>
      <div className="flex justify-center mt-2">
        <label htmlFor="steam">
          <Tooltip id="steamTooltip" />
          <IoWaterOutline
            size={22}
            data-tooltip-place="left"
            data-tooltip-id="steamTooltip"
            data-tooltip-content="Steam"
          />
        </label>
        <input onChange={handleSetInstructions} value={onOvenInstructions.steam} type="text" className="w-20 border-b-2 text-center mr-10" ref={ovenSteamRef} placeholder="% or sec." />
      </div>
    </div>
  );
};

export default NewRecipeOvenInstructions;
