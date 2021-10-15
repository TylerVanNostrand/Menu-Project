import React, { Component } from "react"
import Items from "./Items"


    // Model
class Section extends Component {
  

    // Controller
    componentUpdate() {
    }

    componentMount() {
    }


    // View
    render() {
        const randomImg = [
            './img/sausage.png',
            './img/bacon.jpeg',
            './img/omlette.jpeg',
            './img/waffles.jpeg',
            './img/homefries.png',
            './img/grits.jpeg',
            './img/pancakes.png',
            './img/tomato.jpeg',
            './img/ham.jpeg',
        ]
        const randomImgDessert = [
            './img/pie.png',
            './img/donut.png',
            './img/cinbun.png',
        ]
        const randomImgDrink = [
            './img/tea.jpeg',
            './img/coffe.jpeg',
            './img/milk.jpeg',
            './img/pepsi.jpeg',
            './img/ale8.jpeg',
            './img/hotchoco.jpeg',
        ]
        return (

            <div>

                <h4 className='border border-top border-dark border-5 p-3'>All Day Breakfast</h4>
                <div className='row row-cols-md-3 row-cols-sm-1'>
                    {randomImg.slice(0,9).map((item,index) => <Items uri={'1/8'} src={item} key={index}/>)}
                </div>
                <h4 className='border border-top border-dark border-5 p-3'>For Your Sweet Tooth</h4>
                <div className='row row-cols-md-3 row-cols-sm-1'>
                    {randomImgDessert.slice(0,3).map((item,index) => <Items uri={'7/8'} src={item} key={index}/>)}
                </div>
                   <h4 className='border border-top border-dark border-5 p-3'>Drinks</h4>
                <div className='row row-cols-md-3 row-cols-sm-1'>
                    {randomImgDrink.slice(0,6).map((item,index) => <Items uri={'8/6'} src={item} key={index}/>)}
                </div>
            </div>




        )
    }
}

export default Section;