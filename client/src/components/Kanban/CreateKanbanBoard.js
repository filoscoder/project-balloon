import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Project from '../resources/icons/project.png'
import { cancel_newProject, change_projectId, get_projectList } from '../../store/actions/Kanban/projectList'
import { connect } from 'react-redux';
import './CreateKanbanBoard.css'



class CreateKanbanBoard extends Component {
    // 닫기
    handleClose = () => {
        const { dispatch } = this.props
        dispatch(cancel_newProject())
    }

    // 시작하기 버튼 클릭 시 프로젝트 생성 및 DB저장
    handleStart = (e) => {
        console.log("handleStart 호출")
        e.preventDefault();
        const { dispatch } = this.props
        let data = {
            id: e.target.id.value,
            name: e.target.name.value,
            type: e.target.type.value

        }

        if (data.id !== '' && data.name !== '' && data.type !== '') {
            fetch('/newProject', {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                mode: "cors",
                body: JSON.stringify(data)
            })
                .then(data => console.log(data))
                .then(dispatch(cancel_newProject()))
                .then(dispatch(get_projectList('1')))
                .then(dispatch(change_projectId(data.id)))
                .catch(error => console.log(error));

        }

    }

    render() {


        return (
            <div>
                <Dialog open={this.props.open} onClose={this.handleClose}>
                    <div className="form-add">
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
                        {/* action="/newProject" method="post"  */}
                        <form onSubmit={this.handleStart} className="newProjectForm">
                            <DialogContent>
                                <div className="form-content-project">
                                    <div className="form-label">
                                        <label>Project name</label><br />
                                        <label>Type</label><br />
                                        <label>Invite</label>
                                    </div>
                                    <div className="form-input">
                                        <input type="hidden" name="id" className="newProjectId" value={this.props.project_id} />
                                        <input type="text" name="name" className="input-project-name" placeholder="프로젝트 제목" />
                                        <input type="text" name="type" className="input-type" placeholder="프로젝트 유형" />
                                        <input type="text" name="inviteList" placeholder="프로젝트 초대" />
                                    </div>
                                </div>
                            </DialogContent>

                            <DialogActions>
                                <div className="form-button">
                                    <div className="button-play">
                                        <Button type="submit" variant="contained" color="primary" >시작하기</Button>
                                    </div>

                                    <div className="button-cencle">
                                        <Button variant="outlined" color="primary" onClick={this.handleClose}>취소</Button>
                                    </div>
                                </div>
                            </DialogActions>
                        </form>
                    </div>
                </Dialog>
            </div>
        )
    }
}

export default connect()(CreateKanbanBoard);