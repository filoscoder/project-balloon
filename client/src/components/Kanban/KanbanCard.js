import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import styled from "styled-components"

const CardContainer = styled.div`
  margin-bottom: 8px
  
`

class KanbanCard extends Component {
    render() {
        return (
            <CardContainer>
                <Card>
                    <CardContent>
                        <Typography>
                            {this.props.content}
                        </Typography>

                    </CardContent>
                </Card>
            </CardContainer>

        )
    }
}

export default KanbanCard;