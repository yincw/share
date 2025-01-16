import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Web 应用开发',
    Svg: require('@site/static/img/web.svg').default,
    description: (
      <>
        基于 React；包含：开发环境集成、项目脚手架、界面开发、监控与分析、架构设计、性能优化、Web安全、服务端渲染；支持浏览器环境。
      </>
    ),
  },
  {
    title: '小程序应用开发',
    Svg: require('@site/static/img/mp.svg').default,
    description: (
      <>
        基于 Taro；支持 微信、QQ、抖音、淘宝、支付宝...
      </>
    ),
  },
  {
    title: '移动应用开发',
    Svg: require('@site/static/img/app.svg').default,
    description: (
      <>
        基于 React Native/Flutter；支持 Android、iOS、HarmonyOS。
      </>
    ),
  },
  {
    title: '桌面应用开发',
    Svg: require('@site/static/img/desktop.svg').default,
    description: (
      <>
        基于 Electron/Flutter；支持 Windows、macOS、Linux。
      </>
    ),
  },
  {
    title: '服务端开发',
    Svg: require('@site/static/img/api.svg').default,
    description: (
      <>
        基于 Apollo Server；包含 Node.js 服务端框架、中间价、应用容器、云服务、服务器、数据库、操作系统...
      </>
    ),
  },
  {
    title: '前端基石',
    Svg: require('@site/static/img/basic.svg').default,
    description: (
      <>
        包含 编程语言、编程范式、设计模式、数据结构与算法、正则表达式；计算机网络&协议、数据库、操作系统、编译原理、计算机基础。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
