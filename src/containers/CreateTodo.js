import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTodo} from "../actions/actionCreator";
import {bindActionCreators} from "redux";

class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {todoText: ''};
        this.onChangeTodoText = this.onChangeTodoText.bind(this);
    }

    onChangeTodoText(e) {
        this.setState({
            todoText: e.target.value
        });
    }

    render() {
        return (
            <div className="form-group row">
                <div className="col-sm-10">
                    <input
                        onChange={this.onChangeTodoText}
                        value={this.state.todoText}
                        type="text"
                        className="form-control"
                        id="inputEmail3"
                        placeholder="Add todo here"/>
                    <button
                        type="button"
                        onClick={() => this.setState({todoText: ''})}
                        style={{marginTop: "25px", marginRight: "15px"}}
                        className="btn btn-danger">
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            this.props.addTodo(this.state.todoText);
                            this.setState({todoText: ''});
                        }}
                        style={{marginTop: "25px"}}
                        className="btn btn-success">
                        Add Todo
                    </button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addTodo
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(CreateTodo);