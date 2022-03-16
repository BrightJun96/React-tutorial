import React, { useEffect } from "react";
import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "./../modules/sample";

const SampleContainer = ({
  post,
  users,
  loadingPost,
  loadingUsers,
  getPost,
  getUsers,
}) => {
  useEffect(() => {
    const fn = async () => {
      try {
        await getPost(1);
        await getUsers();
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [getPost, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

const mapStateToProps = ({ sample, loading }) => ({
  post: sample.post,
  users: sample.users,
  loadingPost: loading["sample/GET_POST"],
  loadingUsers: loading["sample/GET_USERS"],
}); // props로 전달
const mapDispatchToProps = { getPost, getUsers }; //props로 전달
export default connect(mapStateToProps, mapDispatchToProps)(SampleContainer);
