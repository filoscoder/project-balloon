import React, { Component } from 'react';
import './TopKanbanBoard.css'
import NewProject from '../resources/icons/new-project.png'
import Setting from '../resources/icons/setting.png'
import TopAddKanbanBoard from './TopAddKanbanBoard';

class TopKanbanBoard extends Component {
    render() {
        return (
            <div className="top-form">

                <div className="top-form-project">
                    <TopAddKanbanBoard />

                    <div className="top-form-setting">
                        <img src={Setting} alt="setting" />
                    </div>
                </div>

            </div>
        )
    }
}

export default TopKanbanBoard;