import React from 'react'
import styled from 'styled-components';
import { Layout, Description, Image, Hide } from "../style";
const FaqSection = () => {
    return (
        <FAQ>
            <h2>Any questions <span>FQA</span></h2>
            <div className="question">
                <h4>How do I start?</h4>

                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis ea, illo deleniti repellat temporibus,
                    eligendi porro architecto dolorum odio laborum
                    aspernatur debitis quas pariatur hic
                      veniam officia esse cupiditate. Cumque.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>

                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis ea, illo deleniti repellat temporibus,
                    eligendi porro architecto dolorum odio laborum
                    aspernatur debitis quas pariatur hic
                      veniam officia esse cupiditate. Cumque.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Different Payment Method</h4>

                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis ea, illo deleniti repellat temporibus,
                    eligendi porro architecto dolorum odio laborum
                    aspernatur debitis quas pariatur hic
                      veniam officia esse cupiditate. Cumque.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What product do you offer</h4>

                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis ea, illo deleniti repellat temporibus,
                    eligendi porro architecto dolorum odio laborum
                    aspernatur debitis quas pariatur hic
                      veniam officia esse cupiditate. Cumque.</p>
                </div>
                <div className="faq-line"></div>
            </div>

        </FAQ>
    )
}
const FAQ = styled(Layout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;