import Post from "./Post/Post";
import styles from "./Posts.module.scss";

const Posts = () => {
  return (
    <section className={styles.postsList}>
      <Post />
      <Post />
    </section>
  );
};

export default Posts;
