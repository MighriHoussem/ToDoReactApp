import React , {Component} from "react";


class AddForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            id: null,
            content: null
        };
    }
    handleChange =(event)=>
    {
        console.log(event.target.value);
        this.setState({
            [event.target.id] : event.target.value
        });

    };
    handleSubmit = (event)=>
    {
        event.preventDefault();
        this.state.id = parseInt(Math.random()*100);
        console.log(this.state);

        this.props.addTodo(this.state);
        this.setState({
            id: null,
            content : null
        });
        document.getElementById("content").value="";


    };
    render()
    {
        return (
            <div className={"container"}>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor={"content"}>Add a new Todo:</label>
                    <input
                        type = "text"
                        placeholder="Enter your name here"
                        id="content"
                        name="content"
                        maxLength="20"
                        minLength="5"
                        onChange={this.handleChange}
                    />

                </form>
            </div>
        );
    }
}

export default AddForm;