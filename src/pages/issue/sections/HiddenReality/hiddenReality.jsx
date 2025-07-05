import "./hiddenReality.css";
import { Trans } from "react-i18next";

const HiddenRealitySection = ({ data }) => {
  const hiddenRealityData = data.hiddenReality.content;
  const hiddenRealityImage = data.images[0].src;

  return (
    <section className='hidden-reality-section'>
      <div className='hidden-reality-text'>
        <h2>{data.hiddenReality.title}</h2>
        <div className='content-inner'>
          <div className='start'>{data.hiddenReality.start}</div>
          <div>
            {hiddenRealityData.map((text, i) => {
              return (
                <p key={i}>
                  <Trans i18nKey={text} components={{ strong: <strong /> }} />
                </p>
              );
            })}
          </div>
          <p className='end'>{data.hiddenReality.end}</p>
        </div>
      </div>
      <div className='hidden-reality-image'>
        <img src={hiddenRealityImage} alt={data.images[0].alt} />
      </div>
    </section>
  );
};

export default HiddenRealitySection;
