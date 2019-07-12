import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { messageContract } from "./EthereumSetup";
import { ShowMessages } from "./ShowMessages";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            threads: [
                { name: "Thread-1", message: 0 },
                { name: "Thread-2", message: 0 },
                { name: "Thread-3", message: 0 }
            ]
        };
    }

    handleMessaging = (thread) => {
        messageContract.addMessageForThread(thread);
        let messages = messageContract.totalMessagesFor(thread).toNumber();
        console.log(messages);
        this.setState({
            threads: this.state.threads.map(el =>
                el.name === thread
                    ? Object.assign({}, el, { message: messages })
                    : el
            )
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Ethereum</h1>
                </header>
                <p className="App-intro">
                    Message Application in Ethereum and React
                </p>
                <div className="thread-table">
                    <ShowMessages
                        threads={this.state.threads}
                        send={this.handleMessaging}
                    />
                </div>
            </div>
        );
    }
}

export default App;
