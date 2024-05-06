'use client'
import { useState } from 'react'
import clsx from 'clsx'
import Input from '../../../components/UI/input'
import styles from './style.module.scss'

function Login() {
  const [loginForm, setLoginForm] = useState(
    {
      email: '',
      password: '',
    }
  )

  const [activeMode, setActiveMode] = useState(0)

  const changeLoginForm = (value: string, type: string) => {
    setLoginForm({
      ...loginForm,
      [type]: value,
    })
  }

  const switcher = ['Вход', 'Регистрация']

  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <div className={styles.login__panel}>
          <div className={styles.login__switcher}>
            {switcher.map((item, index) =>
              <div className={clsx(styles.login__variant, (activeMode === index && styles.login__active))} key={index} onClick={() => { setActiveMode(index) }}>{item}</div>
            )}
          </div>
          <form className={styles.login__form}>

            <div className={styles.login__title}>{activeMode ? "Регистрация" : 'Вход'}</div>
            <Input
              placeholder={"Email"}
              value={loginForm.email}
              setNewValue={changeLoginForm}
              type='email'
            />
            <Input
              placeholder={"Пароль"}
              value={loginForm.password}
              setNewValue={changeLoginForm}
              type='password'
            />
          <button className={styles.login__btn} type='submit' onClick={(e) => { e.preventDefault() }}>{activeMode ? "Зарегистрироваться" : 'Войти'}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login