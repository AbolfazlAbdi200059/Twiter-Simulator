import Navigation from "../Components/Navigation/Navigation";
import "./Layout.css"

const Layout = ({children}) => {
    return (  
        <div className="layout">
            <Navigation/>
            {children}
        </div>
    );
}
 
export default Layout;