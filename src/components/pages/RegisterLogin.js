import React, { Component } from "react";
//import Form, { Form } from "react";

class RegisterLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Username' placeholder='username' />
                        <Form.Input fluid label='Password' placeholder='password' />
                    </Form.Group>
                    <Form.Button>Submit</Form.Button>
                </Form>
            </div>
        );
    }
}

export default RegisterLogin;