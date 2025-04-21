// File: GenreCarousel.tsx
import Carousel from "react-bootstrap/Carousel";
import "./GenreCarousel.css";

function GenreCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.musicgateway.com/blog/wp-content/uploads/2023/01/House-Music-2-1.jpg"
          alt="House Music"
          style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>House Music</h3>
          <p>The foundation of EDM, characterized by a 4/4 beat and soulful influences.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/c8dSUnzrDSk/maxresdefault.jpg"
          alt="Techno Music"
          style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Techno</h3>
          <p>Mechanical beats and futuristic soundscapes from the heart of Detroit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzEyNDkxL2ltYWdlL1psWVlQZjZsOWNwYi8xMDI0LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOjEzNTAsImhlaWdodCI6NzIwfX19"
          alt="Trance Music"
          style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Trance</h3>
          <p>Euphoric melodies and atmospheric builds that transport listeners.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapers.com/images/hd/dubstep-waveform-visualization-a2b5sfe1anbhc8bf.jpg"
          alt="Dubstep Music"
          style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Dubstep</h3>
          <p>Known for its heavy bass drops and wobble effects, originated in the UK.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default GenreCarousel;