import React from 'react';
import App from './components/app/App';
import './index.css';
import './fonts/SFPro/SF-Pro-Display-Black.otf'
import './fonts/SFPro/SF-Pro-Display-Bold.otf'
import './fonts/SFPro/SF-Pro-Display-Heavy.otf'
import './fonts/SFPro/SF-Pro-Display-Light.otf'
import './fonts/SFPro/SF-Pro-Display-Medium.otf'
import './fonts/SFPro/SF-Pro-Display-Regular.otf'
import './fonts/SFPro/SF-Pro-Display-Semibold.otf'
import './fonts/SFPro/SF-Pro-Display-Thin.otf'

import {createRoot} from "react-dom/client";
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App/>)