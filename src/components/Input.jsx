import PropTypes from "prop-types";
import { useState } from "react";
import { CalcuTab } from "./CalcuTab";

export function Input({
  page,
  handleChangeCalcu,
  updateCurrentContent,
  updateDesiredContent,
}) {
  // Display the component based on the current page prop
  return (
    <div>
      <CalcuTab handleChangeCalcu={handleChangeCalcu} page={page} />
      <div className={page === "current" ? "" : "hidden"}>
        <CurrentForm updateCurrentContent={updateCurrentContent} />
      </div>
      <div className={page === "desired" ? "" : "hidden"}>
        <DesiredForm updateDesiredContent={updateDesiredContent} />
      </div>
    </div>
  );
}

function CurrentForm({ updateCurrentContent }) {
  const [formData, setFormData] = useState({ wins: "", losses: "" });

  function calculateTotalMatches(wins, losses) {
    const totalMatches = wins + losses;
    return totalMatches;
  }

  function calculateWinRate(wins, losses) {
    const matches = calculateTotalMatches(wins, losses);
    return Math.round(((wins / matches) * 100 + Number.EPSILON) * 100) / 100;
  }

  function updateCurrentOnSubmit() {
    const totalMatches =
      calculateTotalMatches(formData.wins, formData.losses) || 0;
    const winRate = calculateWinRate(formData.wins, formData.losses) || 0;
    updateCurrentContent(totalMatches, winRate);
  }

  function handleFormChange(e) {
    const { name, value } = e.target;
    if (/^\d*$/.test(value)) {
      const currentValue = value === "" ? "" : Number(value);
      setFormData((prevForm) => ({
        ...prevForm,
        [name]: currentValue,
      }));
    }
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateCurrentOnSubmit();
      }}
      className="flex flex-col"
    >
      <label className="text-sm mt-1" htmlFor="wins">
        Wins
      </label>
      <input
        onChange={handleFormChange}
        type="text"
        name="wins"
        value={formData.wins}
        className="text-sm border border-gray-200 p-2 pl-3 outline-none rounded-md"
      />
      <label className="text-sm mt-1" htmlFor="losses">
        Losses
      </label>
      <input
        onChange={handleFormChange}
        type="text"
        name="losses"
        value={formData.losses}
        className="text-sm border border-gray-200 p-2 pl-3 outline-none rounded-md"
      />
      <button
        type="submit"
        className="bg-violet-950 text-white mt-2 py-1 rounded-md"
      >
        Submit
      </button>
    </form>
  );
}

function DesiredForm({ updateDesiredContent }) {
  const [formData, setFormData] = useState({
    totalMatches: "",
    currentWr: "",
    desiredWr: "",
  });

  function calculateConsecutiveWins(
    desiredWinRate,
    totalMatches,
    currentWinRate
  ) {
    const totalWIns = Math.ceil(totalMatches * (currentWinRate / 100));
    const desiredWinRateRatio = desiredWinRate / 100;
    return Math.ceil(
      (desiredWinRateRatio * totalMatches - totalWIns) /
        (1 - desiredWinRateRatio)
    );
  }

  function updateDesiredOnSubmit() {
    const consecutiveWins = calculateConsecutiveWins(
      formData.desiredWr,
      formData.totalMatches,
      formData.currentWr
    );
    updateDesiredContent(consecutiveWins);
  }

  function handleFormChange(e) {
    const { name, value } = e.target;

    if (/^\d*$/.test(value)) {
      setFormData((prevForm) => ({
        ...prevForm,
        [name]: Number(value),
      }));
    }
  }

  return (
    <form
      onClick={(e) => {
        e.preventDefault();
        updateDesiredOnSubmit();
      }}
      className="flex flex-col"
    >
      <label className="text-sm mt-1" htmlFor="total-matches">
        Total Matches
      </label>
      <input
        onChange={handleFormChange}
        type="text"
        name="totalMatches"
        value={formData.totalMatches}
        className="text-sm border border-gray-200 p-2 pl-3 outline-none rounded-md"
      />
      <label className="text-sm mt-1" htmlFor="currentWr">
        Current Winrate
      </label>
      <input
        onChange={handleFormChange}
        type="text"
        name="currentWr"
        value={formData.currentWr}
        className="text-sm border border-gray-200 p-2 pl-3 outline-none rounded-md"
      />
      <label className="text-sm mt-1" htmlFor="desiredWr">
        Desired Winrate
      </label>
      <input
        onChange={handleFormChange}
        type="text"
        name="desiredWr"
        value={formData.desiredWr}
        className="text-sm border border-gray-200 p-2 pl-3 outline-none rounded-md"
      />
      <button
        type="submit"
        className="bg-violet-950 text-white mt-2 py-1 rounded-md"
      >
        Submit
      </button>
    </form>
  );
}

CurrentForm.propTypes = {
  updateCurrentContent: PropTypes.func.isRequired,
};

DesiredForm.propTypes = {
  updateDesiredContent: PropTypes.func.isRequired,
};

Input.propTypes = {
  page: PropTypes.string.isRequired,
  handleChangeCalcu: PropTypes.func.isRequired,
  updateCurrentContent: PropTypes.func.isRequired,
  updateDesiredContent: PropTypes.func.isRequired,
};
