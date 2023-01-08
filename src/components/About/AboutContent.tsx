import React from "react"
import './AboutContentStyle.css'

export default function AboutContent(): JSX.Element {
  return (
    <div className="about-me" >
      <h1 className="title">Who am I?</h1>
      <p>
        &emsp;&emsp;{`I was born in Osasco-SP and grew up in a dormitory town, but fate brought me to Curitiba-PR. My parents are farmers/flower growers. I've always been fascinated by computers,
        and this fascination of mine made me choose a degree in the area, even with all the insecurity I felt. The result? I love the development area!
        Some of my hobbies are playing, drawing and planting. Oh! And I love cats!`}
      </p>
      <br/>
      <p>
        &emsp;&emsp;{`I have a degree in Analysis and Development of Systems and I have one year of experience with backend development of APIs and Websites
        using Nodejs, Express and SQL. During this time, I also versioned code using GIT, and the agile methodologies used were Scrum and Kanban. Other technologies I came into contact with during my internship were: Azure DevOps,
        Sendgrid, Salesforce, IBM Cloud, Insomnia and PaperTrail.`}
      </p>
      <br/>
      <p>
        &emsp;&emsp;{`I am a determined person, hardworking, proactive and a fast learner. I have intermediate English in writing and conversation and advanced in
        reading. My passion is backend development! But I'm willing to open up to Fullstack opportunities too. Including, I recently started to learn React together with Typescript, I made this portfolio with both to hone these skills.
        I take on any challenge... If it has backend tacked onto it!`}
      </p>
    </div>
  )
}
