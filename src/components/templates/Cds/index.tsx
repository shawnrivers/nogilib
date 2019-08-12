import * as React from "react";
import { animated, useSpring } from "react-spring";
import { Link } from "gatsby";
import { parse } from "query-string";
import { Artwork } from "components/atoms/Artwork";
import styles from "./cds.module.scss";
import { Layout } from "components/templates/Layout";

interface CdsProps {
  query: string;
  singles: {
    edges: {
      node: {
        title: string;
        number: string;
        artworks: {
          medium: string;
        }[];
      };
    }[];
  };
  albums: {
    edges: {
      node: {
        title: string;
        number: string;
        artworks: {
          medium: string;
        }[];
      };
    }[];
  };
}

export const Cds = (props: CdsProps) => {
  const singles = props.singles.edges;
  const albums = props.albums.edges;

  const pageIndex = React.useMemo(() => {
    const { page } = parse(props.query);
    switch (page) {
      case "albums":
        return 1;
      default:
        return 0;
    }
  }, [props.query]);

  const swipe = useSpring({
    transform: `translateX(${-100 * pageIndex}vw)`,
  });

  const singlesFade = useSpring({
    transform: `scale(${pageIndex === 0 ? 1 : 0.7})`,
    opacity: pageIndex === 0 ? 1 : 0.3,
  });

  const albumsFade = useSpring({
    transform: `scale(${pageIndex === 1 ? 1 : 0.7})`,
    opacity: pageIndex === 1 ? 1 : 0.3,
  });

  return (
    <div className={styles.wrapper}>
      <nav>
        <Layout>
          <Link to="/cds/?page=singles">Singles</Link>
          <br />
          <Link to="/cds/?page=albums">Albums</Link>
        </Layout>
      </nav>
      <animated.main className={styles.container} style={swipe}>
        <animated.div style={singlesFade} className={styles.page}>
          <Layout>
            <h1>Singles</h1>
            <div className={styles.grid}>
              {singles.map(({ node }) => (
                <Link
                  to={`/single/${node.number}`}
                  key={node.number}
                  className={styles.artwork}
                >
                  <Artwork src={node.artworks[0].medium} title={node.title} />
                </Link>
              ))}
            </div>
          </Layout>
        </animated.div>
        <animated.div style={albumsFade} className={styles.page}>
          <Layout>
            <h1>Albums</h1>
            <div className={styles.grid}>
              {albums.map(({ node }) => (
                <Link
                  to={`/album/${node.number}`}
                  key={node.number}
                  className={styles.artwork}
                >
                  <Artwork src={node.artworks[0].medium} title={node.title} />
                </Link>
              ))}
            </div>
          </Layout>
        </animated.div>
      </animated.main>
    </div>
  );
};
