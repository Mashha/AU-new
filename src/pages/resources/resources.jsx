import { useTranslation } from "react-i18next";

const ResourcesPage = () => {
  const { t } = useTranslation();
  const resources = t("resources", { returnObjects: true });

  // Destructure title from the rest
  const { title, ...resourceCategories } = resources;

  return (
    <div className='resources-page'>
      <h1>{title}</h1>

      {Object.entries(resourceCategories).map(([key, category]) => (
        <section key={key} className='resource-category'>
          <h2>{category.title}</h2>
          <ul>
            {category.items.map((item, index) => (
              <li key={index}>
                {item.url ? (
                  <a href={item.url} target='_blank' rel='noopener noreferrer'>
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
  );
};

export default ResourcesPage;
