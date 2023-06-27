import React, { useState, useEffect } from "react";
import "../component/testSlider.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function TestiSlider() {
  const [angle, setAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNextClick = () => {
    setAngle((prevAngle) => prevAngle - 72);
  };

  const handleBackClick = () => {
    setAngle((prevAngle) => prevAngle + 72);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        setAngle((prevAngle) => prevAngle - 72);
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, [isHovered]);

  return (
    <div className="body">
      <div className="car-btn">
        <button
          className="carousel_btn carousel_btn--back"
          onClick={handleBackClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          ⇦
        </button>
      </div>

      <div className="carousel">
        <div
          className="carousel_cards"
          style={{
            animation: "0.5s",
            transform: `translateZ(-25rem) rotateY(${angle}deg)`,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Card className="carousel_card" style={{ width: "14rem" }}>
            <Card.Img
              variant="top"
              src="https://i.ibb.co/y5p3vJc/Kerjasama.jpg"
            />
            <Card.Body>
              <Card.Title>Testimonial</Card.Title>
              <Card.Text style={{ fontSize: "1rem" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus est non deleniti.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card className="carousel_card" style={{ width: "14rem" }}>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/564x/b7/59/f4/b759f4f0247abaa99d21b1d8e2c4e4c7.jpg"
            />
            <Card.Body>
              <Card.Title>Kepedulian</Card.Title>
              <Card.Text style={{ fontSize: "1rem" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus est non deleniti.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className="carousel_card" style={{ width: "14rem" }}>
            <Card.Img
              variant="top"
              src="https://i.ibb.co/y5p3vJc/Kerjasama.jpg"
            />
            <Card.Body>
              <Card.Title>SDM Berkualitas</Card.Title>
              <Card.Text style={{ fontSize: "1rem" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus est non deleniti.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className="carousel_card" style={{ width: "14rem" }}>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/564x/f0/a9/1c/f0a91cb47ec51145b764052895aedbb3.jpg"
            />
            <Card.Body>
              <Card.Title>Kolaborasi</Card.Title>
              <Card.Text style={{ fontSize: "1rem" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus est non deleniti.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className="carousel_card" style={{ width: "14rem" }}>
            <Card.Img
              variant="top"
              src="https://i.ibb.co/y5p3vJc/Kerjasama.jpg"
            />
            <Card.Body>
              <Card.Title>Promosi</Card.Title>
              <Card.Text style={{ fontSize: "1rem" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus est non deleniti.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="car-btn">
        <button
          className="carousel_btn carousel_btn--next"
          onClick={handleNextClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          ⇨
        </button>
      </div>
    </div>
  );
}

export default TestiSlider;
