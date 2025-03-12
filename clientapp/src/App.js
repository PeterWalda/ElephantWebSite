import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import DietInformation from './DietInformation';
import MatingReproduction from './MatingReproduction';
import HabitatInformation from './HabitatInformation';
import ScientificClassification from './ScientificClassification';
import Gallery from './Gallery';
import GalleryImage from './GalleryImage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/diet-information" element={<DietInformation />} />
                <Route path="/mating-reproduction" element={<MatingReproduction />} />
                <Route path="/habitat-information" element={<HabitatInformation />} />
                <Route path="/scientific-classification" element={<ScientificClassification />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/gallery/:imageId" element={<GalleryImage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
