import '../App.css';
import React from 'react';
import MiniDrawer from './Drawer'
import BasicButtons from './Dasboard';
// import Invoices from './Components/Invoices';


function Home() {

  return (
    <>
      <MiniDrawer />
      <BasicButtons />
      {/* <Invoices /> */}
    </>
  );
}

export default Home;

