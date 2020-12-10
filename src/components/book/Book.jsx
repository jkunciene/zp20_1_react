import React from 'react'
import './book.css'

function Book() {
    return (
        <div className='parastes'>
            <Image/>
            <Author/>
            <Title/>
            <Price/>
        </div>
    )
}

function Image(){
    return(
    <img src="https://thumb.knygos-static.lt/Pq1U7nzFnufLsW6CjY9Si97z_xk=/fit-in/320x430/filters:cwatermark(static/wm.png,500,75,30)/images/books/2398832/1605271234_Bogdanas_juodas_sniegas_72max.jpg" alt=""/>
    )
}
function Author(){
    return(
        <h2>Ramūna</h2>
    )
}

function Title(){
    return(
        <h4>Juodas sniegas, raudonas dangus</h4>
    )
}

function Price(){
    return(
        <p>15 Eur</p>
    )
}
export default Book
