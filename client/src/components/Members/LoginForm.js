import React, { Component } from "react";

import Logo from "../../components/resources/icons/logo.jpeg";

import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
import Card from "@material-ui/core/Card";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { connect } from "react-redux";
import { setUser } from "../../store/actions/members";

const styles = {
  root: {
    height: "100vh"
  },
  background: {
    background: "#F9EFED",
    padding: '25px'
  },
  textField: {
    background: "white"
  },
  welcome: {
    background: "#F9EFED",
    padding: "10px",
    border: 'none'
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: "20px",
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    background: "#F9EFED",
    border: "none"
  },
  form: {
    width: "100%"
  },
  logo: {
    width: "100%",
    height: "auto"
  },

  loginTitle: {
    width: "100%",
    display: "flex"
  },
  dividerlow: {
    width: "90%",
    marginTop: "5px"
  },
  signTyp: {
    width: "10%",
    color: "#868e96"
  },
  submitForm: {
    display: "inline",
    textAlign: "center"
  },
  submit: {
    width: "145px",
    height: "55px",
    margin: "10px",
    fontWeight: "bold"
  },
  signupForm: {
    width: "430px",
    height: "600px",
    background: "#F9EFED",
    padding: '20px'
  },

  decisionForm: {
    marginRight: "20px"
  },

  contentForm: {
    marginTop: "-35px"
  },

  signup: {
    width: "105px",
    height: "45px",
    fontWeight: "bold",
    marginRight: "10px"
  },
  cencle: {
    width: "105px",
    height: "45px",
    fontWeight: "bold"
  },

  titleForm: {
    display: "flex"
  },
  dividerlow: {
    width: "83%",
    marginTop: "5px"
  },
  signTyp: {
    textAlign: "right",
    marginLeft: "5px",
    color: "#868e96"
  }
};

class LoginForm extends Component {
  // 생성자
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      email: "",
      password: "",
      name: ""
    };
  }

  // submit버튼이 눌려졌을 때 addCustomer함수를 호출한다.
  handleFormSubmit = e => {
    e.preventDefault();

    this.addCustomer();

    this.setState({
      open: false,
      email: "",
      password: "",
      name: ""
    });
  };

  // 추가할 생성자
  addCustomer = () => {
    console.log("addCustomer 호출", this.state);

    let data = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name
    };
    console.log(data);

    fetch("/api/customers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      mode: "same-origin",
      credentials: "include",
      body: JSON.stringify(data)
    })
      .then(data => console.log("입력 후 ", data))
      .catch(error => console.log("err", error));
  };

  // 열기
  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  // 닫기
  handleClose = () => {
    this.setState({
      open: false
    });
  };

  // 입력값이 변경되었을 때
  handleValueChange = e => {
    let nextState = {};

    // 이름값을 변경했을때 userName이 name이기때문에 userName이라는 실제 state에 반영한다.
    nextState[e.target.name] = e.target.value;

    // nextState를 이용해서 현재 state값을 갱신해준다.
    this.setState(nextState);
  };

  // 로그인 버튼이 눌렸을 때
  handleLogin = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    this.loginCustomer();

    this.setState({
      email: "",
      password: ""
    });
  };

  // 로그인한 고객
  loginCustomer = () => {
    console.log(this.state);
    const { dispatch } = this.props;

    let data = {
      email: this.state.email,
      password: this.state.password
    };

    fetch("/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      mode: "cors",
      credentials: "include",
      body: JSON.stringify(data)
    })
      // .then(response => console.log(response.json()))
      // .then(sessionStorage.setItem('user', this.state.email))
      // // .then(dispatch(checkSession()))
      // .then(dispatch(setUser(sessionStorage.getItem('user'))))
      //
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson.email);
        return myJson.email;
      })
      .then(function(email) {
        fetch("/api/checksession")
          .then(function(response) {
            return response.json();
          })
          .then(function(sess) {
            console.log(sess.email);
            if (email === sess.email) {
              return dispatch(setUser(sess.email));
            }
          });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <Grid container component="main" style={styles.root}>
        <CssBaseline />

        {/* 왼쪽 이미지 그리드 */}
        <Grid item xs={false} sm={4} md={7} style={styles.image} />

        {/* 로그인 폼 그리드 */}
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          style={styles.background}
        >
          {/* 로그인 폼 상단 */}
          <div style={styles.paper}>
            <img src={Logo} alt="logo" style={styles.logo} />

            {/* 로그인 문구 */}
            
              <Typography variant="h6" style={styles.welcome}>
                Welcome back!
                <br />
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
                value={this.state.email}
                onChange={this.handleValueChange}
                style={styles.textField}
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
                autoComplete="password"
                value={this.state.password}
                onChange={this.handleValueChange}
                style={styles.textField}
              />

              <Grid container>
                <Grid item xs>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="로그인 유지"
                  />
                </Grid>

                <Grid item>
                  <Link href="#" variant="body2">
                    비밀번호 찾기
                  </Link>
                </Grid>
              </Grid>

              {/* submit 폼 */}
              <Grid container style={styles.submitForm}>
                <Grid item>
                  <Fab
                    variant="extended"
                    color="primary"
                    aria-label="login"
                    style={styles.submit}
                    onClick={this.handleLogin}
                  >
                    로그인
                  </Fab>

                  <Fab
                    variant="extended"
                    aria-label="signup"
                    style={styles.submit}
                    onClick={this.handleClickOpen}
                  >
                    회원가입
                  </Fab>

                  {/* 회원가입 폼 */}
                  <Dialog open={this.state.open} onClose={this.handleClose}>
                    <form style={styles.signupForm}>
                      <DialogTitle>
                        <img src={Logo} alt="logo" style={styles.logo} />

                        <div style={styles.titleForm}>
                          <Divider style={styles.dividerlow} />
                          <Typography variant="body2" style={styles.signTyp}>
                            회원정보
                          </Typography>
                        </div>
                      </DialogTitle>

                      <div style={styles.contentForm}>
                        <DialogContent>
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
                            value={this.state.email}
                            onChange={this.handleValueChange}
                            style={styles.textField}
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
                            autoComplete="password"
                            value={this.state.password}
                            onChange={this.handleValueChange}
                            style={styles.textField}
                          />

                          <div style={styles.titleForm}>
                            <Divider style={styles.dividerlow} />
                            <Typography variant="body2" style={styles.signTyp}>
                              추가정보
                            </Typography>
                          </div>

                          <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="name"
                            label="이름"
                            id="name"
                            autoComplete="name"
                            value={this.state.name}
                            onChange={this.handleValueChange}
                            style={styles.textField}
                          />
                        </DialogContent>
                      </div>

                      <div style={styles.actionForm}>
                        <DialogActions>
                          <Grid style={styles.decisionForm}>
                            <Fab
                              variant="extended"
                              color="primary"
                              aria-label="signup"
                              style={styles.signup}
                              onClick={this.handleFormSubmit}
                            >
                              회원가입
                            </Fab>

                            <Fab
                              variant="extended"
                              aria-label="signup"
                              style={styles.cencle}
                              onClick={this.handleClose}
                            >
                              취소
                            </Fab>
                          </Grid>
                        </DialogActions>
                      </div>
                    </form>
                  </Dialog>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default connect()(LoginForm);
