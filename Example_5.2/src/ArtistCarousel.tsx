// File: ArtistCarousel.tsx
import Carousel from "react-bootstrap/Carousel";
// @ts-ignore - Ignore TypeScript errors for this import
import "./GenreCarousel.css";  // Reuse the same CSS

function ArtistCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://beatfuse.com/wp-content/uploads/2023/11/Deadmau5.jpg"
          alt="Deadmau5"
          style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Deadmau5</h3>
          <p>Canadian electronic music producer and DJ Joel Thomas Zimmerman, known professionally as Deadmau5, is known for his progressive house and techno productions, as well as his iconic mouse helmet.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.rollingstone.com/wp-content/uploads/2018/06/daft-punk-alive-2007-review-48a97369-5015-4b0a-a9a8-715a326f8f39.jpg"
          alt="Daft Punk"
          style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Daft Punk</h3>
          <p>The legendary French electronic music duo consisting of Guy-Manuel de Homem-Christo and Thomas Bangalter, known for their distinctive visual style and influential contributions to house music and beyond.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/5bfc8dbab40b9d7dd9054f41/1602869254392-ZD0P3EI1NXJCKS3Z4QQ5/tiesto-3.jpg"
          alt="Tiësto"
          style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Tiësto</h3>
          <p>Dutch DJ and record producer Tijs Michiel Verwest, known as Tiësto, is one of the pioneers of the trance genre and has since evolved his sound to encompass various electronic music styles.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ArtistCarousel;