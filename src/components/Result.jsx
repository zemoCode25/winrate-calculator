import PropTypes from "prop-types";

export function Result({ page, content }) {
  const resultComponents = {
    current: <CurrentResult content={content} />,
    desired: <DesiredResult content={content} />,
  };

  return (
    <div className="flex items-center align-middle">
      {resultComponents[page]}
    </div>
  );
}

function CurrentResult({ content }) {
  const { totalGames, winPercent } = content;

  return (
    <div className="flex flex-col">
      <h3 className="text-lg">Total Games:</h3>
      <p className="text-2xl font-semibold text-violet-800">{totalGames}</p>
      <h3 className="text-lg">Winning Percentage:</h3>
      <p className="text-2xl font-semibold text-violet-800">{`${winPercent}%`}</p>
    </div>
  );
}

function DesiredResult({ content }) {
  const { consecutiveWins } = content;

  return (
    <div className="flex flex-col w-fit">
      <h3 className="text-lg">Consecutive Wins:</h3>
      <p className="text-2xl font-bold w-fit text-violet-800">
        {consecutiveWins}
      </p>
    </div>
  );
}

Result.propTypes = {
  page: PropTypes.string.isRequired,
  content: PropTypes.shape({
    totalGames: PropTypes.number,
    winPercent: PropTypes.number,
    consecutiveWins: PropTypes.number,
  }),
};

CurrentResult.propTypes = {
  content: PropTypes.shape({
    totalGames: PropTypes.number,
    winPercent: PropTypes.number,
  }),
};

DesiredResult.propTypes = {
  content: PropTypes.shape({
    consecutiveWins: PropTypes.number,
  }),
};
