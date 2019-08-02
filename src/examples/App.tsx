import * as React from 'react';
import './App.scss';
import AppButton from '../lib/components/Button';
import AppCard from '../lib/components/Card';
import DataTable2 from './DataTable2';
import DataTable3 from './DataTable3';
import {Typography} from '@rmwc/typography';

const App: React.FC = () => {
  return (
    <div className="App">
      <Typography use="subtitle1">Data Table Demo</Typography>
      <DataTable3 />
     
    </div>
  );
}

export default App;
