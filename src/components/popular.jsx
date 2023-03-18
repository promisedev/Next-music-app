import {useState, useEffect} from 'react';
import Styles from "./musicbody.module.css";
import Music from "./music";
const Popular = ({props}) => {

 const popular = props.filter((prop)=>prop.plays >= 100);   
  const [num, setNum] = useState(10);

  const [musics, setMusics] = useState([]);

  useEffect(() => {
    let music = popular.filter((prop, index) => {
      if (index <= num) {
        return prop;
      }
    });
    setMusics(music);
  }, [num]);

  // -------------------------------

  const showMore = () => {
    let val = num + 5;
    val++;
    setNum(val);
  };

  return (
    musics.length > 0 && (
      <section className={Styles.music_body}>
        <p className={Styles.music_title}>Popular Tracks</p>
        <article className={Styles.music_container}>
          {musics.map((music, index) => {
            return <Music key={index} props={music}/>;
          })}
        </article>

        {/* ---------------------------------------------------- */}
        <div className={Styles.music_body_control}>
          <button onClick={showMore}>Show more</button>
        </div>
      </section>
    )
  );
};

export default Popular;
