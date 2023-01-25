import Header from "./components/Header";
import FileUpload from "./components/FileUpload";
import { SideBar } from "./components/SideBar";
import { CanvasProvider } from "./context/CanvasContext";
function App() {
  return (
    <CanvasProvider>
      <Header />
      <SideBar />
      <FileUpload />
    </CanvasProvider>
  );
}

export default App;