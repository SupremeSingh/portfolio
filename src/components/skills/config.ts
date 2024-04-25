import outliers from "./../../images/outliers.jpeg";
import github from "./../../images/github.jpeg";
import ichi from "./../../images/ichi.jpeg";
import duke from "./../../images/duke.png";
import starknet from "./../../images/starknet.png";
import sikh from "./../../images/sikh.png";

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
    name: "Starknet Blockchain",
    url: "https://www.starknet.io/en/",
    img: starknet
  },
  {
    name: "Awesome-ZK",
    url: "https://github.com/SupremeSingh/Awesome-ZK",
    img: github
  },
  {
    name: "Outlier DAO",
    url: "https://twitter.com/outlierdao",
    img: outliers
  },
  {
    name: "Duke Blockchain Lab",
    url: "https://researchblog.duke.edu/2021/11/08/the-duke-blockchain-lab-disrupting-and-redefining-finance/",
    img: duke
  },
  {
    name: "Duke Sikh Society",
    url: "https://dukesikhsociety.wixsite.com/website",
    img: sikh
  },
]