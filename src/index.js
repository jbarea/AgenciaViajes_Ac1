import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import '@bower/normalize-css/normalize.css';
import '@bower/font-awesome/web-fonts-with-css/css/fontawesome-all.min.css';
import '@css/Index.css';
import '@css/Sizes.css';
import '@css/Fonts.css';
import '@css/Forms.css';
import '@css/Notifications.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

window.scrollTo(0,0);