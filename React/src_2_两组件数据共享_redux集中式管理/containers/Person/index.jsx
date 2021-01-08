import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addPersonAction } from '../../redux/actions/person';

class personUI extends Component {
    //state = { id: '', name: '', age: '' }
    containerAge = React.createRef();
    containerName = React.createRef();


    addPerson = () => {
        let name = this.containerName.current.value;
        let age = this.containerAge.current.value;
        this.props.addPersonAction({ id:uuidv4(), name, age });
        this.containerName.current.value = '';
        this.containerAge.current.value = '';
    }

    render() {
        return (
            <Fragment>
                <h2>这是Person组件</h2>
                <h2>上面Count组件的数字是:{this.props.sum}</h2>
                <h2>下面总人数是:{this.props.personNum.length}</h2>
                <input type='text' placeholder='姓名' ref={this.containerName} />
                <input type='text' placeholder='年龄' ref={this.containerAge} />
                <button onClick={this.addPerson}>点击添加</button>
                <ul>
                    {
                        this.props.personNum.map((person) => {
                            console.log(person)
                            return <li key={person.id}>{person.name}--{person.age}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

export default connect(
    state => ({
        sum: state.count,
        personNum: state.person
    }),
    {
        addPersonAction
    }
)(personUI)