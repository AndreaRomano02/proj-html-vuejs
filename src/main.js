import { createApp } from 'vue';
import './assets/scss/style.scss';
import App from './App.vue';
import 'bootstrap';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faChevronLeft, faChevronRight, faFacebookF, faTwitter, faYoutube, faInstagram);
createApp(App).component('FontAwesomeIcon', FontAwesomeIcon).mount('#app');
