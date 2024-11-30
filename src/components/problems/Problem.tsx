import React from "react";
import { v4 as uuidv4 } from 'uuid';
import {
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { projects, Project } from "./config";
import { AiFillGithub } from "react-icons/ai"
import { Skill } from "../skills/config";
import "./Problem.css";
import VideoThumbnail from "./VideoThumbnail";
import { videos } from "./config";

const Problem = () => {
  return(
    <div className="bg-projects">
      <p className="heading">Why Web3</p>
      <p className="text">The reason I'm so passionate about blockchains 🤔</p>
      <br></br>
      <Text fontSize="3xl">
        TLDR: crypto matter because, in an increasingly digital society, it
        enables
      </Text>
      <br></br>
      <UnorderedList>
        <ListItem>
          <div className="text">
            <Text fontSize="3xl">
              Robust guarantees of trust between strategic actors
            </Text>
          </div>
        </ListItem>
        <ListItem>
          <div className="text">
            <Text fontSize="3xl">
              Transparency which enables accountability in participants
            </Text>
          </div>
        </ListItem>
      </UnorderedList>
      <br></br>
      <Text fontSize="3xl">
      To me, empowering the internet with these properties is essential for ensuring a productive and peaceful future for humanity. Not only does it enable more efficient global coordination, but it also holds the potential to reshape the broken incentive structures of many current internet businesses.
      </Text>
      <br></br>
      <Text fontSize="3xl">
        I talk more about blockchains in the following ...
      </Text>
      <br></br>
      <div className="video-grid">
        {videos.map((video) => (
          <VideoThumbnail key={uuidv4()} video={video} />
        ))}
      </div>
    </div>
  )
}

export default Problem;