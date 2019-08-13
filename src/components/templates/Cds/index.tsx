import * as React from "react";
import { animated, useTransition } from "react-spring";
import { LocalizedLink } from "components/atoms/LocalizedLink";
import { parse } from "query-string";
import { Artwork } from "components/atoms/Artwork";
import { PageTab, TabItem } from "components/molecules/PageTab";
import styles from "./cds.module.scss";

interface CdsProps {
  query: string;
  singles: {
    edges: {
      node: {
        title: string;
        number: string;
        artworks: {
          large: string;
          medium: string;
          small: string;
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
          large: string;
          medium: string;
          small: string;
        }[];
      };
    }[];
  };
}

const pageTabItems: TabItem[] = [
  {
    link: "/cds/?page=singles",
    page: "singles",
  },
  {
    link: "/cds/?page=albums",
    page: "albums",
  },
];

export const Cds = (props: CdsProps) => {
  const singles = props.singles.edges;
  const albums = props.albums.edges;

  const { page } = React.useMemo(() => parse(props.query), [props.query]);

  const pageIndex = React.useMemo(() => {
    switch (page) {
      case "albums":
        return 1;
      default:
        return 0;
    }
  }, [page]);

  const transitionItems: {
    cds: CdsProps["singles"]["edges"] | CdsProps["albums"]["edges"];
    key: "singles" | "albums";
  }[] = [{ cds: singles, key: "singles" }, { cds: albums, key: "albums" }];

  const cdsTransition = useTransition(
    transitionItems[pageIndex],
    transitionItems => transitionItems.key,
    {
      from: { opacity: 0, transform: "translateY(200px)" },
      enter: { opacity: 1, transform: "translateY(0)" },
      leave: { opacity: 0, transform: "translateY(100px)" },
    }
  );

  return (
    <div className={styles.wrapper}>
      <nav>
        <PageTab
          items={pageTabItems}
          selectedItem={page ? (page as string) : "singles"}
        />
      </nav>
      <main>
        {cdsTransition.map(({ item, key, props: transition }) => {
          return (
            <animated.div style={transition} key={key} className={styles.grid}>
              {item.cds.map(({ node }) => (
                <LocalizedLink
                  to={`/${item.key}/${node.number}`}
                  key={node.number}
                  className={styles.artwork}
                >
                  <Artwork images={node.artworks[0]} title={node.title} />
                </LocalizedLink>
              ))}
            </animated.div>
          );
        })}
      </main>
    </div>
  );
};
