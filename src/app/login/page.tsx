'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { registration, login } from '../../../utilities/api'
import { setUser } from "../../../utilities/action"
//@ts-ignore
import cookie from 'js-cookie';

import clsx from 'clsx'
import Input from '../../../components/UI/input'
import styles from './style.module.scss'
import { useContext } from 'react';
import { Context } from "../../../context"

function Login() {
  const { state, dispatch } = useContext(Context);
  const router = useRouter()
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

  const sendData = async () => {
    const jsonData = JSON.stringify(loginForm);
    if (activeMode === 0) {
      sendLogin();
    } else {
      await registration(jsonData);
    }
  }


  const sendLogin = async () => {
    const jsonData = JSON.stringify(loginForm);
    const data = await login(jsonData)
    if (data?.access_token !== undefined) {
      console.log(data.access_token);
      setUser(dispatch, data.access_token);
      cookie.set('userjwt', data.access_token, { expires: 30 });
      router.push('/account')
    } else {
      alert("Неверный логин или пароль")
    }
  }
  const dataState = useContext(Context);


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
          <div className={styles.login__form} onClick={() => { console.log(dataState.state); }}>

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
            <button className={styles.login__btn} onClick={() => { sendData() }}>{activeMode ? "Зарегистрироваться" : 'Войти'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login