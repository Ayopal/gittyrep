/** @format */

import React from "react";
import fork from "../img/GitFork.png";
import star from "../img/Star.png";

function RightProfile() {
	return (
        <div className="rightwrapper">
            <div className="card">
                <div>
                <h2>User's Page'</h2>
                </div>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio debitis ullam non eaque similique magni earum ut doloribus nihil doloremque.
                </p>

<div className="icons">
        <img src={fork} alt="" />
        <img src={star} alt="" />
        <p>public</p>

</div>

            </div>
        </div>
    );
}

export default RightProfile;
