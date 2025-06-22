import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import categories from "../../data/categories";
import HeroSection from "./sections/CategoryHero/hero";
import HiddenRealitySection from "./sections/HiddenReality/hiddenReality";

const CategoryPage = () => {
  const { category } = useParams();
  const { t } = useTranslation();
  const data = t(`categories.${category}`, { returnObjects: true });

  console.log(data);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection data={data} />

      {/* Hidden Reality Section */}
      <HiddenRealitySection data={data} />

      {/* Images Section */}

      {/* Did You Know Section */}
      <section className='did-you-know'>
        <h3>{data.facts.title}</h3>
        <ul>
          {data.facts.items.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </section>

      {/* Call to Action Section */}
    </div>
  );
};

export default CategoryPage;
