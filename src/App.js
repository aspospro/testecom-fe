import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterContents from './RouterContents';

export default function App() {
  return (
    <BrowserRouter>
      <RouterContents />
    </BrowserRouter>
  );
}
