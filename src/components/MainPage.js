import React, {Component} from 'react';
import { Label, Button } from 'semantic-ui-react'
class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: "Home", 
            file: null,
            fileReader: null
        };
        this.onChange = this.onChange.bind(this);
        this.handleFileEnd = this.handleFileEnd.bind(this);
    }

    handleFileEnd(e){
        const content = (this.state.fileReader).result;
       /* fetch('http://127.0.0.1:5001/upload/submit', {
            method: 'POST',
            body: JSON.stringify({
                content: content,
                sender: "Agah",
                fileName:this.state.file.name,
                type: this.state.file.type
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res=>res.text).then(data => console.log(data));*/
    }

    onChange(e){
        const file = e.target.files[0];
        const fileReader = new FileReader();
        this.setState({fileReader: fileReader, file: file}, ()=>{
            fileReader.readAsArrayBuffer(file);
        });
        fileReader.onloadend = this.handleFileEnd;
    }

    render() {
        return (
            <div>
                <Label as="label" basic htmlFor="upload">
                    <Button icon="upload" label={{basic: true,content: 'Select file(s)'}} labelPosition="right"/>
                    <input hidden id="upload" multiple type="file" onChange={this.onChange}/>
                </Label>
            </div>
        );
    }
}

export default MainPage;
