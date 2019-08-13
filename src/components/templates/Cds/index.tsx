import * as React from "react";
import { animated, useSpring } from "react-spring";
import { Link } from "gatsby";
import { parse } from "query-string";
import { Artwork } from "components/atoms/Artwork";
import { Layout } from "components/templates/Layout";
import styles from "./cds.module.scss";

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

const AnimatedTabItem = animated(Link);

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

  const singlesTabFade = useSpring({
    fontSize: pageIndex === 0 ? "20px" : "16px",
    fontWeight: pageIndex === 0 ? 700 : 500,
    borderBottomWidth: pageIndex === 0 ? "3px" : "0px",
    borderBottomColor:
      pageIndex === 0 ? "rgba(89,89,89,1)" : "rgba(89, 89, 89, 0)",
  });

  const albumsTabFade = useSpring({
    fontSize: pageIndex === 1 ? "20px" : "16px",
    fontWeight: pageIndex === 1 ? 700 : 500,
    borderBottomWidth: pageIndex === 1 ? "3px" : "0px",
    borderBottomColor:
      pageIndex === 1 ? "rgba(89,89,89,1)" : "rgba(89, 89, 89, 0)",
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
          <div className={styles.tabs}>
            <AnimatedTabItem
              to="/cds/?page=singles"
              style={singlesTabFade}
              className={styles.tabitem}
            >
              Singles
            </AnimatedTabItem>
            <AnimatedTabItem
              to="/cds/?page=albums"
              style={albumsTabFade}
              className={styles.tabitem}
            >
              Albums
            </AnimatedTabItem>
          </div>
        </Layout>
      </nav>
      <animated.main className={styles.container} style={swipe}>
        <animated.div style={singlesFade} className={styles.page}>
          <Layout>
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
