import React from 'react'
import '../styles/start.css'

import Button from './Button'
const Start = () => {
    return (
        <div class="start">
           
                <img  className="start__background" 
                      src="https://res.cloudinary.com/duykdzv1k/image/upload/v1616406613/background_3x_745362727f.png" 
                      alt="background"
                />     

                 <img  className="start__title" 
                      src="https://res.cloudinary.com/duykdzv1k/image/upload/v1616408614/title_3x_67c36e8ec8.png" 
                      alt="title"
                />       
                
                <div className="start__text">
                    <p>
                        带着白熊宝宝寻找Aptamil有机星球 <br/>
                        成为<strong>Aptamil认证代购官</strong><br/>
                        赢取<strong>首单免费和更多大礼</strong>
                    </p>
                </div>

                <div className="start__buttonContainer">
                    <Button text={'游戏说明'} />
                    <Button text={'开始游戏'} />
                </div>
                

        </div>
    )
}

export default Start