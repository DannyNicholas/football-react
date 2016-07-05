import React from 'react'
import { List } from 'immutable'
import { Fixture } from './Fixture'

export class FixtureList extends React.Component {
    
    render() {
        
        const fixtures =  [{id: '1', dateTime: '2',},{id: '2', dateTime: '3',}]
        
        
        
        //fixtures.map(f => console.log(f))
        
        return (
            <div>
            {this.props.teamName}
                {fixtures.map(f => <Fixture key={f.id} fixture={f} />)}
            </div>
        )
    }
}
    
FixtureList.propTypes = {
  teamName: React.PropTypes.string.isRequired
}
