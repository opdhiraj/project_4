import { Button, MenuItem, Select } from "@material-ui/core";
import { useState } from "react";
import holdinfo from "../assets/holdinfo.png";
import "./header.css";

const Header = () => {

    const [listOfCrypto, setListOfCrypto] = useState([]);
    const handleCryptoList = (event) => {
        setListOfCrypto(event.target.value)

    }
    return (

        <div className="logo">
            <div>
                <a href="Home.jsx"><img src={holdinfo} alt="holdinfo" /></a>
                <p>Powered By<a href="Home.jsx"><strong>Finstreet</strong></a></p>
            </div>
            <div>

                <Select>
                    <MenuItem value={1}>INR</MenuItem>
                </Select>
                <Select value={listOfCrypto} onChange={handleCryptoList}>

                    <MenuItem value={1}>BTC</MenuItem>
                    <MenuItem value={2}>ETH</MenuItem>
                    <MenuItem value={3}>USDT</MenuItem>
                    <MenuItem value={4}>XRP</MenuItem>
                    <MenuItem value={5}>TRX</MenuItem>
                    <MenuItem value={6}>DASH</MenuItem>
                    <MenuItem value={7}>ZEC</MenuItem>
                    <MenuItem value={8}>XEM</MenuItem>
                    <MenuItem value={9}>WIN</MenuItem>


                </Select>


                <Button variant="contained">buy btc</Button>

            </div>
            <div>
                <Button variant="contained">progess bar</Button>
                <a href="https://hodlinfo.com/connect/telegram"><Button variant="contained">Connect Telegram</Button></a>
                <Button variant="contained">toggle</Button>
            </div>
        </div>




    )

}
export default Header;