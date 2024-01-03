import image_2 from "../assets/banner-1.webp"
import { Button } from "./Button"


const Component_6 = () => {
    return (
        <>
            <div className="main_div container">

                <div className="div_3">
                    <img className="img" width={100} src={image_2} alt="" />
                </div>
                <div className="div_1">
                    <div className="div_1main">
                        <p >Lorem Ipsum is simply dummy text of the <br />
                            printing and typesetting industry</p>
                        <h1 className="heading">Winter Discount
                            Up to 30%</h1>
                        <p className="pp" >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <Button title="Shpo Now" />
                    </div>

                </div>

            </div>
        </>
    )


}
export { Component_6 }