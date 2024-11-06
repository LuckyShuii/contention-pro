import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import Menu from 'primevue/menu';
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('Button', Button);
app.component('Dropdown', Dropdown);
app.component('Menu', Menu);
app.component('InputText', InputText)
app.component('TextArea', Textarea)
app.component('DataTable', DataTable)
app.component('Column', Column)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount('#app')
