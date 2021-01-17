import React from "react";
import api from '../assets/icons/api.svg'
import Skillcard from '../components/Skillcard'

const skills = [
    {
      icon: api,
      title: "Lorem ipsum dolor is simply dummy text of the pronting and typesetting industry.",
      about:"It has survived not onlyfive centuries, but also the leap into electronic typesetting,remaining essentially unchanged."
    },
    {
      icon: api,
      title: "Lorem ipsum dolor is simply dummy text of the pronting and typesetting industry.",
      about:"It has survived not onlyfive centuries, but also the leap into electronic typesetting,remaining essentially unchanged."
    },
    {
      icon: api,
      title: "Lorem ipsum dolor is simply dummy text of the pronting and typesetting industry.",
      about:"It has survived not onlyfive centuries, but also the leap into electronic typesetting,remaining essentially unchanged."
    },
    {
      icon: api,
      title: "Lorem ipsum dolor is simply dummy text of the pronting and typesetting industry.",
      about:"It has survived not onlyfive centuries, but also the leap into electronic typesetting,remaining essentially unchanged."
    },
    {
      icon: api,
      title: "Lorem ipsum dolor is simply dummy text of the pronting and typesetting industry.",
      about:"It has survived not onlyfive centuries, but also the leap into electronic typesetting,remaining essentially unchanged."
    },    {
      icon: api,
      title: "Lorem ipsum dolor is simply dummy text of the pronting and typesetting industry.",
      about:"It has survived not onlyfive centuries, but also the leap into electronic typesetting,remaining essentially unchanged."
    }
]

export default function About() {
  return (
    <div className="about">
      <h6 className="about__intro">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <div className="container about__cotainer">
            <h6 className="about__heading">What I Offer</h6>
            <div className="row">
                {
                    skills.map(skill => 
                      <Skillcard skill={skill} />
                    )
                }
            </div>
        </div>
      </h6>
    </div>
  );
}
