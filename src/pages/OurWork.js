import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodTimes from "../img/goodtimes-small.png";
const OurWork = () => {
    return (
        <Work>
            <Movie>
                <h2>Athlete</h2>
                <div className="line"></div>
                <Link>
                    <img src={athlete} alt="athlete" />
                </Link>
            </Movie>
            <Movie>
                <h2>The racer</h2>
                <div className="line"> </div>
                <Link>
                    <img src={theracer} alt="the racer" />
                </Link>
            </Movie>
            <Movie>
                <h2>Good times</h2>
                <div className="line"></div>
                <Link>
                    <img src={goodTimes} alt="good times" />
                </Link>
            </Movie>
        </Work>
    )
}
const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
export default OurWork;