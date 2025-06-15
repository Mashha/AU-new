import "./about.css";
import image from "../../assets/street_activism1.jpg";

export default function AboutSection() {
  return (
    <section className='about-section'>
      <div className='background-split'>
        <div className='left-bg' />
        <div className='right-bg' />
      </div>

      <div className='content-grid'>
        <div className='who-we-are'>
          <h2>Who we are</h2>
          <p>
            We are a grassroots collective of animal rights{" "}
            <strong>activists</strong>. Since 2018, we've been educating the
            public with real footage from farms and slaughterhouses, showing the{" "}
            <strong>hidden cost</strong> of meat, dairy, eggs, leather, and
            more. In 2023, we formed <strong>Anonymous for the Unheard</strong>,
            a growing movement giving voice to the silenced and demanding
            justice for all animals.
          </p>
        </div>

        <div className='image-area'>
          <img src={image} alt='Anonymous for the Unheard' />
        </div>

        <div className='values-floating'>
          <p className='value'>COMPASSION</p>
          <p className='value'>JUSTICE</p>
          <p className='value'>LIBERATION</p>
        </div>

        <div className='what-we-believe'>
          <h2>What we believe in</h2>
          <p>
            We envision a world where animals are no longer treated as
            commodities, but as <strong>sentient</strong> beings worthy of
            respect, freedom, and peace. Through education and peaceful
            activism, we challenge norms and offer a better way forward for all
            living beings.
          </p>
        </div>
      </div>
    </section>
  );
}
