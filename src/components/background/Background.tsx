import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SwiperCore, { Pagination, EffectCoverflow } from "swiper";
import {
  Text,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import block from "./images/bb101-1.png";
import bit from "./images/bsc.png";
import beg from "./images/cfb-1.png";
import defi from "./images/defi1.png";
import dapp from "./images/ed1.png";
import eth from "./images/eth1.png";
import js from "./images/js.png";
import link from "./images/link.png";
import dot from "./images/polkadot.png";
import react from "./images/react.png";
import contract1 from "./images/sc1.png";
import contract2 from "./images/sc2.png";
import security from "./images/scs.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Background.css";
import { MdStar } from "react-icons/md";

const Background = () => {
  return (
    <div className="bg-certificats">
      <p className="heading">Who I Am</p>
      <p className="text">And what drives me the most in life ...</p>
      <br></br>
      <div className="text">
        <Text fontSize="3xl">
          I am fascinated by the ability to create: to build something from
          absolutely nothing. To me, that is magic. An exploration of the self.
        </Text>
      </div>
      <br></br>
      <div className="text">
        <Text fontSize="3xl">
          That is when I am happiest, and when I also face my deepest demons. I
          am passionate about creating something new in areas that interest me,
          and I lose track of time improvising on the drums, writing craft
          essays, making a new smart contract, structuring a workout or even
          finding a new trail to hike on.
        </Text>
      </div>
      <br></br>
      <div className="text">
        <Text fontSize="3xl">
          Having had the time to introspect over COVID, I don’t define myself
          with any one skillset or area of expertise anymore. I try to be more
          than that. To find my fullest potential while balancing the many
          colors of life. Be it behind a screen or in a forest. Chasing success
          or trying to help others.
        </Text>
      </div>
      <br></br>
      <div className="text">
        <Text fontSize="3xl">
          Overall, being a creator is an integral part of who I am.
        </Text>
      </div>
    </div>
  );
};

export default Background;
