import * as React from "react";
import { Link } from "@reach/router";
import { Artwork } from "components/atoms/Artwork";
import styles from "./cds.module.scss";
import { Layout } from "components/templates/Layout";

interface CdsProps {
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div id="singles" className={styles.page}>
          <Layout>
            <nav>
              <Link to="#singles">Singles</Link>
              <br />
              <Link to="#albums">Albums</Link>
            </nav>
            <main>
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
            </main>
          </Layout>
        </div>
        <div id="albums" className={styles.page}>
          <Layout>
            <nav>
              <Link to="#singles">Singles</Link>
              <br />
              <Link to="#albums">Albums</Link>
            </nav>
            <main>
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
            </main>
          </Layout>
        </div>
      </div>
    </div>
  );
};
