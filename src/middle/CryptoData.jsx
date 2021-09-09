import axios from "axios";
import { useEffect, useState } from "react";
import finstreet from "../assets/finstreet.png";
import lost from "../assets/lost.png";
import "./CryptoData.css";
import { Button } from "@material-ui/core";



const CryptoData = () => {


    return (
        <div>
            <div className="bestprice">  <h2>Best Price To Trade</h2></div>
            <div className="coinsVariation">

                <Button variant="contained">{"change 5 mins"}</Button><br />

                <Button variant="contained">{"change 1 hr"}</Button><br />

                <Button variant="contained">{"change 1hr"}</Button><br />
                <Button variant="contained">{"24hr"}</Button><br />
            </div>
            <div className="label">
                <label>5 mins</label> <label>1Hr</label> <label>7 Day</label> <label>24 Hr</label>
            </div>
            <div>  <h5>Average bitcoin/INR net price including commission</h5></div>
            <div>
                <a href="https://finstreet.in/">  <img src={finstreet} alt="finestreet" /></a>

            </div>
            <div>
                <div>Platform</div>

            </div>




            <div>
                <a href="https://ftx.com/">  <img src={lost} alt="lost" /></a>

            </div>

        </div>
    )
}
export default CryptoData;