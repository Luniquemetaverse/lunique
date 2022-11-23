import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './styles.module.css'
import RegisterPopup from '../register'

const backgroundImg = '/img/background.png'
const backgroundVideo = '/video/video-bg.mp4'
const logoLg = '/img/logo-lg.png'

function Index() {
  const [open, setOpen] = useState(false)
  const [isChinese, setIsChinese] = useState(false)
  const { t, i18n } = useTranslation()
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const wrapperStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
  }

  useEffect(() => {
    setInterval(() => {
      startTimer()
    }, 1000)
  }, [])

  const onClose = () => {
    setOpen(false)
  }

  const changeLanguage = () => {
    if (!isChinese) {
      i18n.changeLanguage('ch')
      setIsChinese(true)
    } else {
      i18n.changeLanguage('en')
      setIsChinese(false)
    }
  }

  return (
    <>
      <video className={classes['bg-video']} autoPlay loop playsInline muted>
        <source type="video/mp4" src={backgroundVideo} />
      </video>
      <div className={classes['wrapper']}>
        <div
          className=" absolute top-5 right-10 cursor-pointer"
          onClick={changeLanguage}
        >
          {isChinese ? (
            <img src="/img/eng-flag.jpg" className="h-8 w-8 rounded-2xl" />
          ) : (
            <img src="/img/china-flag.jpg" className="h-8 w-8 rounded-2xl" />
          )}
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <img src={logoLg} />
          <div className="flex flex-row justify-center">
            <p className={classes['title']}>{t('the')}</p>
            <div className="flex flex-col items-center">
              <span className={classes['gradient-text']}>{t('phygital')}</span>
              <span className={classes['gradient-subtext']}>
                {t('subtitle')}
              </span>
            </div>
            <p className={classes['title']}>{t('title')}</p>
          </div>
          <p className={classes['launch']}>{t('launchingSoon')}</p>
          <div className={classes['date']}>
            <div className="flex flex-col items-center w-[80px]">
              <h1>{timer.days}</h1>
              <p className=" text-xs">{t('days')}</p>
            </div>
            <div className="flex flex-col items-center w-[80px]">
              <h1>{timer.hours}</h1>
              <p className=" text-xs">{t('hours')}</p>
            </div>
            <div className="flex flex-col items-center w-[80px]">
              <h1>{timer.minutes}</h1>
              <p className=" text-xs">{t('minutes')}</p>
            </div>
            <div className="flex flex-col items-center w-[80px]">
              <h1>{timer.seconds}</h1>
              <p className=" text-xs">{t('seconds')}</p>
            </div>
          </div>
          <p className="text-white mt-5 text-base md:text-base">
            {t('regsiterTitle')}
          </p>
          <button
            className={classes['register-btn']}
            onClick={() => setOpen(true)}
          >
            {t('registerBtn')}
          </button>
        </div>
      </div>
      <RegisterPopup open={open} onClose={onClose} />
    </>
  )

  function startTimer() {
    let dateFuture = new Date(new Date().getFullYear() + 1, 0, 8)
    let dateNow = new Date()
    let seconds = Math.floor((dateFuture - dateNow) / 1000)
    let minutes = Math.floor(seconds / 60)
    let hours = Math.floor(minutes / 60)
    let day = Math.floor(hours / 24)
    let days = (Math.abs(dateFuture - dateNow) / 1000 / 86400).toFixed(0)

    hours = hours - day * 24
    minutes = minutes - day * 24 * 60 - hours * 60
    seconds = seconds - day * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60

    setTimer({
      days,
      hours,
      minutes,
      seconds,
    })
  }
}

export default Index
