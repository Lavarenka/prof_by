import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Card, Space} from 'antd';
import HeaderSection from "./components/HeaderSection/HeaderSection.jsx";
import FadeRightComponent from "./components/FadeComponent.jsx";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection.jsx";
import HowItSection from "./components/HowItSection/HowItSection.jsx";
import ProfessionsSection from "./components/ProfessionsSection/ProfessionsSection.jsx";
import ForWhomSection from "./components/ForWhomSection/ForWhomSection.jsx";
import ReviewsSection from "./components/ReviewsSection/ReviewsSection.jsx";
import FormSection from "./components/FormSection/FormSection.jsx";
import FooterSection from "./components/FooterSection/FooterSection.jsx";


function App() {


    return (
        <div className="wrapper ">
            <HeaderSection/>
            <AboutUsSection/>
            <HowItSection/>
            <ProfessionsSection/>
            <ForWhomSection/>
            <ReviewsSection/>
            <FormSection/>
            <FooterSection/>


        </div>
    )
}

export default App
