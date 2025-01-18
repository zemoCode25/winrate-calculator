import { useState } from "react";
import { Result } from "./Result";
import { Input } from "./Input";

export function WrCalculator() {
  const [calculator, setCalculator] = useState("current");
  const [currentContent, setCurrentContent] = useState({
    totalGames: 0,
    winPercent: 0,
  });
  const [consecutiveWins, setConsecutiveWins] = useState(0);

  function updateCurrentContent(inputTotalGames, computedWinPercent) {
    setCurrentContent({
      totalGames: inputTotalGames,
      winPercent: computedWinPercent,
    });
  }

  function updateDesiredContent(computedConsecutiveWins) {
    setConsecutiveWins(computedConsecutiveWins);
  }

  function handleChangeCalcu(currentCalculator) {
    setCalculator(currentCalculator);
  }

  return (
    <main>
      <div className="flex flex-col sm:w-full sm:flex-row justify-between gap-7">
        <Result
          page={calculator}
          content={{ ...currentContent, consecutiveWins }}
        />
        <Input
          page={calculator}
          handleChangeCalcu={handleChangeCalcu}
          updateCurrentContent={updateCurrentContent}
          updateDesiredContent={updateDesiredContent}
        />
      </div>
    </main>
  );
}
