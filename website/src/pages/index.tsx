import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

interface FeatureProps {
  title: string;
  description: React.ReactNode;
  imageUrl?: string;
}

const features: FeatureProps[] = [
  {
    title: 'Specification compliant',
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        With data being derived from the official Unicode data files, and aligned with Unicode
        Technical Standard's #51 and #35, we can ensure a specification compliant solution.
      </>
    ),
  },
  {
    title: 'Localized datasets',
    // imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Easily internationalize your emoji integration with one of our 19 supported languages and
        growing. Is your language not supported? Just ask!
      </>
    ),
  },
  {
    title: 'Historical information',
    // imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Whether it's skin tone variations, genders, multi-person, or Unicode versioning, we capture
        and persist all historical information for reusability.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }: FeatureProps) {
  const imgUrl = useBaseUrl(imageUrl);

  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}

      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="Spec compliant emoji datasets" description={siteConfig.tagline}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--secondary button--lg', styles.getStarted)}
              to={useBaseUrl('docs/')}
            >
              Get started
            </Link>

            <iframe
              src="https://ghbtns.com/github-btn.html?user=milesj&repo=emojibase&type=star&count=true&size=large"
              frameBorder="0"
              scrolling="0"
              title="GitHub"
            ></iframe>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
