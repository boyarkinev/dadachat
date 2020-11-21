import styleError from '../commons/FormsControls/FormsControls.module.css';
import classes from './Login.module.css'

import React from 'react';
import { reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';

import { Input, createField } from '../commons/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';


// Создаем собственную форму
const LoginForm = ({handleSubmit, error, captchaUrl}) => {

  return (
    <form onSubmit={handleSubmit} className={classes.loginItems}>
      <div>
        {createField('Е-мэйл', 'email', [required], Input, classes.input)}
      </div>
      <div>
        {createField('Пароль', 'password', [required], Input, classes.input, {type: 'password'})}
      </div>
      <div className={classes.checkboxElems}>
        {createField(null, 'rememberMe', null, Input, null, {type: 'checkbox'})}
        <div className={classes.checkboxDescription}>
          {' '} Запомнить меня
        </div>
      </div>

      { captchaUrl && <img src={captchaUrl} alt="" /> }
      { captchaUrl && createField('Введите код', 'captcha', [required], Input, null, {})}

      {error &&
        <div className={styleError.formSummaryError}>
          {error}
        </div>
      }
      <div>
        <button className={classes.button}>Войти</button>
      </div>
    </form>
  );
};

// Создали хок из redux-библиотеки, в который передаем нашу форму
const LoginReduxForm = reduxForm({
  form: 'login',
  /* В сторе может быть много разных форм, поэтому нужно задать уникальное имя
  Здесь ключ form не связан c одноименным ключом в сторе
  */
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div>
      <h1 className={classes.title}>Войти</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

/* Для начала создали компоненту прямо в файле разметки.
Так можно делать, когда кода немного и он не загромождает приложение.
*/
export default connect(mapStateToProps, {login})(Login);

/* Цепочка:
  1. LoginReduxForm закинет в форму Login событие handleSubmit
  2. handleSubmit вызовется во время события
  3. Внутри handleSubmit вызовется то, что передано в LoginReduxForm
  4. В onSubmit-метод придут данные, собранные контейнерной компонентой LoginReduxForm
*/
