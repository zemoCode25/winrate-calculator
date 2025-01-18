import { WrCalculator } from "./components/WrCalculator";

export function App() {
  return (
    <div className="w-dvw h-dvh flex flex-col items-center justify-center font-Inter">
      <div className="flex flex-col items-center border border-gray-200 shadow-custom p-6 rounded-lg">
        <h1 className="text-4xl font-bold text-violet-950 text-center">
          Winrate Calculator
        </h1>
        <p className="mb-5 text-gray-600 text-sm text-center">
          Get your current and desired winrate
        </p>
        <WrCalculator />
      </div>
      <footer className="mt-2">
        <small>
          Developed by{" "}
          <a
            className="font-semibold underline"
            target="_blank"
            href="https://github.com/zemoCode25"
          >
            Zemo
          </a>
        </small>
      </footer>
    </div>
  );
}
