// File: App.tsx
import { useState } from "react";
import NavBar from "./NavBar";
import GenreCarousel from "./GenreCarousel";
import ArtistCarousel from "./ArtistCarousel";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

interface DisplayState {
  showHome: boolean;
  showHTML: boolean;
  showJS: boolean;
  showExplore: boolean;
  showLabels: boolean;
  showHistory: boolean;
}

function App() {
  const [showElements, setShowElements] = useState<DisplayState>({
    showHome: true,
    showHTML: false,
    showJS: false,
    showExplore: false,
    showLabels: false,
    showHistory: false,
  });

  const toggleFunction = (which: string) => {
    setShowElements({
      showHome: which === "showHome",
      showHTML: which === "showHTML",
      showJS: which === "showJS",
      showExplore: which === "showExplore",
      showLabels: which === "showLabels",
      showHistory: which === "showHistory",
    });
  };

  return (
    <>
      <NavBar toggleFunction={toggleFunction} />
      <div className="content-container">
        {showElements.showHome && (
          <div className="home-container">
            <img 
              className="home-banner"
              src="https://edmidentity.com/wp-content/uploads/2018/09/EDM-Festival-Stage-1068x601.jpg" 
              alt="EDM Festival"
              style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
            />
            <div className="home-text" style={{ padding: '20px', textAlign: 'center' }}>
              <h1>Welcome to EDM World</h1>
              <p>Your one-stop destination for everything Electronic Dance Music</p>
              <p>Explore genres, discover artists, and dive into the vibrant world of electronic music</p>
            </div>
          </div>
        )}
        
        {showElements.showHTML && <GenreCarousel />}
        {showElements.showJS && <ArtistCarousel />}
        
        {showElements.showExplore && (
          <div className="explore-container" style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Explore Other Music Genres</h2>
            <img 
              src="https://www.musicgateway.com/blog/wp-content/uploads/2021/03/genres.jpg" 
              alt="Music Genres"
              style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '20px' }}
            />
            <div className="genre-list" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
              <div className="genre-item" style={{ margin: '10px', width: '200px' }}>
                <h4>Rock</h4>
                <p>A genre characterized by a strong beat and often accompanied by distorted guitars.</p>
              </div>
              <div className="genre-item" style={{ margin: '10px', width: '200px' }}>
                <h4>Hip Hop</h4>
                <p>A cultural movement known for its rhythmic music and stylized rhyming speech.</p>
              </div>
              <div className="genre-item" style={{ margin: '10px', width: '200px' }}>
                <h4>Jazz</h4>
                <p>A music genre that originated in African American communities, characterized by improvisation.</p>
              </div>
              <div className="genre-item" style={{ margin: '10px', width: '200px' }}>
                <h4>Classical</h4>
                <p>Formal traditions of music from Western culture, typically spanning from 1750 to 1820.</p>
              </div>
            </div>
          </div>
        )}
        
        {showElements.showLabels && (
          <div className="labels-container" style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Top EDM Record Labels</h2>
            <img 
              src="https://edmjunkies.com/wp-content/uploads/2020/11/studio-1003635_1280.jpg" 
              alt="Record Labels"
              style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '20px' }}
            />
            <div className="label-list" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
              <div className="label-item" style={{ margin: '10px', width: '200px' }}>
                <h4>Spinnin' Records</h4>
                <p>Dutch electronic music record label founded in 1999, known for house and progressive.</p>
              </div>
              <div className="label-item" style={{ margin: '10px', width: '200px' }}>
                <h4>Armada Music</h4>
                <p>Founded by Armin van Buuren, specializing in trance, house, and EDM.</p>
              </div>
              <div className="label-item" style={{ margin: '10px', width: '200px' }}>
                <h4>OWSLA</h4>
                <p>American record label founded by Skrillex, known for bass music and dubstep.</p>
              </div>
              <div className="label-item" style={{ margin: '10px', width: '200px' }}>
                <h4>Revealed Recordings</h4>
                <p>Founded by Hardwell, focusing on big room house and progressive house.</p>
              </div>
            </div>
          </div>
        )}
        
        {showElements.showHistory && (
          <div className="history-container" style={{ padding: '20px', textAlign: 'center' }}>
            <h2>The History of EDM</h2>
            <img 
              src="https://www.youredm.com/wp-content/uploads/2018/08/edm-history.jpg" 
              alt="EDM History"
              style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '20px' }}
            />
            <div className="history-text" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
              <p>Electronic Dance Music (EDM) has its roots in the late 1970s and early 1980s with the development of electronic music instruments and technology.</p>
              <h4>1970s-1980s: The Beginnings</h4>
              <p>The birth of EDM can be traced back to disco and the emergence of electronic instruments. German band Kraftwerk pioneered synthesizer-based music, while Chicago saw the birth of house music and Detroit developed techno.</p>
              <h4>1990s: Mainstream Growth</h4>
              <p>The 90s witnessed the rise of rave culture and the global expansion of electronic dance music. Subgenres like trance, jungle, and drum and bass emerged, creating a diverse electronic music landscape.</p>
              <h4>2000s-Present: EDM Explosion</h4>
              <p>EDM entered the mainstream in the 2000s with artists like Daft Punk, Tiësto, and David Guetta achieving commercial success. The 2010s saw an unprecedented boom with the rise of music festivals like Tomorrowland and Ultra Music Festival.</p>
              <p>Today, EDM continues to evolve with new technologies and innovative artists pushing the boundaries of electronic music.</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;