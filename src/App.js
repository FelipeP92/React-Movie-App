import React from 'react';



import List from './Containers/List.js';
import Navbar from './Component/Card/Navbar';

import '../node_modules/bootswatch/dist/lux/bootstrap.min.css';


function App() {
  return (
    <>

    

      <Navbar />

      <main className='bg-primary'>
        <div className='container'>
          <List />
        </div>
      </main>
    </>
  );
}

export default App;
