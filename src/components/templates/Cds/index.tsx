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

  const swipeIndex = React.useMemo(() => {
    const { page } = parse(props.query);

    if (page === "albums") {
      return "-100";
    }
    return "0";
  }, [props.query]);

  const swipe = useSpring({
    transform: `translateX(${swipeIndex}vw)`,
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
        <div className={styles.page}>
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
        </div>
        <div className={styles.page}>
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
        </div>
      </animated.main>
    </div>
  );
};
