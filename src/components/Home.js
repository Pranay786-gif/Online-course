import React,{useEffect,useState} from "react";
import "./Home.css";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import Carousell from "./Carousell";
import Navbar from "./Navbar";

const Home = () => {
  const [courseData,setCourseData] = useState([])
  useEffect(()=>{
    axios.get("https://abcd378.herokuapp.com/get_home_page")
    .then((res)=>{
      setCourseData(res.data.data.section)
    })
  },[])
  console.log(courseData)
  return (
    <div>
      <Navbar />
      <Carousell />
      {courseData&&courseData.length>0&&courseData.map((item,index)=>(

      <div className="container" key={index}>
        <h1 className="text">{item.title}</h1>
        {item.data.map((itm,index)=>(

      <div className="main_div" key={index}>
        <div className="items">
          <img
            className="img"
            src={itm.cource_image}
            alt="img"
          />
        </div>
        <div className="items">
          <div className="text">
            <h1>{itm.cource_name}</h1>
          </div>
          <div className="text">
            {itm.cource_description}
          </div>
          <div className="text button ">
            <Box display="flex">
              <Box mr={5}>
                <Button mr variant="contained" color="primary">
                  View More
                </Button>
              </Box>
              <Box>
                <Button variant="contained" color="primary">
                  Get Course
                </Button>
              </Box>
            </Box>
          </div>
        </div>
      </div>
        ))}

      </div>
      ))}
      </div>
  );
};

export default Home;
