import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";
export default function Item(props) {
  let content;
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const handleClickSave = () => {
    setEditing(false);
    props.onSave(props.postId, newTitle, props.postIndex);
  };
  if (editing) {
    content = (
      <ListItem>
        <TextField
          placeholder={props.title}
          onChange={e => setNewTitle(e.target.value)}
        />
        <IconButton edge="end" onClick={handleClickSave}>
          <SaveIcon style={{ color: "#FD5842" }} />
        </IconButton>
        <IconButton
          edge="end"
          onClick={() => {
            setEditing(false);
          }}
        >
          <CloseIcon style={{ color: "white" }} />
        </IconButton>
      </ListItem>
    );
  } else {
    content = (
      <ListItem>
        <ListItemText primary={props.title} />
        <IconButton edge="end" onClick={() => setEditing(true)}>
          <EditIcon style={{ color: "#FD5842" }} />
        </IconButton>
        <IconButton
          edge="end"
          onClick={() => props.onDelete(props.postId, props.postIndex)}
        >
          <DeleteIcon style={{ color: "white" }} />
        </IconButton>
      </ListItem>
    );
  }

  return content;
}
