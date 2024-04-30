import { useI18n } from 'vue-i18n';
import messages from '@/locales/messages';

export function useChangeLanguage() {
  const { locale } = useI18n();
  
  const changeLanguage = () => {
    locale.value = locale.value === 'en' ? 'uz' : 'en';
    // messages.value = { ...messages.value };
    console.log(locale.value);
  };

  return {
    changeLanguage
  };
}