import React, { useState } from "react";
import Cal from "../src/assets/Cal.svg";
import "./Main.css";
// import { Link } from 'react-router-dom';
import Popup from "./Popup";

function Main() {
    const [buttonPopup, setbuttonPopup] = useState(false);

    // const flex = [{ leftnav: { Holiday: "Holiday", text:"Assign a holiday for your employee"}},{rightnav: {}} ];
    return (
        <div className="main__container">
            <div className="main__navbar">
                <div className="main__leftnav">
                    <h2>Holiday</h2>

                </div>
                <div className="main__rightnav">
                    <img src={Cal} alt="Calender" />
                    <h6>2021</h6>
                </div>
            </div>

            {/* --------------------------------------------------------- */}


            <p className="main__p">Assign a holiday for your employee</p>


            {/* ---------------------------------------------------------- */}


            <div className="main__navbar1">
                <div className="main__navbar1left">
                    <h4>List</h4>
                </div>
                <div className="main__navbar1right">
                    <button className="popup" onClick={()=> setbuttonPopup(true)}>
                        <h4 className="main__navbarright1__click">+ All New
                        </h4>
                    </button>
                    <Popup trigger={buttonPopup} setTrigger={setbuttonPopup}>
                    </Popup>
                    <h4>Filter</h4>
                    <h4>All</h4>
                </div>
            </div>

            {/* ----------------------------------------------------------------- */}

            {/* Creating a table */}
            <table class="table">
                <thead>
                    <tr className="main__borderless">
                        <th scope="col" className=" main__borderless">Name</th>
                        <th scope="col" className="main__borderless">Type</th>
                        <th scope="col" className="main__borderless">Date</th>
                        <th scope="col" className="main__borderless"></th>
                        <th scope="col" className="main__borderless"></th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td className="main__borderless">Rath Yatra</td>
                        <td className="main__borderless">Optional</td>
                        <td className="main__borderless">12 July 2021</td>
                        <td className="main__borderless"></td>
                        <td className="main__borderless"></td>
                    </tr>
                    <tr>

                        <td className="main__borderless">Rath Yatra</td>
                        <td className="main__borderless">Optional</td>
                        <td className="main__borderless">12 July 2021</td>
                        <td className="main__borderless"></td>
                        <td className="main__borderless"></td>
                    </tr>
                    <tr>
                        <td className="main__borderless">Rath Yatra</td>
                        <td className="main__borderless">Optional</td>
                        <td className="main__borderless">12 July 2021</td>
                        <td className="main__borderless"></td>
                        <td className="main__borderless"></td>
                    </tr>
                </tbody>
            </table>



        </div>
    );
}

export default Main;
