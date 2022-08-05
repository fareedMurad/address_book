import logo from "./logo.svg";
import "./App.css";
import AddressForm from "./AddressForm";
import EditableTable from "./AddressList";

function App() {
  return (
    <div className="App">
      <AddressForm />
      <EditableTable />
    </div>
  );
}

export default App;
