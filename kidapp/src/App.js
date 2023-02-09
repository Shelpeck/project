import Gender from "./pages/Gender";
import Info from "./pages/Info";
import Main from "./pages/Main";
import {useState} from "react";
import "./App.css"
function App() {
    const [page, setPage] = useState(1);
    const pages = Main;
    function pageToLoad(page) {
        if (page == 1)
            return <Main/>;
        else if (page == 2)
            return <Gender/>
        else return <Info/>;
    }

    function previous() {
        if (page !== 1)
            setPage(page-1)
    }

    function next() {
        if (page !== 3)
            setPage(page+1)
    }
    return (
        <div className="App">
            {pageToLoad(page)}
            <button className="page--button" onClick={previous}>Previous</button>
            <button className="page--button" onClick={next}>Next</button>
        </div>
    );
}

export default App;
