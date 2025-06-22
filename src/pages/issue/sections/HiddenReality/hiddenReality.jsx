import "./hiddenReality.css";
import categories from "../../../../data/categories";

const HiddenRealitySection = ({ data }) => {
  const hiddenRealityData = data.hiddenReality.content;
  const hiddenRealityImage = data.images[0].src;
  console.log(hiddenRealityImage);

  return (
    <section className='hidden-reality-section'>
      <div className='hidden-reality-text'>
        <h2>{data.hiddenReality.title}</h2>
        <div>
          {hiddenRealityData.map((text, i) => {
            return <p key={i}>{text}</p>;
          })}
        </div>
        <p className='closing'></p>
      </div>
      <div className='hidden-reality-image'>
        <img src={hiddenRealityImage} alt={data.images[0].alt} />
      </div>
    </section>
  );
};

export default HiddenRealitySection;
