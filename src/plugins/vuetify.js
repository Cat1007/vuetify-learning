import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#2196f3',
                secondary: '#ffc107',
                accent: '#3f51b5',
                error: '#ff5722',
                warning: '#ff9800',
                info: '#607d8b',
                success: '#4caf50'
            },
            dark: {
                primary: colors.blue.lighten3,
            },
        },
    },
});
