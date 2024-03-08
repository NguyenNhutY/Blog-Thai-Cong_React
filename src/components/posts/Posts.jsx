import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://thaicong.com/wp-content/uploads/2017/12/IMG_7821_web.jpg" />
      <Post img="https://thaicong.com/wp-content/uploads/2023/04/DSCF7865-QTC.jpg" />
      <Post img="https://thaicong.com/wp-content/uploads/2017/12/download1.jpg"/>
      <Post img="https://thaicong.com/wp-content/uploads/2023/04/DSCF7896-cover-cty_BW_02.jpg"/>
      <Post img="https://thaicong.com/wp-content/uploads/2021/04/CityGarden.jpg"/>
    </div>
  );
}
