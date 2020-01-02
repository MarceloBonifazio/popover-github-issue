import React from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Pop from './Pop';

ReactDOM.render(
  <>
    <CssBaseline />
    <Pop description="test" text="text" />
  </>,
document.getElementById('root'));
