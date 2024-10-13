// src/plugins/vuetify.js
import 'vuetify/styles'; // Import Vuetify styles
import { createVuetify } from 'vuetify';

// Import components using alias
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
});

export default vuetify;