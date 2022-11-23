import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          the: 'THE ',
          phygital: 'PHYGITAL',
          title: ' LUXURY SHOPPING DESTINATION',
          subtitle: 'PHYSICAL + DIGITAL',
          launchingSoon: 'LAUNCHING SOON',
          seconds: 'Seconds',
          days: 'Days',
          minutes: 'Minutes',
          hours: 'Hours',
          regsiterTitle: 'Register for your chance to win an exclusive invite!',
          registerBtn: 'Register your interest',
          name: 'Name',
          email: 'Email',
          weChat: 'WeChat',
          submit: 'Submit',
        },
      },
      ch: {
        translations: {
          the: '这 ',
          phygital: '物理性',
          title: ' 奢侈品购物胜地',
          subtitle: '物理 + 数字',
          launchingSoon: '即将推出',
          seconds: '秒',
          minutes: '分钟',
          hours: '小时',
          days: '天',
          regsiterTitle: '注册即有机会赢得独家邀请 !',
          registerBtn: '注册您的兴趣',
          name: '姓名',
          email: '电子邮件',
          weChat: '微信',
          submit: '提交',
        },
      },
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
