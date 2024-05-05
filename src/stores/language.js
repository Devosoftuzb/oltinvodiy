import { useI18n } from 'vue-i18n';
import messages from '@/locales/messages';

export function useChangeLanguage() {
  const { locale } = useI18n();
  
  const changeLanguage = (lang) => {
    if (lang === 'uz'){
      locale.value = 'uz'
    }
    if (lang === 'ru'){
      locale.value = 'ru'
    }
    if (lang === 'eng'){
      locale.value = 'eng'
    }
    localStorage.setItem('Lan', locale.value)
    // console.log(locale.value);
  };

  return {
    changeLanguage
  };
}