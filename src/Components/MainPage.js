import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Form from "./Form";
import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles({
  AppContainer: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    background: "#FD5842"
  },

  components: {
    width: "87%",
    display: "flex",
    justifyContent: "space-between",
    height: "fit-content",
    marginTop: "10%"
  },
  componentsWrspper: {
    display: "flex",
    width: "90%",
    height: "77%",
    backgroundImage:
      "url('https://s3-alpha-sig.figma.com/img/1c7b/5da8/d3053200b6c3ee5668cfa4aa3872bf92?Expires=1583107200&Signature=GmsTThexef4LjZs0GO~BvxGIt7k3Ni5YRfz~ACjJlBtneFlU5TTLqDjZFQMD~iSllzxWma7qS-p0p5tL1d1gUvGFzYxm5vHXC7uLLaGQJW~yqM-KE6S4yv4xvY4mKT8GoXh8g7kX1WGhLLgOsJElUg2tabzolPji82wR6HnphBBhWlNd9HX~oHpSemfykIHJiRbQlMCcgmjFVCOW4Q-WOZkKdcBVwxJDPVu-Hu7s~FTwWhChmR8V6g7jl5JGl80nQKMqYgC-oUJ-YyVH20NbqJyNnaGcdOCwabTksrRqWcDwOINn8w1Emt~ZZ5x~BULRCKr91u2PgfjERGDzbg-7EQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    justifyContent: "center",
    marginTop: "10%"
  },
  topConainer: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  image: {
    width: 277,
    height: 350,
    backgroundImage:
      "url('https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?cs=srgb&dl=flor-flower-garden-jkakaroto-736230.jpg&fm=jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: 10
  },
  heading: {
    width: "100%",
    textAlign: "center",
    color: "white"
  }
});
export default function MainPage() {
  const classes = useStyle();
  const [newPost, setNewPost] = useState([]);
  const [gotNewPost, setGotNewPost] = useState(0);
  const handleNewPost = newPost => {
    setNewPost(newPost);
    setGotNewPost(gotNewPost + 1);
  };

  useEffect(() => {}, [gotNewPost]);
  return (
    <div className={classes.AppContainer}>
      <div className={classes.componentsWrspper}>
        <div className={classes.components}>
          <Form onNewPost={handleNewPost} />
          <ItemList post={newPost} newPostIndex={gotNewPost - 1} />
        </div>
      </div>
      <div className={classes.topConainer}>
        <h2 className={classes.heading}>Avital's Project</h2>
        <div className={classes.image} />
      </div>
    </div>
  );
}
