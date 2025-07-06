import { Link } from "react-router";

export default function PageNotFound(){
    return(
        <div style={{color:'red',textAlign:'center'}}>
            <h1>Page Not Found</h1>
            <div>
                <Link to="/">Go to Home page</Link>
            </div>
            <img style={{width:'60%'}} src="404_page-not-found.png" alt="404" />
        </div>
    )
}