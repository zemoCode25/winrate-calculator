import PropTypes from "prop-types";

export function CalcuTab({ handleChangeCalcu, page }) {
  return (
    <div className="flex mb-2 bg-violet-200 p-2 rounded-md">
      <button
        onClick={() => handleChangeCalcu("current")}
        className={`w-full p-1 ${
          page === "current" &&
          "font-semibold bg-violet-950 rounded-md text-white"
        }`}
      >
        Current
      </button>
      <button
        onClick={() => handleChangeCalcu("desired")}
        className={`w-full p-1 ${
          page === "desired" &&
          "font-semibold bg-violet-950 rounded-md text-white"
        }`}
      >
        Desired
      </button>
    </div>
  );
}

CalcuTab.propTypes = {
  handleChangeCalcu: PropTypes.func.isRequired,
  page: PropTypes.func.isRequired,
};
