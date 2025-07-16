import Header from "./components/header";
import Slider from "./components/silder";
import React from "react";
import MainDiv from "./components/main";
import Image from "./components/image";   
import Branches from "./components/branches";
import Footer from "./components/footer";
// import ButtonAppBar from "./components/okok";  

function App(props) {
    return(
        <div className="App">
            <Header />
            <Slider />
            <MainDiv />
            <Image />
            <Branches />
            <Footer />
            {/* <ButtonAppBar/> */}
        </div>
    )
}

export default App;