import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Item from "./Item";
import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles({
  itemList: {
    width: "35%",
    height: "42vh",
    overflow: "auto",
    borderRadius: "14px",
    backgroundColor: "#1c233b",
    color: "white"
  },
  divider: {
    backgroundColor: "white"
  }
});
export default function ItemList(props) {
  const classes = useStyle();
  const [posts, setPosts] = useState([]);
  const [postChanged, setPostChanged] = useState(0);
  const fetchData = async () => {
    try {
      const results = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      setPosts(results.data);
    } catch (err) {
      console.log(err);
    }
  };
  const deletePost = (id, index) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        let newPosts = posts;
        newPosts.splice(index, 1);
        setPosts(newPosts);
        setPostChanged(postChanged + 1);
      });
  };
  const changePost = (id, value, index) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        title: value
      })
      .then(res => {
        let newPosts = posts;
        newPosts[index].title = value;
        setPosts(newPosts);
        setPostChanged(postChanged + 1);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const createNewPost = () => {
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, props.post)
      .then(res => {
        let tempPosts = posts;
        tempPosts.unshift(res.data);
        setPosts(tempPosts);

        setPostChanged(postChanged + 1);
      });
  };

  const handleOnSave = (id, value, index) => {
    changePost(id, value, index);
  };
  const handleOnDelete = (id, index) => {
    deletePost(id, index);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {}, [posts, postChanged]);
  useEffect(() => {
    if (props.newPostIndex !== -1) {
      createNewPost();
    }
  }, [props.newPostIndex]);
  return (
    <div className={classes.itemList}>
      <List>
        {posts.map((post, index) => {
          return (
            <div>
              <Item
                title={post.title}
                key={index}
                postIndex={index}
                postId={post.id}
                onSave={handleOnSave}
                onDelete={handleOnDelete}
              />
              <Divider className={classes.divider} />
            </div>
          );
        })}
      </List>
    </div>
  );
}
