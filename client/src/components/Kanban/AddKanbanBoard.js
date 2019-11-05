import React, { Component } from 'react';
import NewProject from '../resources/icons/new-project.png'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Project from '../resources/icons/project.png'
import './AddKanbanBoard.css'

const styles = theme => ({
    hidden: {
        display: 'none'
    },

});

class AddKanbanBoard extends Component {

    // 생성자
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
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


        return (
            <div>
                <div className="form-new-project">
                    <img src={NewProject} alt="new-project" onClick={this.handleClickOpen} />
                </div>

                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <div class="form-add">
                        <DialogTitle>
                            <div className="form-add-project">
                                <div className="img-add-project">
                                    <img src={Project} alt="project" />
                                </div>
                                <div className="content-add-project">
                                    새 프로젝트
                                </div>
                            </div>
                        </DialogTitle>

                        <DialogContent>
                            <div className="form-content-project">
                                <div className="form-label">
                                    <label>Project name</label><br />
                                    <label>Type</label><br />
                                    <label>Invite</label>
                                </div>
                                <div className="form-input">
                                    <input type="text" className="input-project-name" placeholder="프로젝트 제목" />
                                    <input type="text" className="input-type" placeholder="프로젝트 유형" />
                                    <input type="text" className="input-invite" placeholder="프로젝트 초대" />
                                </div>
                            </div>
                        </DialogContent>

                        <DialogActions>
                            <div className="form-button">
                                <div className="button-play">
                                    <Button variant="contained" color="primary">시작하기</Button>
                                </div>

                                <div className="button-cencle">
                                    <Button variant="outlined" color="primary" onClick={this.handleClose}>취소</Button>
                                </div>
                            </div>
                        </DialogActions>
                    </div>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(AddKanbanBoard);