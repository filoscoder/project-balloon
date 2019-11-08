import React, { Component } from 'react';

import Logo from '../resources/icons/logo.png';
import Submit from './Submit';

import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";

const styles = {
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: '20px',
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
  },
  form: {
    width: '100%',
  },
  logo: {
    width: '100%',
    height: 'auto'
  },

  loginTitle: {
    width: '100%',
    display: 'flex',
  },
  dividerlow: {
    width: '90%',
    marginTop: '5px',
  },
  signTyp: {
    width: '10%',
    color: '#868e96',
  },
};

class LoginForm extends Component {
  render() {
    return (
      <Grid container component="main" style={styles.root}>

        <CssBaseline />

        {/* 왼쪽 이미지 그리드 */}
        <Grid item xs={false} sm={4} md={7} style={styles.image} />

        {/* 로그인 폼 그리드 */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

          {/* 로그인 폼 상단 */}
          <div style={styles.paper}>

            <img src={Logo} alt="logo" style={styles.logo} />

            {/* 로그인 문구 */}
            <Typography variant="h6">
              Welcome back!<br />
              Please login to your account
            </Typography>

            {/* 로그인 타이틀 */}
            <div style={styles.loginTitle}>
              <Typography variant="body2" style={styles.signTyp}>
                로그인
              </Typography>
              <Divider style={styles.dividerlow} />
            </div>

            <form style={styles.form} noValidate>

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="이메일 주소"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="비밀번호"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Grid container>
                <Grid item xs>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="로그인 유지"
                  />
                </Grid>

                <Grid item>
                  <Link href="#" variant="body3">
                    비밀번호 찾기
                  </Link>
                </Grid>
              </Grid>

              {/* submit 폼 */}
              <Submit />

            </form>
          </div>

        </Grid>
      </Grid>
    )
  }
}
export default LoginForm;