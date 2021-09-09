import { Button } from "@material-ui/core";

import holdinfo from "../assets/holdinfo.png";
import "./header.css";

const Header = () => {


    return (

        <div className="logo">
            <div>
                <a href="Home.jsx"><img src={holdinfo} alt="holdinfo" /></a>
                <p>Powered By<a href="Home.jsx"><strong>Finstreet</strong></a></p>
            </div>


            <div>

                <a href="https://hodlinfo.com/connect/telegram"><Button className="btn-btn" color="primary" variant="contained">Connect Telegram</Button></a>

            </div>
        </div>




    )

}
export default Header;