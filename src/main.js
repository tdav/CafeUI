import { createApp } from 'vue'
import App from './App.vue'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Import Bootstrap JS bundle (needed for dropdowns, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Import Bootstrap Icons CSS
import 'bootstrap-icons/font/bootstrap-icons.css'

// Import custom styles
import './assets/main.css'

createApp(App).mount('#app')