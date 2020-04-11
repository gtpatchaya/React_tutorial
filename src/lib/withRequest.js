import React , {Component} from 'react'
import axios from 'axios'
export default (url) => (WarppedComponent) =>
    class extends Component {
        state = {
            data :[]
        };
        async componentDidMount() {
            const result = await axios.get(url);
    
            console.log(result)
            this.setState({data : result.data});
        }
        render(){
            return <WarppedComponent {...this.state} {...this.props}/>
        }
    }