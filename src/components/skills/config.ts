import bitcoin from "./../../images/bitcoin.png";
import ethereum from "./../../images/ethereum.png";
import ichi from "./../../images/ichi.jpeg";
import starknet from "./../../images/starknet.png";
import outliers from "./../../images/outliers.jpeg";

export type Skill = {
  name: string;
  img: any;
  url: string;
}

export const getSkill = (names: string[]) => {
  let toReturn: Skill[] = [];
  names.map((name: string) => {
    skills.map((skill: Skill) => {
      if(skill.name.toLowerCase() === name.toLowerCase()) {
        toReturn.push(skill);
      }
    });
  })
  return toReturn;
}

export const skills: Skill[] = [
  {
    name: "Bitcoin",
    url: "https://bitcoin.org/en/",
    img: bitcoin
  },
  {
    name: "Starknet",
    url: "https://www.starknet.io/",
    img: starknet
  },
  {
    name: "Outlier DAO",
    url: "https://www.outliers.build/",
    img: outliers
  },
  {
    name: "ICHI Protocol",
    url: "https://ichi.org",
    img: ichi
  },
  {
    name: "Ethereum",
    url: "https://ethereum.org/en/",
    img: ethereum
  }
]