import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HeaderBanner from './Components/HeaderBanner';
import Card from './Components/Card';
import SeamlessGiving from './Components/SeamlessGiving';
import PayPal from './Components/PayPal';
import WhyChooseUs from './Components/WhyChooseUs';
import './App.css'

function App() {
    return (
        <div>
            <Navbar />
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <HeaderBanner />
                <PayPal />
                <WhyChooseUs />
                <SeamlessGiving />
                {/* // <Card /> */}
            </div>
            <Footer />
        </div>
    );
}

export default App;
