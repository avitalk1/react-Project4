import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";

const useStyle = makeStyles({
  formWrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "35%"
  },
  root: {
    height: "42vh",
    width: "100%",
    background: "#1c233b",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: "14px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    position: "relative",
    width: "95%",
    height: "100%"
  },
  textField: {
    background: "white",
    height: "12%",
    marginBottom: "10px",
    "& .MuiInputBase-root": {
      height: "100%"
    }
  },
  icon: {
    color: "#FD5842",
    position: "absolute",
    bottom: 0,
    fontSize: "54px",
    background: "black",
    borderRadius: 54
  },
  textArea: {
    height: "50%"
  },
  topTextField: {
    marginTop: "18px"
  }
});

export default function Form(props) {
  const [post, setPost] = useState({
    title: "",
    userId: 0,
    body: ""
  });
  const classes = useStyle();

  const handleOnChange = (field, e) => {
    let newPost = post;
    newPost[field] = e.target.value;
    setPost(newPost);
  };
  const handleOnClick = () => {
    props.onNewPost(post);
  };
  return (
    <div className={classes.formWrapper}>
      <div className={classes.root}>
        <form className={classes.form}>
          <TextField
            className={`${classes.textField} ${classes.topTextField} `}
          />
          <TextField
            className={classes.textField}
            onChange={e => handleOnChange("userId", e)}
          />
          <TextField
            className={classes.textField}
            onChange={e => handleOnChange("title", e)}
          />
          <TextField
            multiple
            className={`${classes.textField} ${classes.textArea} `}
            onChange={e => handleOnChange("body", e)}
          />
        </form>
      </div>
      <IconButton onClick={handleOnClick}>
        <AddCircleIcon className={classes.icon} />
      </IconButton>
    </div>
  );
}
