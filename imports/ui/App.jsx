import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

export const App = () => (
  <div>
    <h1 className="text-red-500 text-2xl">Welcome to Meteor! Test</h1>
    <Hello/>
    <Info/>
  </div>
);
