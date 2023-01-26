import Header from "./components/Header";
import FileUpload from "./components/FileUpload";
import { CanvasProvider } from "./context/CanvasContext";

function App() {
  return (
    <CanvasProvider>
      <Header />
      <FileUpload />
    </CanvasProvider>
  );
}

export default App;