import React , {useEffect}from 'react'
import '../styles/start.css'

import Button from './Button'


const Start = (props) => {


    return (
        <div className="start">
           
                <img  className="start__background" 
                      src="https://res.cloudinary.com/duykdzv1k/image/upload/v1616420398/background_3x_b623c176b6.png" 
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

                <img  className="start__planet start__planet--1" 
                      src="https://res.cloudinary.com/duykdzv1k/image/upload/v1616412338/planet_earth_3x_a9d0f92f21.png" 
                      alt="earth"
                />       
                <img  className="start__planet start__planet--2" 
                      src="https://res.cloudinary.com/duykdzv1k/image/upload/v1616412338/planet_milkbottle_3x_231688a131.png" 
                      alt="milkbottle"
                />       
                <img  className="start__planet start__planet--3" 
                      src="https://res.cloudinary.com/duykdzv1k/image/upload/v1616412338/planet_cow_3x_c68b36b8d1.png" 
                      alt="cow"
                />       

                <img  className="start__planet start__planet--4" 
                      src="https://res.cloudinary.com/duykdzv1k/image/upload/v1616414929/rocket_3x_a8245d30ef.png" 
                      alt="rocket"
                />  


                <img  className="start__planet start__planet--5" 
                      src="https://res.cloudinary.com/duykdzv1k/image/upload/v1616412338/whitebear_3x_a531362891.png" 
                      alt="whitebear"
                />  


               



                <div className="start__buttonContainer">
                    <Button text={'游戏说明'} />
                    <Button text={'开始游戏'} />
                </div>
                

        </div>
    )
}

export default Start