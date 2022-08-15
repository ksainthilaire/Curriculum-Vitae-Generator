import React from "react";
import ReactDOM from "react-dom";
import fr from "../locales/fr.json";

import Picture from "../assets/images/picture.png";
import "../styles/index.scss";

const convertDateString = (dates) => {
  switch (dates.length) {
    case 2: {
      return dates.join(" à ");
    }

    case 1: {
      return dates[0];
    }
  }
};

export default class CurriculumVitae extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper marginConstraints paddingConstraints">
        <div className="header">
          <div className="picture-wrapper">
            <img className="picture" src={Picture} alt="picture" />
          </div>
          <div className="about cols">
            <span className="title">{fr.fullName}</span>
            <span className="subtitle">{fr.jobName}</span>

          </div>
        </div>

        <div className="cols">
          
          <div className="rows infos">
            <div className="contact">
              <a href={`mailto:`+fr.phoneNumber} className="col">
                <span className="icon phone-icon"></span>
                {fr.phoneNumber}
              </a>

              <a href={`mailto:`+fr.mail} className="col">
                <span className="icon mail-icon"></span>
                {fr.mail}
              </a>
              <a href={fr.site} className="col">
                <span className="icon www-icon"></span>
                {fr.site}
              </a>

              <a href={fr.socials.github.url}>
                 <span className="icon github-icon"></span>
                 {fr.socials.github.name}
              </a>

            { fr.socials.behance ? 
              <a href={fr.socials.behance.url}>
                 <span className="icon behance-icon"></span>
                 {fr.socials.behance.name}
              </a> : "" }

            </div>
            
            <div className="address">
              {fr.address.map((line, key) => (
                <span key={key}>{line}</span>
              ))}
            </div>

          </div>

          <div className="content">
            <div className="row">
              <div className="section-wrapper">
                <span className="section-title">ÉDUCATION</span>
                <div className="section-body">
                  {fr.education.map((school, key) => {
                    return (
                      <div key={key} className="item-wrapper">
                        <span className="item-title" dangerouslySetInnerHTML={{ __html: school.name}} />
                        <span className="item-subtitle">
                          {convertDateString(school.dates)}
                        </span>

                        <ul className="item-description">
                          {school.description.map((item, key) => (
                            <li key={key}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="section-wrapper">
                <span className="section-title">COMPÉTENCES</span>
                <div className="section-body">
                  <div className="list-wrapper">
                    {fr.skills.map((skill, key) => {
                      return (
                        <div key={key} className="list">
                          <div className="list-title">{skill.name}</div>
                          <div className="list-items">
                            {skill.description.map((item, key) => (
                              <span key={key} className="list-item">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="section-wrapper">
                <span className="section-title">HOBBIES</span>
                <div className="section-body">
                  <ul>
                    {fr.hobbies.map((hobbie, key) => (
                      <li key={key} dangerouslySetInnerHTML={{__html: hobbie}} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="section-wrapper highlight">
                <span className="section-title">EXPÉRIENCES</span>
                <div className="section-body left-border">
                  {fr.career.map((job, key) => {
                    return (
                      <div key={key} className="item-wrapper">
                        <span className="item-title">{job.name}</span>
                        <span className="item-subtitle">
                          {job.role} | {convertDateString(job.dates)}
                        </span>
                        <ul className="item-description">
                          {job.description.map((item, key) => (
                            <li key={key} dangerouslySetInnerHTML={{ __html: item}} />
                          ))}
                        </ul>
                        <div className="item-tags">
                          {job.tags.map((tag, key) => (
                            <span key={key} className="tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="section-wrapper highlight">
                <span className="section-title">PROJETS</span>

                <div className="section-body left-border">
                  {fr.projects.map((project, key) => {
                    return (
                      <div key={key} className="item-wrapper">
                        <span className="item-title">{project.name}</span>
                        <span className="item-subtitle">
                          {convertDateString(project.dates)}
                        </span>

                        <div className="item-content">


                        <div className="item-left">
                          <a href={project.url} className={`app-icon ${project.icon}-icon`} />
                        </div>
                        <ul className="item-description">
                          {project.description.map((item, key) => (
                            <li key={key} dangerouslySetInnerHTML={{__html: item}}/>
                          ))}
                        </ul>
                        </div>
                        <div className="item-tags">
                          {project.tags.map((tag, key) => (
                            <span key={key} className="tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
