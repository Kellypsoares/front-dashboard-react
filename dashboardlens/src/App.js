import { useState } from 'react';

import './App.css';

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSider = ( ) => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };




  return (
    <div className="App">
      <h1>Dashboard lens </h1>
    </div>
  );
}

export default App;
