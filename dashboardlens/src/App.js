import { useState } from 'react';
import main from './components/main/main'
import navbar from './components/navbar/navbar';
import sidebar from "./components/sidebar/sidebar";

import './App.css';

/*botão de abrir e fechar sidebar*/
const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = ( ) => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="container">
      <navbar sidebarOpen ={sidebarOpen} openSidebar={closeSidebar} />
      <sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default App;
