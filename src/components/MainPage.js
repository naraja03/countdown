import "./MainPage.css";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const MainPage = () => {
    const [id, setId] = useState(null)
    const [value, setValue] = useState(0)
    const [data, setData] = useState({})
    let navigate = useNavigate();

    useEffect(() => {
        if (id !== null) {
            document.getElementById(id).innerHTML = value
        }
    }, [value])
    useEffect(() => {

    }, [data])

    const handleChangeTimer = () => {
        const selection = window.getSelection().getRangeAt(0)
        const getId = selection.commonAncestorContainer.parentNode.id;
        setId(getId)
        setValue(0)
    }
    const handleIncrement = () => {
        if (id === null) {
            alert("set your timer")
            return
        }
        if (id === "minutes" || id === "seconds") {
            value >= 60 || value < 0 ? setValue(0) : setValue(value + 1)
        } else {
            value >= 12 || value < 0 ? setValue(0) : setValue(value + 1)
        }
    }
    const handleDecrement = () => {
        if (id === null) {
            alert("set your timer")
            return
        }
        if (id === "minutes" || id === "seconds") {
            value <= 0 ? setValue(60) : setValue(value - 1)
        } else {
            value <= 0 ? setValue(12) : setValue(value - 1)
        }
    }
    const handleCounterDetails = () => {
        setData({
            ...data,
            "hours": document.getElementById("hours").innerText,
            "minutes": document.getElementById("minutes").innerText,
            "seconds": document.getElementById("seconds").innerText,
        })
        if (data.notes) {
            navigate('/timer');
        }
    }


    return (
        <div id="mainPage">
            <div id="main-header">
                <h1>CountDown</h1>
                <div id="timer" onClick={handleChangeTimer}>
                    <h2 id="hours" className="display">0</h2>
                    <h2 id="minutes" className="display">0</h2>
                    <h2 id="seconds" className="display">0</h2>
                </div>
            </div>
            <div id="main-body">
                <div id="timerButtons">
                    <button className={"button"} onClick={handleIncrement}>+</button>&nbsp;
                    <button className={"button"} onClick={handleDecrement}>-</button>
                </div>
                <div id="CountDownInput">
                    <input type={"text"} name="notes" value={data.name} onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} placeholder="Enter Your Data...." />
                    <button onClick={handleCounterDetails} className={"button"}>SetCount</button>
                </div>
            </div>
        </div>
    )
}
export default MainPage