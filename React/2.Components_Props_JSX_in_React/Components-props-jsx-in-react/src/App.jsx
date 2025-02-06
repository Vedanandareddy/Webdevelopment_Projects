
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {

  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="Tour in Dubai" description="It is an expensive place with large malls and buildings everywhere and expensive cars as taxis and luxury cars can be seen roaming all the time" />
        <Card
          title="Safari in Serengeti"
          description="Experience wild Africa with breathtaking wildlife sightings including lions, elephants, and the Great Migration across vast savannah landscapes."
        />

        <Card
          title="Alpine Adventure in Switzerland"
          description="Explore snow-capped peaks, pristine lakes, and charming villages with world-class skiing and mountaineering opportunities."
        />

        <Card
          title="Cultural Journey in Kyoto"
          description="Discover ancient temples, traditional tea ceremonies, and stunning cherry blossoms in Japan's historic cultural capital."
        />

        <Card
          title="Island Hopping in Greece"
          description="Sail through turquoise waters, explore whitewashed villages, and enjoy Mediterranean cuisine on picturesque Aegean islands."
        />

        <Card
          title="Rainforest Trek in Costa Rica"
          description="Encounter exotic biodiversity, zip-line through canopies, and relax in natural hot springs surrounded by lush tropical rainforests."
        />
      </div>
      <Footer />

    </>
  )
}

export default App
