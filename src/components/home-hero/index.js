import React, { useEffect, useState } from 'react'
import classes from './styles.module.css'
import RegisterPopup from '../register'

const backgroundImg = '/img/background.png'
const backgroundVideo = '/video/video-bg.mp4'
const logoLg = '/img/logo-lg.png'

function Index() {
  const [open, setOpen] = useState(false)
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

  return (
    <>
      <video className={classes['bg-video']} autoPlay loop playsInline muted>
        <source type="video/mp4" src={backgroundVideo} />
      </video>
      <div className={classes['wrapper']}>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <img src={logoLg} />
          <div className="flex flex-row justify-center">
            <p className={classes['title']}>THE</p>
            <div className="flex flex-col items-center">
              <span className={classes['gradient-text']}>PHYGITAL</span>
              <span className={classes['gradient-subtext']}>
                PHYSICAL + DIGITAL
              </span>
            </div>
            <p className={classes['title']}>LUXURY SHOPPING DESTINATION</p>
          </div>
          <p className={classes['launch']}>LAUNCHING SOON</p>
          <div className={classes['date']}>
            <div className="flex flex-col items-center w-[80px]">
              <h1>{timer.days}</h1>
              <p className=" text-xs">Days</p>
            </div>
            <div className="flex flex-col items-center w-[80px]">
              <h1>{timer.hours}</h1>
              <p className=" text-xs">Hours</p>
            </div>
            <div className="flex flex-col items-center w-[80px]">
              <h1>{timer.minutes}</h1>
              <p className=" text-xs">Minutes</p>
            </div>
            <div className="flex flex-col items-center w-[80px]">
              <h1>{timer.seconds}</h1>
              <p className=" text-xs">Seconds</p>
            </div>
          </div>
          <p className="text-white mt-5 text-base md:text-base">
            Register for your chance to win an exclusive invite!
          </p>
          <button
            className={classes['register-btn']}
            onClick={() => setOpen(true)}
          >
            Register your interest
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
