const {createApp} = Vue;

const miaApp = createApp({
    data() {
        return {
            message: 'Vue Hello!',
        }
    }
});
miaApp.mount('#app');
