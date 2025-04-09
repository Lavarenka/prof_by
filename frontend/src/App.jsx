import HeaderSection from "./components/HeaderSection/HeaderSection.jsx";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection.jsx";
import HowItSection from "./components/HowItSection/HowItSection.jsx";
import ProfessionsSection from "./components/ProfessionsSection/ProfessionsSection.jsx";
import ForWhomSection from "./components/ForWhomSection/ForWhomSection.jsx";
import ReviewsSection from "./components/ReviewsSection/ReviewsSection.jsx";
import FormSection from "./components/FormSection/FormSection.jsx";
import FooterSection from "./components/FooterSection/FooterSection.jsx";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, // не обновлять данные при переключении вкладок
            staleTime: 60 * 60 * 1000, // данные "устаревают" через 1 час (можно обновить)
        },
    },
});


function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="wrapper ">
                <HeaderSection />
                <AboutUsSection />
                <HowItSection />
                <ProfessionsSection />
                <ForWhomSection />
                <ReviewsSection />
                <FormSection />
                <FooterSection />
            </div>
        </QueryClientProvider>
    )
}

export default App
