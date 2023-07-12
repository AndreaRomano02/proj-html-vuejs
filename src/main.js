import { createApp } from 'vue';
import './assets/scss/style.scss';
import App from './App.vue';
import 'bootstrap';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faCaretDown, faChevronLeft, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

library.add(
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
  faBars,
  faMagnifyingGlass,
  faUser,
  faBook,
  faBookOpenReader,
  faSuitcase,
  faHouseChimney,
  faCalendarDays,
  faPlay,
  faCaretDown
);
createApp(App).component('FontAwesomeIcon', FontAwesomeIcon).mount('#app');
