import React from "react";
import { Button } from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle, AiOutlineArrowRight } from "react-icons/ai";
import { BsTelegram, BsGlobe2 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import "./Contact.css";

export type Contact = {
  name: string,
  icon: React.ReactElement,
  url: string,
}

export const contacts: Contact[] = [
  {
    name: "X.com",
    icon: <AiFillTwitterCircle className="contact-icon" />,
    url: "https://twitter.com/man_bun_mit",
  },
  {
    name: "Telegram",
    icon: <BsTelegram className="contact-icon" />,
    url: "https://t.me/man_bun_mit",
  },
  {
    name: "GitHub",
    icon: <AiFillGithub className="contact-icon" />,
    url: "https://github.com/SupremeSingh",
  },
  {
    name: "Location and Time",
    icon: <IoLocationOutline className="contact-icon" />,
    url: "https://www.timeanddate.com/time/zone/usa/los-angeles",
  }
];

const Contact = () => {
  return(
    <div className="bg-contact">
      <div className="contact-header">
        <p className="heading">Contact Me</p>
        <p className="text">If you have any questions or want to collaborate, feel free to reach out to me!</p>
      </div>

      <div className="contact-grid">
        {contacts.map((contact: Contact) => {
          return(
            <a key={uuidv4()} href={contact.url} target="_blank">
              <div className="contact-section">
                  {contact.icon}
                  <div className="contact-text-div">
                    <p className="contact-title">{contact.name}</p>
                  </div>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Contact;