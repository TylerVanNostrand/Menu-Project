
import React, { Component } from "react"
import axios from "axios"

// Model
class Items extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuData: {},
        }
    }

    componentDidUpdate() {
    }

    componentDidMount() {
        this.getAPI();
    }

    getAPI() {
        // Make a request for a user with a given ID
        const apiKey = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com"
        //let this = this;
        axios.get(apiKey + "/api/menu/type_amount/" + this.props.uri)
            .then(response => {
                this.setState({
                    menuData: response.data
                })
            })
            .catch(function (error) {
            })
            .then(function () {
            });
    }

    inputData() {
     
    }

    // View
    render() {
        const foodName = this.state.menuData[0]?.name;
        const foodText = this.state.menuData[0]?.description;
        return (
            
            <div className="col-md-4 col-sm-12 justify-content-center">
                <div className="card card-body flex-column text-center p-6 mb-2 bg-dark text-white">
                    <img className="card-img-top" src={this.props.src} alt='Breakfast'/>
                    <br></br>
                    <p>  {foodName}</p>
                    <p>${Math.ceil(Math.random() * 25.50).toFixed(2)}</p>
                    <p>{foodText}</p>
                </div>
            </div>
        )
    }

}




export default Items



