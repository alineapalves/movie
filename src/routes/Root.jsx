import React from "react";
import { 
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Filme from "../pages/filmes/filme.jsx";
import Cadastrar from "../pages/cadastrar/cadastro.jsx";
import NotFound from "../pages/notfound/not.jsx";


const Root = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <Filme/> } />
                <Route path="/administrar/cadastrar" element={ <Cadastrar/> } />
                 <Route path="*" element={ <NotFound/> } />
            </Routes>
        </Router>
    );
}

export default Root;