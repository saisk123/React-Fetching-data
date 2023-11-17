import React, {Component} from 'react'


class Welcome extends Component{
    render() {
        return (
            <div>
                <h1>Welcome {this.props.name}</h1>
                <br/>
                <h3>Class Component</h3>

            </div>
        );

        // return React.createElement(
        //     'div',{id: 'Welcome',className: 'dummy'},
        //     React.createElement('h1',null,'Welcome'),
        //     React.createElement('h3',null,'Class Component')
        // )
    }
}

export default Welcome