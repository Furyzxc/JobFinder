import { Link } from "react-router-dom";

export const NotFound = () => {

    return (
        <div>


            <div>
                <div className="starsec"></div>
                <div className="starthird"></div>
                <div className="starfourth"></div>
                <div className="starfifth"></div>
            </div>

            <Link className="button" to='/profile'>Home page</Link>
        </div>
    )
}