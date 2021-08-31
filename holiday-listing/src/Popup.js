import React from 'react'
import './Popup.css'
import Cal from "../src/assets/Cal.svg";
import close1 from "../src/assets/close1.svg";
import close2 from "../src/assets/close2.svg";

function Popup(props) {
    return (props.trigger) ? (
        <div className="pop__up">
            <div className="pop__up_inner">
                
                <button className="close_btn" onClick={() => props.setTrigger(false)}><img src={close1}/></button>

                <div className="popup__content">
                    <h3>Add New Holiday</h3>

                </div>
                <div className="popup__content__flex">
                    <div className="popup__content__flexleft">
                        <div className="popup__content__flexleft__Name">
                            <h4>Name</h4>
                            <input type="text" placeholder="Holiday Name" />
                            <br />
                            <hr />
                        </div>
                        
                        <h4>Date</h4>
                        <div className="popup__content__flexleft_date">
                            <input type="datetime" name="" id="" />
                            <img src={Cal} alt="Calender" />
                        </div>
                        <div className="popup__content__flexleft__type">
                            <h4>Type</h4>
                            <select>
                                <option value="Optional">Optional</option>
                            </select>
                            <br />
                            <hr />
                        </div>
                    </div>
                    <div class="vl"></div>
                    <div className="popup__content__flexright">
                        <p>Download Sample in .csv format file to ensure that you have the correct file ready to import</p>
                        <input type="file" size="60" />
                    </div>

                </div>

            </div>

        </div>
    ) : "";
}

export default Popup
