import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

    file(e){
        this.setState({
            selectFile: e.target.files[0]
        });
    }
    send() {
        var data = new FormData();
        console.log(this.state.selectFile);
        data.append('file', this.state.selectFile, this.state.selectFile.name);
        axios.post('/upload', data);
        alert('votre fichier à été upload');
    }
    render() {
        return (
            <div>
                <h1>Upload files</h1>
                <div className="cont">
                    <div className="input-group mb-3">
                        <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile02"
                               onChange={this.file.bind(this)}
                        />
                            <label className="custom-file-label" htmlFor="inputGroupFile02"
                                   aria-describedby="inputGroupFileAddon02">choose file</label>
                        </div>
                        <div className="input-group-append">
                        <button className="input-group-text" id="inputGroupFileAddon02" onClick={this.send.bind(this)}>Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;