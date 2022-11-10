import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Full content localization and internationalization',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Check out the new localizations of the documentation for product A, B
        and C that was just released. Now available in french and clingon.
      </>
    ),
  },
  {
    title: 'Check out the TL;DR',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Check out these custom ABB tutorials for how to get started with writing
        documentation for your product. Get started by just adding your{' '}
        <code>.md</code> or <code>.mdx</code> files into the <code>docs</code>{' '}
        directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize the platform layout by reusing React components.
        E.g. the <code>{'<Header />'}</code> and the <code>{'<Footer />'}</code>{' '}
        components.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
