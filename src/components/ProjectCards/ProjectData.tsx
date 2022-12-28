import antidoryVis from '../../assets/antidory-vis.png'
import timerVis from '../../assets/timer-vis.png'
import portfolioVis from '../../assets/portfolio-vis.png'

const ProjectCardData: Array<{ imgSrc: any, title: string, text: string, view: string, access: string }> = [
  {
    imgSrc: portfolioVis,
    title: "Personal Portfolio",
    text: "My personal portfolio made with React and TypeScript!",
    view: "",
    access: ""
  },
  {
    imgSrc: antidoryVis,
    title: "Antidory Bot",
    text: "A telegram bot made with node.js and mongoDB!",
    view: "https://github.com/Sabrinadomin/antidory",
    access: "https://t.me/AntidoryBot"
  },
  {
    imgSrc: timerVis,
    title: "Timergator",
    text: "A timer that runs on a Navigator. Created with JavaScript DOM.",
    view: "https://github.com/Sabrinadomin/Timergator",
    access: ""
  }
]

export default ProjectCardData
