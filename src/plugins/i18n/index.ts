import { createI18n } from 'vue-i18n';
import messages from './messages';


const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages, // locale messages
  // If you need to specify other options, you can set other options
});

export default i18n;
