
import React, { Component } from 'react';
import axios from 'axios'
import withRequest from "../lib/withRequest"
class Post extends Component{
    render (){
        return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <td>UserId</td>
                        <td>Id</td>
                        <td>title</td>
                        <td>body</td>
                    </tr>
                </thead>
                <tbody>              
                        {this.props.data === undefined ? (<div></div>) : (
                        this.props.data.map(post => (
                        <tr key={post.id}>
                            <td>
                                {post.userId}
                            </td>
                            <td>
                                {post.id}
                            </td>
                            <td>
                                {post.title}
                            </td>
                            <td>
                                {post.body}
                            </td>
                        </tr>
                        )
                        ))}   
                </tbody>
            </table>
        </div> )
    }
}

export default Post;
