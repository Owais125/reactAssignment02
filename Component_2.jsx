import image_2 from "../assets/hm1-single-1.webp"
import { Button } from "./Button"

const Component_2 = ()=>{
    return(
        <>
        <div className="main_div">
            
           <div className="div_3">
                <img className="img" width={100} src={image_2} alt="" />
            </div>
            <div className="div_1">
                <div className="div_1main">
                <p className="com_2p">30% off</p>
                <h1 className="heading">Comfort Chair</h1>
                <p className="pp" >Collect from Daxone & get 30%</p>
                <Button title="Shpo Now"/>
                </div>

            </div>
           
        </div>
        </>
    )


}
export {Component_2}