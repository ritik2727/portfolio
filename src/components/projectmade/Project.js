import React from 'react';
import { Typography } from '@mui/material';
import './ProjectCard.css.map'
import banking from '../../assets/banking.svg';
import project from '../../assets/bewkoof.svg';
import wf from '../../assets/wfphto.svg';
import ProjectCard from './ProjectCard';

// import "react-multi-carousel/lib/styles.css";
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';


// import { Container, Card, Row, Col } from "react-bootstrap";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


import Carousel from "react-elastic-carousel";
// import Item from '../Item';
import "./stylest.css";


const data = [
  { 
  type: 'Website', 
  name: "E-commmerce website", 
  desc: "This is a Ecommmerce website build with react,firebase,ExpressJs,Stripe", 
  gitLink: 'https://ecommerse-ritik2727.vercel.app/', 
  appLink: '', 
  image:project
  },
  { 
    type: 'Mobile App', 
    name: "NGO Website", 
    desc: "This is a Ecommmerce Mobile Application  build with React-Native,Firebase,ExpressJs,Stripe", 
    gitLink: '',
     appLink: '', 
     image: wf
  },
  { 
    type: 'Website', 
    name: "Basic Banking Website", 
    desc: "This is a Basic Banking  website build with react,firebase",
     gitLink: '', 
     appLink: '',
      image: banking
  },
  { 
    type: 'Website', 
    name: "Basic Banking Website", 
    desc: "This is a Basic Banking  website build with react,firebase",
     gitLink: '', 
     appLink: '',
      image: banking
  },
  { 
    type: 'Website', 
    name: "Basic Banking Website", 
    desc: "This is a Basic Banking  website build with react,firebase",
     gitLink: '', 
     appLink: '',
      image: banking
  }
]


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2},
  { width: 1200, itemsToShow: 3 },
];

function Project() {

  return (
    <>
       <Typography  variant='h2' align='center' >Projects</Typography>
      <div className="App">
        <Carousel breakPoints={breakPoints} showArrows={false}>
            
        {data.map((item)=>(
            <ProjectCard 
                key={item.name}
              image={item.image} 
              type={item.type} 
              name={item.name} 
              desc={item.desc} 
              gitLink={item.gitLink}
              appLink={item.appLink}
            />       
      ))}
    
        </Carousel>
      </div>
    </>
  );
}

export default Project;