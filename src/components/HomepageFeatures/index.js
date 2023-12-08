import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Save yourself',
    Svg: require('@site/static/img/save_yourself.svg').default,
    
    description: (
      <>
Your life is the most important thing that you have. We will help you to protect it during driving!
      </>
    ),
  },
  {
    title: 'Save others',
    Svg: require('@site/static/img/save_others.svg').default,
    description: (
      <>
        We will protect your beloved ones in your vehicle and those who around you on the road
      </>
    ),
  },
  {
    title: 'Stay calm',
    Svg: require('@site/static/img/stay_calm.svg').default,
    description: (
      <>
        We will monitor your state during the drive
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
