import { Alert, Checkbox, Icon } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import React, { useState } from 'react';
import Link from 'umi/link';
import { connect } from 'dva';
import LoginComponents from './components/Login';
import styles from './style.less';
const { Tab, UserName, Password, Mobile, Captcha, Submit } = LoginComponents;

export default connect(({ login, loading }) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))(props => {
  const [type, setType] = useState('account');
  const [autoLogin, setAutoLogin] = useState(true);
  let loginForm = undefined;
  const { dispatch } = props;

  const changeAutoLogin = e => {
    setAutoLogin(e.target.checked);
  };

  const handleSubmit = (err, values) => {
    if (!err) {
      dispatch({
        type: 'login/login',
        payload: { ...values, type },
      });
    }
  };

  const onTabChange = type => {
    setType(type);
  };

  const onGetCaptcha = () =>
    new Promise((resolve, reject) => {
      if (!loginForm) {
        return;
      }

      loginForm.validateFields(['mobile'], {}, async (err, values) => {
        if (err) {
          reject(err);
        } else {
          try {
            const success = await dispatch({
              type: 'login/getCaptcha',
              payload: values.mobile,
            });
            resolve(!!success);
          } catch (error) {
            reject(error);
          }
        }
      });
    });
  const renderMessage = content => (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );

  const { userLogin, submitting } = props;
  const { status, type: loginType } = userLogin;

  return (
    <div className={styles.main}>
      <LoginComponents
        defaultActiveKey={type}
        onTabChange={onTabChange}
        onSubmit={handleSubmit}
        onCreate={form => {
          loginForm = form;
        }}
      >
        <Tab
          key="account"
          tab={formatMessage({
            id: 'user-login.login.tab-login-credentials',
          })}
        >
          {status === 'error' &&
            loginType === 'account' &&
            !submitting &&
            renderMessage(
              formatMessage({
                id: 'user-login.login.message-invalid-credentials',
              }),
            )}
          <UserName
            name="userName"
            placeholder={`${formatMessage({
              id: 'user-login.login.userName',
            })}: admin or user`}
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'user-login.userName.required',
                }),
              },
            ]}
          />
          <Password
            name="password"
            placeholder={`${formatMessage({
              id: 'user-login.login.password',
            })}: ant.design`}
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'user-login.password.required',
                }),
              },
            ]}
            onPressEnter={e => {
              e.preventDefault();

              if (loginForm) {
                loginForm.validateFields(handleSubmit);
              }
            }}
          />
        </Tab>
        <Tab
          key="mobile"
          tab={formatMessage({
            id: 'user-login.login.tab-login-mobile',
          })}
        >
          {status === 'error' &&
            loginType === 'mobile' &&
            !submitting &&
            renderMessage(
              formatMessage({
                id: 'user-login.login.message-invalid-verification-code',
              }),
            )}
          <Mobile
            name="mobile"
            placeholder={formatMessage({
              id: 'user-login.phone-number.placeholder',
            })}
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'user-login.phone-number.required',
                }),
              },
              {
                pattern: /^1\d{10}$/,
                message: formatMessage({
                  id: 'user-login.phone-number.wrong-format',
                }),
              },
            ]}
          />
          <Captcha
            name="captcha"
            placeholder={formatMessage({
              id: 'user-login.verification-code.placeholder',
            })}
            countDown={120}
            onGetCaptcha={onGetCaptcha}
            getCaptchaButtonText={formatMessage({
              id: 'user-login.form.get-captcha',
            })}
            getCaptchaSecondText={formatMessage({
              id: 'user-login.captcha.second',
            })}
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'user-login.verification-code.required',
                }),
              },
            ]}
          />
        </Tab>
        <div>
          <Checkbox checked={autoLogin} onChange={changeAutoLogin}>
            <FormattedMessage id="user-login.login.remember-me" />
          </Checkbox>
          <a
            style={{
              float: 'right',
            }}
            href=""
          >
            <FormattedMessage id="user-login.login.forgot-password" />
          </a>
        </div>
        <Submit loading={submitting}>
          <FormattedMessage id="user-login.login.login" />
        </Submit>
        <div className={styles.other}>
          <FormattedMessage id="user-login.login.sign-in-with" />
          <Icon type="alipay-circle" className={styles.icon} theme="outlined" />
          <Icon type="taobao-circle" className={styles.icon} theme="outlined" />
          <Icon type="weibo-circle" className={styles.icon} theme="outlined" />
          <Link className={styles.register} to="/user/register">
            <FormattedMessage id="user-login.login.signup" />
          </Link>
        </div>
      </LoginComponents>
    </div>
  );
});
