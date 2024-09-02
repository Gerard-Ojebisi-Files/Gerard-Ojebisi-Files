import Navigation from "../components/Navigation";
import "../style/NotFound.css"

function NotFound() {
    return (
        <div>
            <Navigation />
        <span>Ooops</span>
        <h1>404</h1>
        <h2>Page not found</h2>
        </div>
    )
}

export default NotFound