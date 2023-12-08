import Image from "next/image";
import SomeImage from "../../../../public/candle-main.jpg";
import styles from "../Posts.module.scss";

const Post = () => {
  return (
    <article className={styles.post}>
      <Image src={SomeImage} alt="candle"></Image>
      <div className={styles.postContent}>
        <div className={styles.postTitle}> Some title</div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          similique natus perspiciatis id labore alias sapiente laudantium
          officia pariatur repudiandae. Eum, autem rerum optio excepturi
          pariatur eaque officiis vel quam! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Fugiat aperiam obcaecati aliquid fuga
          deserunt nam voluptatibus doloremque necessitatibus ad, doloribus
          pariatur eveniet distinctio modi quis blanditiis a molestias quae
          sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae ab a unde autem laboriosam, in doloribus dolor cumque
          voluptatem voluptatibus ipsa nihil eaque fugiat consequuntur eius eum,
          eligendi ipsum est? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Omnis cum esse sed debitis, saepe quasi nostrum. Doloribus
          delectus corrupti, quaerat, voluptatibus quis ullam sunt sequi dicta
          quas, explicabo facere cumque.
        </p>
      </div>
    </article>
  );
};

export default Post;
