import ThemeBtn from "./component/ThemeBtn";
import Card from "./component/Card";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <ThemeBtn />
        <Card />
      </div>
    </ThemeProvider>
  );
}


