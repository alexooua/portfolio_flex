import React from 'react';
import s from './Main.module.css';
import './Main.css'
// import photo from '../../common/images/'


function Main() {
    return (
        <div className ={s.main} id="0">

            <div className="container">
                <div className="greeting">
                    <span className="hello">Hello!</span>
                    <span className="name">I'm Zaiats Aleksei</span>
                    <span className="whoAmI">FRONTEND DEVELOPER</span>
                </div>

                <div className="wrapper">
                    <div className="card">
                        <div className="front"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
