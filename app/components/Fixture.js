import React from 'react'
import { List } from 'immutable'

export class Fixture extends React.Component {
    
    render() {
        
        //const fixtures = {fixtures: [{fixture: '1', dateTime: '2',},{fixture: '2', dateTime: '3',}]}
        
        
        
       console.log(this.props.fixture)
        
        return (
            <div>{this.props.fixture.id}</div>
        )
    }
}
    
//Fixture.propTypes = {
//  fixture: React.PropTypes.string.isRequired
//}
