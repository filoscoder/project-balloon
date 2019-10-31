import React, { Component } from 'react';
import InitKanbanBoard from './InitKanbanBoard'
import KanbanFull from './KanbanFull'

class KanbanBoard extends Component {
  render() {
    return (
      <div>
        <InitKanbanBoard />
        <KanbanFull />
      </div>
    )
  }
}

export default KanbanBoard;