import React from "react";
import styled from "styled-components";
import FaqsData from "./otherComponents/FaqsData";
import "./style/Homestyle.css";
import homeSvg from "../images/homeSvg.svg";
import Helmet from "react-helmet";

const Faqs = () => {
  return (
    <>
      <Page>
        <Helmet>
          <title>BSSO | FAQs</title>
          <meta
            name="description"
            content="Commonly asked questions regarding Bronx Science Science Olympiad"
          />
          <meta
            name="keywords"
            content="FAQ, bsso faq, BSSO, Bronx Science, Science Olympiad, Bronx Science Science Olympiad, bxscioly, Bxscioly, bronx science scioly, scioly, bxsci, bronx sci, bxsci scioly"
          />
        </Helmet>
        <Title>Frequently Asked Questions</Title>
        <Button>
          <Anchor href="https://forms.gle/TnaZtBrx5rp2QnDJ9" target="_blank">
            Ask a question!
          </Anchor>
        </Button>
        <Content>
          <QuestionsDiv>
            {FaqsData.map((item, index) => {
              return (
                <AccordionItem>
                  <AccordionTitle>{item.question}</AccordionTitle>
                  <AccordionAnswer>{item.answer}</AccordionAnswer>
                </AccordionItem>
              );
            })}
          </QuestionsDiv>
        </Content>

        <ImageDiv>
          <Image src={homeSvg} alt="backLogo" />
        </ImageDiv>
      </Page>
    </>
  );
};

const Title = styled.h1`
  font-size: 350%;
  color: var(--primary-color);
  margin: 4rem 0 1rem 0;
  @media (max-width: 600px) {
    background-color: #000;
  }
`;

const Page = styled.div`
  padding: 2rem;
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 600px) {
    padding: 0;
  }
`;

const Image = styled.img`
  width: 800px;
  height: 800px;

  @media (max-width: 600px) {
    width: 350px;
    height: 350px;
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  color: black !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 300px;
  height: 60px;
  margin: 2rem 0;
  font-size: 20px;
  border: none;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: 200ms ease;

  &:hover {
    background-color: var(--primary-color);
    box-shadow: 0 0 10px var(--primary-color);
  }

  @media (max-width: 600px) {
    width: 200px;
    height: 50px;
    margin: 1rem 0;
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 20px 15rem;
  color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const QuestionsDiv = styled.div`
  display: grid;
  grid-template-areas: "q1 q2";
  grid-auto-columns: 1fr;
  margin: 2rem 0 4rem 0;
  background-color: #f9fafc;
  color: black;
  padding: 4rem;
  text-align: left;

  @media (max-width: 600px) {
    padding: 1rem;
    margin: 2rem 0;
  }
`;

const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AccordionTitle = styled.div`
  width: 100%;
  color: black;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  border-none;
  outline: none;
  transition: background-color 0.6s ease;
  font-weight: 600;
  font-size: 150%;
  justify-content: space-between;

  @media (max-width: 600px) {
    font-size: 110%;
  }
`;

const AccordionAnswer = styled.div`
  display: flex;

  flex-direction: column;
  margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 95%;
  }
`;

const AccordionItem = styled.div`
  margin-bottom: 4rem;
  padding: 0 3rem;

  @media (max-width: 600px) {
    padding: 0 0.5rem;
  }
`;

export default Faqs;
