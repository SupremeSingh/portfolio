import React, { useState } from "react";
import { Heading, Text, Button, CloseButton } from '@chakra-ui/react';
import { AiFillGithub, AiFillTwitterCircle, AiFillCode, AiOutlineArrowRight, AiFillMessage } from "react-icons/ai";
import { BsTelegram, BsChevronDown } from "react-icons/bs";
import avatar from "../../images/avatar.jpg";
import "./About.css";


const About = () => {

  const getFontSize = () => {
    let width = window.innerWidth;
    if(width < 450) return "5rem";
    if(width < 1250) return "6rem";
    return "8rem";
  }

  const getAlertSize = () => {
    let width = window.innerWidth;
    if(width < 1275) return "md";
    return "lg";
  }
  return(
    <>
    <div className="bg">
      <div className="about-wrapper">
        <div className="about-text">
          <div className="about-title">
            <Heading as='h1' fontSize={getFontSize()} size='4xl'>
              Hi! 👋
            </Heading>
            <Heading as='h1' fontSize={getFontSize()} size='4xl'>
              I'm <span className="name">Manmit</span>
            </Heading>
          </div>
          <div className="about-text-desc">
            <Text fontSize='3xl'>a passionate <span className="name">builder</span> and <span className="name">educator</span> with a focus on <span className="name">cryptography, game theory and blockchains</span>.</Text>
          </div>

          <div className="icons">
            <a href="https://github.com/SupremeSingh" target="_blank">
              <AiFillGithub className="icon" />
            </a>
            <a href="https://dev.to/supremesingh" target="_blank"> 
              <AiFillCode className="icon" />
            </a>
            <a href="https://x.com/man_bun_mit" target="_blank">
              <AiFillTwitterCircle className="icon" />
            </a>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <a href="mailto:manmitsingh1999@gmail.com">
              <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid'>
                Contact Me
              </Button>
            </a>
          </div>
        </div>
        <div className="about-avatar">
          <img src={avatar} className="avatar" alt="Manmit Singh Avatar" />
        </div>
      </div>
      <div className="icon-wrapper">
        <div className="bottom-icon">
          <BsChevronDown />
        </div>
      </div>
    </div>
    </>
  )  
}

export default About;