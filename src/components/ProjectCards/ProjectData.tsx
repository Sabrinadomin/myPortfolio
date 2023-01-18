import antidoryVis from '../../assets/Projects/antidory-vis.png'
import timerVis from '../../assets/Projects/timer-vis.png'
import portfolioVis from '../../assets/Projects/portfolio-vis.png'

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
    text: "A telegram bot made with Node.js and mongoDB!",
    view: "https://github.com/Sabrinadomin/antidory",
    // access: "https://t.me/AntidoryBot"
    access: ""
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
