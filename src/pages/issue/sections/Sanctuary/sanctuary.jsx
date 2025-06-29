import "./sanctuary.css"

const FarmAnimalStoriesSection = ({ data }) => {
  return (
    <section className='stories-of-hope-section'>
      <div className='rescue-container'>
        <div className='rescue-content'>
          <h2 className='section-title'>{data.AnimalStories.title}</h2>
          <p className='section-subtitle'></p>
        </div>
        <div className='video-wrapper'>
          <iframe
            width='100%'
            height='500'
            src='https://www.youtube.com/embed/fp5KJQ_xakU?si=CrKYrnAt6MzCBm_o'
            title='Farm Animal Stories with Happy Endings'
            allow='web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default FarmAnimalStoriesSection;