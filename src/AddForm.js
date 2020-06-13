import React , {Component} from "react";
import $ from "jquery";


class AddForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            id: null,
            content: ""
        };
    }
    handleChange =(event)=>
    {
        console.log(event.target.value);
        $("#errorMessage").addClass("hide");
        if(event.target.value.trim().length)
        this.setState({
            [event.target.id] : event.target.value,
            id : parseInt(Math.random()*100)
        });

    };
    handleSubmit = (event)=>
    {
        event.preventDefault();
        console.log(this.state);
        if(this.state.content.trim().length)
        {
            //$("#errorMessage").addClass("hide");
            this.props.addTodo(this.state);
            this.setState({
                id: null,
                content : ""
            });
        }else
        {
            $("#errorMessage").removeClass("hide");
        }

        //document.getElementById("content").value="";


    };
    handleErrorMessage = () => {

        return <span>Please Enter your name</span>;
    };
    //fetch data to render component
    componentDidMount() {
    }
    //fetch data & update component state
    componentDidUpdate(prevProps, prevState, snapshot) {
    }
    //liberate component data
    componentWillUnmount() {
    }

    render()
    {
        return (
            <div className=" col-md-12">
                <form className="col-md-12" onSubmit={this.handleSubmit}>
                    <div className="alert alert-danger col-md-4 hide" id="errorMessage">{this.handleErrorMessage()}</div>
                    <label htmlFor={"content"}>Add a new Todo:</label>
                    <input
                        type = "text"
                        placeholder="Enter your name here"
                        id="content"
                        name="content"
                        value = {this.state.content}
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