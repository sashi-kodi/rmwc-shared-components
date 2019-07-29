import React from 'react';
import './App.scss';
import AppButton from '../lib/components/Button';
import AppCard from '../lib/components/Card';
import DataTable from './DataTable';

const App: React.FC = () => {
  return (
    <div className="App">
       <AppButton   >
         Hello World
         </AppButton>
         <AppCard style={{ width: '21rem' }} outlined={true} headerText="Hello World" subtitleText="by Skodi" cardText="Visit ten places on our planet that are undergoing the biggest changes today" />
          <DataTable />
     
    </div>
  );
}

export default App;
