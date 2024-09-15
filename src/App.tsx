import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";
import DataTableDemo from "./components/DataTableComponent";
import { SelectedRowsProvider } from "./context/SelectedRowsContext";

function App() {
  return (
    <>
      <SelectedRowsProvider>
        <DataTableDemo />
      </SelectedRowsProvider>
    </>
  );
}

export default App;
