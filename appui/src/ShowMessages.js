import React, { Component } from "react";
import "./ShowMessages.css";

export class ShowMessages extends Component {
    handleChange = message => {
        let _message = message;
        this.props.send(_message);
    };

    render() {
        let messageList = this.props.threads.map((thread, i) => (
            <tr key={i}>
                <td onClick={this.handleChange.bind(this, thread.name)}>
                    {thread.name}
                </td>
                <td>{thread.message}</td>
            </tr>
        ));

        return (
            <div>
                <h3> Message Threads </h3>
                <hr />
                <table>
                    <tbody>
                        <tr>
                            <th>Thread</th>
                            <th>Message Count</th>
                        </tr>
                        {messageList}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ShowMessages;
