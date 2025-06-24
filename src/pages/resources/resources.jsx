import { useTranslation } from "react-i18next";
import "./resources.css";
import Footer from "../../components/footer/footer";
import Navigation from "../../components/header/Navigation";

const ResourcesPage = () => {
  const { t } = useTranslation();
  const resources = t("resources", { returnObjects: true });

  const { title, ...resourceCategories } = resources;

  return (
    <>
      <Navigation />

      <div className='resources-page'>
        <div className='resources-inner'>
          <h1>{title}</h1>

          {Object.entries(resourceCategories).map(([key, category]) => (
            <section key={key} className='resource-category'>
              <h2>{category.title}</h2>
              <ul>
                {category.items.map((item, index) => (
                  <li key={index}>
                    {item.url ? (
                      <a
                        href={item.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ResourcesPage;
