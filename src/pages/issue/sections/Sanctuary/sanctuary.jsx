import "./sanctuary.css";

const FarmAnimalStoriesSection = ({ data }) => {
  return (
    <section className='stories-of-hope-section'>
      <div className='rescue-container'>
        <div className='rescue-content'>
          <h2 className='section-title'>{data.AnimalStories.title}</h2>
        </div>
        <div className='video-wrapper'>
          <iframe
            width='100%'
            height='500'
            src={data.AnimalStories.link}
            title={data.AnimalStories.title}
            allow='web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          />
        </div>
        {data.AnimalStories.sanctuary_link && (
          <div className='sanctuary-support'>
            <a
              href={data.AnimalStories.sanctuary_link}
              target='_blank'
              rel='noopener noreferrer'
              className='sanctuary-link'
            >
              💚 {data.AnimalStories.support} {data.AnimalStories.sanctuary_name}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default FarmAnimalStoriesSection;
