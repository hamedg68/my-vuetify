import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);
import fa from 'vuetify/lib/locale/fa'

export default new Vuetify({
    rtl: true,
    theme: {
        themes: {
            light: {
                primary: '#9652ff',
                success: '#3cd1c2',
                info: '#ffaa2c',
                error: '#f83e70',
            },
        },
    },
    lang: {
        locales: { fa },
        current: 'fa',
    },
});
