import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
var axios = require('axios');

class UserHome extends Component{
    render(){
        return (
            <div>
                <div>
                    <table style={{"width":"100%"}}>
                        <tr>
                            <td>
                                <input type="button" value="Create Request" onClick=""></input>
                            </td>
                            <td>
                                <input type="button" value="See all requests" onClick=""></input>
                            </td>
                            <td>
                                <h3 style={{"text-align":"right"}}>username</h3>
                            </td>
                        </tr>
                    </table>
                </div>
                <h2>Pending requests for guidance</h2>
                <ul>
                    
                </ul>
                <h2>Chats with mentors</h2>
                <ul>
                
                </ul>
            </div>
        );
    }
}

export default UserHome;