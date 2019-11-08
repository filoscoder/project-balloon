import React, { Component, useState } from 'react';

import Logo from '../resources/icons/logo.png'
import { post } from 'axios';

import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Divider from "@material-ui/core/Divider";
import Typography from '@material-ui/core/Typography';

const styles = {
    submitForm: {
        display: 'inline-block',
        textAlign: "center",
    },
    submit: {
        width: '145px',
        height: '55px',
        margin: '10px',
        fontWeight: 'bold',
    },

    logo: {
        width: '100%',
        height: 'auto'
    },

    signupForm: {
        width: '430px',
        height: '600px'
    },

    decisionForm: {
        marginRight: '20px',
    },

    contentForm: {
        marginTop: '-35px',
    },

    signup: {
        width: '105px',
        height: '45px',
        fontWeight: 'bold',
        marginRight: '10px'
    },
    cencle: {
        width: '105px',
        height: '45px',
        fontWeight: 'bold',
    },

    titleForm: {
        display: 'flex'
    },
    dividerlow: {
        width: '83%',
        marginTop: '5px',
    },
    signTyp: {
        textAlign: 'right',
        marginLeft: '5px',
        color: '#868e96',
    },

    birthday: {
        marginTop: '12px',
        marginLeft: '5px',
        marginRight: '10px',
        width: '200px',
    },

    textForm: {
        display: 'flex'
    },

    checkboxForm: {
        marginTop: '30px',
        marginLeft: '20px',
        display: 'flex'
    },
};


class Submit extends Component {

    // 생성자
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            email: '',
            password: '',
            name: '',
        }
    }

    // submit버튼이 눌려졌을 때 addCustomer함수를 호출한다.
    handleFormSubmit = (e) => {
        e.preventDefault()

        this
            .addCustomer()

        this
            .setState({
                open: false,
                email: '',
                password: '',
                name: '',
            })
    }

    // 입력값이 변경되었을 때
    handleValueChange = (e) => {
        let nextState = {};

        // 이름값을 변경했을때 userName이 name이기때문에 userName이라는 실제 state에 반영한다.  
        nextState[e.target.name] = e.target.value;

        // nextState를 이용해서 현재 state값을 갱신해준다.
        this.setState(nextState);
    }

    // 추가할 생성자 
    addCustomer = () => {
        console.log(this.state);

        let data = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name
        }

        fetch('/api/customers', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: "cors",
            body: JSON.stringify(data)
        })
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }

    // 열기
    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

    // 닫기
    handleClose = () => {
        this.setState({
            open: false
        })
    }

    render() {

        const { classes } = this.props;

        return (
            <div className="submit">
                <Grid container style={styles.submitForm}>
                    <Grid item>
                        <Fab variant="extended" color="primary" aria-label="login" style={styles.submit}>
                            로그인
                        </Fab>

                        <Fab variant="extended" aria-label="signup" style={styles.submit} onClick={this.handleClickOpen}>
                            회원가입
                        </Fab>
                    </Grid>
                </Grid>

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

            </div>
        )
    }
}

export default Submit;