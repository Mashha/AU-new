import "./mask.css";

const MaskSection = () => {
  return (
    <section className='masked-hero'>
      <div className='mask-content'>
        <p className='main-text'>
          The mask represents solidarity, with the animals, with the truth, and
          with every fight against injustice. It redirects focus from the
          activist to the message:
          <span className='highlight'>
            {" "}
            animals are individuals, not commodities.
          </span>
        </p>
      </div>
    </section>
  );
};

export default MaskSection;
