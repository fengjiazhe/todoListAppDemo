import Basemessage from "../../components/Basemessage.vue";
import { createApp, h } from "vue";


export default {
    install: (app) => {
        const MessageConstructor = {
            success(message, duration = 2000) {
                this.show('success', message, duration);
            },
            warning(message, duration = 2000) {
                this.show('warning', message, duration);
            },
            error(message, duration = 2000) {
                this.show('error', message, duration);
            },
            info(message, duration = 2000) {
                this.show('info', message, duration);
            },
            show(type, message, duration) {
                const container = document.createElement('div');
                document.body.appendChild(container);

                const instance = createApp({
                    render() {
                        return h(BaseMessage, {
                            message,
                            type,
                            duration
                        });
                    }
                });

                instance.mount(container);

                setTimeout(() => {
                    instance.unmount();
                    document.body.removeChild(container);
                }, duration);
            }
        };

        app.config.globalProperties.$message = MessageConstructor;
    }
};