import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare,faLinkedin, faTwitterSquare,faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(faLinkedin,
  faFacebookSquare,
  faTwitterSquare,
  faGithubSquare,
  faEnvelopeSquare
  );

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

Vue.config.productionTip = false;
