import "./rescue.css";

const StoriesOfHopeSection = () => {
  return (
    <section className='stories-of-hope-section white-section'>
      <div className='rescue-container'>
        <div className='rescue-content'>
          <h2 className='rescue-section-title'>Stories of Hope and Healing</h2>
          <p className='section-subtitle'>
            Real stories of animals who were saved from abuse. Their resilience
            reminds us that every life matters.
          </p>
        </div>
        <div className='video-wrapper'>
          <iframe
            width='100%'
            height='500'
            src='https://www.youtube.com/embed/nuF-eRe7eHs?si=ylxnk_LQoP_Grzv6'
            title='Stories of Hope and Healing'
            allow='web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default StoriesOfHopeSection;
