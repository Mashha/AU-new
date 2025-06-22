import "./hero.css";

const CategoryHero = ({ data }) => {
  return (
    <section className='category-hero'>
      <div className='hero-overlay'>
        <div className='hero-content'>
          <h1 className='hero-title'>{data.subtitle}</h1>
        </div>
      </div>
      {/* {image && (
        <img src={`/images/${image}`} alt={title} className='hero-image' />
      )} */}
    </section>
  );
};
export default CategoryHero;
