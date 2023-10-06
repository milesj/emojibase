/* eslint-disable sort-keys */

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

interface FeatureProps {
	title: string;
	description: React.ReactNode;
	imageUrl?: string;
}

const features: FeatureProps[] = [
	{
		title: '📑 Specification compliant',
		description: (
			<>
				With data being derived from the official Unicode data files, and aligned with Unicode
				Technical Standard&apos;s #51 and #35, we can ensure a specification compliant solution.
			</>
		),
	},
	{
		title: '🇺🇳 Localized datasets',
		description: (
			<>
				Easily internationalize your emoji integration with one of our 27 supported languages and
				growing. Is your language not supported? Just ask!
			</>
		),
	},
	{
		title: '📜 Historical information',
		description: (
			<>
				Whether it&apos;s skin tone variations, genders, multi-person, or Unicode versioning, we
				capture and persist all historical information for reusability.
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
					<img alt={title} className={styles.featureImage} src={imgUrl} />
				</div>
			)}

			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
}

export default function Home() {
	const context = useDocusaurusContext();
	const { siteConfig } = context;

	return (
		// @ts-expect-error Invalid types
		<Layout description={siteConfig.tagline} title="Spec compliant emoji datasets">
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
							frameBorder="0"
							scrolling="0"
							src="https://ghbtns.com/github-btn.html?user=milesj&repo=emojibase&type=star&count=true&size=large"
							title="GitHub"
						/>
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
