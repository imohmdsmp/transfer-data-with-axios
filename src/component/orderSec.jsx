import axios from "axios"
import { Component } from "react"

class OrderInp extends Component{
constructor(props){
    super(props)
    this.state={
        product:'',
        weight:'',
        vehicle_type:'',
        loading_location:'',
        unloading_loc:'',
        loading_date:'',
        border_passage:'',
        loading_hour:'',
        description:''
    }
    this.Change = this.Change.bind(this)
}

    Change(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    componentDidUpdate(){
        console.log(this.state)
    }

    PostDataHandler = ()=>{

        axios.post('https://jsonplaceholder.typicode.com/posts/',
            {
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    product:this.state.product,
                    weight:this.state.weight,
                    vehicle_type:this.state.vehicle_type,
                    loading_location:this.state.loading_location,
                    unloading_loc:this.state.unloading_loc,
                    loading_date:this.state.loading_date,
                    border_passage:this.state.border_passage,
                    loading_hour:this.state.loading_hour,
                    description:this.state.description
                })
            }
        )
        .then(res => console.log(res))
        }

render(){
    return(
<div className="flex-column">
    <label htmlFor="product"></label>
    <input className="text-end" onChange={this.Change} type="text" id="product" name="product" placeholder="نوع کالا" />

    <label htmlFor="weight"></label>
    <input className="text-end" onChange={this.Change} type="text" id="weight" name="weight" placeholder="وزن" />

    <label htmlFor="vehicle_type"></label>
    <input className="text-end" onChange={this.Change} type="text" id="vehicle_type" name="vehicle_type" placeholder="نوع ناوگان" />

    <label htmlFor="loading_location"></label>
    <input className="text-end" onChange={this.Change} type="text" id="loading_location" name="loading_location" placeholder="محل بارگیری" />


    <label htmlFor="unloading_loc"></label>
    <input className="text-end" onChange={this.Change} type="text" id="unloading_loc" name="unloading_loc" placeholder="محل تخلیه" />


    <label htmlFor="loading_date"></label>
    <input className="text-end" onChange={this.Change} type="text" id="loading_date" name="loading_date" placeholder="تاریخ بارگیری" />

    <label htmlFor="border_passage"></label>
    <input className="text-end" onChange={this.Change} type="text" id="border_passage" name="border_passage" placeholder="نام اعلام کننده بار" />

    <label htmlFor="loading_hour"></label>
    <input className="text-end" onChange={this.Change} type="text" id="loading_hour" name="loading_hour" placeholder="ساعت بارگیری" />

    <textarea name="description" onChange={this.Change} id="description" cols="30" rows="1" placeholder="توضیحات" className="text-end">

            </textarea>

    <input type="submit" onClick={this.PostDataHandler} value={'تایید'} />
</div>
)
}
}


export default class FormOrder extends Component{
OrderHieght = ()=>{
const headerHeight = document.querySelector('header').offsetHeight
const footerHeight = document.querySelector('footer').offsetHeight
document.querySelector('#orderSec>div>div').style.cssText='overflow:scroll;height:calc(100vh - '+(footerHeight +
(headerHeight + 15) + 10)+'px)'
}


componentDidMount(){
this.OrderHieght()
}

render(){

return(
<div className="container-fluid mt-4" id="orderSec">
    <div className="row">
        <OrderInp />
    </div>
</div>
)
}
}