import React from 'react';
import { createRoot } from 'react-dom/client';

import "./index.css"
import { Content } from './profile';

const App = () => <Content />;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
