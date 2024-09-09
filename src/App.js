import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackageList from "./components/PackageList";
import StatisticData from "./components/StatisticData";

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(itemAdd) {
    setItems((items) => [...items, itemAdd]);
  }

  function handleDeleteItems(id) {
    setItems((item) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirm = window.confirm(
      "Are you sure you want to clear items list?"
    );
    if (confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackageList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <StatisticData items={items} />
    </div>
  );
}

export default App;
