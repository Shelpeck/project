import React from 'react';
import boyImg from "../boy.png";
import girlImg from "../girl.png";

const Gender = () => {
    return (
        <div className="gender">
            <h1>Выберите пол:</h1>
            <img src={boyImg} className="gender--img"/>
            <img src={girlImg} className="gender--img"/>
        </div>
    );
};

export default Gender;