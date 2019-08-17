import * as React from "react";
import styles from "./song.module.scss";
import { Layout } from "components/atoms/Layout";
import { ArrowBackIcon } from "components/atoms/icons/ArrowBackIcon";
import { motion } from "framer-motion";
import { graphql } from "gatsby";
import { RouteComponentProps } from "@reach/router";
import { SongType } from "types/responseTypes";
import { toCdNumber } from "utils/strings";
import { parse } from "query-string";
import { FormattedMessage, injectIntl } from "react-intl";
import { Language } from "utils/constants";
import { LocalizedList } from "components/atoms/locales/LocalizedList";
import { arrayToObject } from "utils/arrays";
import { MemberCard } from "components/atoms/MemberCard";
import { LocalizedNumber } from "components/atoms/locales/LocaleNumber";
import { LocalizedLink } from "components/atoms/locales/LocalizedLink";

const containerVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  hidden: {
    opacity: 0,
    x: -20,
  },
};

const headingVariants = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: -20,
  },
};

const contentContainerVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
  },
};

const contentVariants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: -20,
  },
};

const PerformersTag = injectIntl(
  ({
    singleNumber,
    tagName,
    intl: { locale },
  }: {
    singleNumber: string;
    tagName: string;
    intl: any;
  }) => {
    if (tagName === "") {
      return null;
    }

    if (tagName.includes("generation")) {
      return (
        <p className={styles.caption}>
          #<FormattedMessage {...({ id: tagName } as any)} />
        </p>
      );
    }

    if (tagName === "selected" || tagName === "under") {
      return locale === Language.En ? (
        <p className={styles.caption}>
          #<LocalizedNumber num={singleNumber} type="cd" />{" "}
          <FormattedMessage {...({ id: "single" } as any)} />{" "}
          <FormattedMessage {...({ id: tagName } as any)} />{" "}
          <FormattedMessage {...({ id: "members" } as any)} />
        </p>
      ) : (
        <p className={styles.caption}>
          #<LocalizedNumber num={singleNumber} type="cd" />
          <FormattedMessage {...({ id: "single" } as any)} />
          <FormattedMessage {...({ id: tagName } as any)} />
          <FormattedMessage {...({ id: "members" } as any)} />
        </p>
      );
    }

    return <p className={styles.caption}>#{tagName}</p>;
  }
);

interface SongData {
  data: {
    songsJson: {
      title: string;
      type: SongType;
      artwork: {
        large: string;
        medium: string;
      };
      single: {
        number: string;
      };
      albums: {
        number: string;
      }[];
      performersTag: {
        singleNumber: string;
        name: string;
      };
      performers: {
        center: string[];
      };
      formations: {
        firstRow: string[];
        fourthRow: string[];
        secondRow: string[];
        thirdRow: string[];
      };
      creators: {
        arrange: string[];
        compose: string[];
        direct: string[];
        lyrics: string[];
      };
    };
    allMembersJson: {
      nodes: {
        name: string;
        nameNotations: {
          lastName: string;
          firstName: string;
          lastNameEn: string;
          firstNameEn: string;
        };
        profileImage: {
          large: string;
          small: string;
        };
      }[];
    };
  };
}

const Song = ({ data, location }: RouteComponentProps<SongData>) => {
  const backTo = React.useMemo(() => {
    if (location) {
      const query = location.search;
      const { inType, inNumber } = parse(query);

      if (inType && inNumber) {
        return `/${inType}/${inNumber}`;
      }

      return "";
    }
    return "";
  }, []);

  console.log({ backTo });

  if (data) {
    const song = data.songsJson;

    const songTags = React.useMemo(
      () => [
        ...[song.single]
          .filter(({ number }) => number !== "")
          .map(({ number }) => `#${toCdNumber(number)} single`),
        ...song.albums.map(({ number }) => `#${toCdNumber(number)} album`),
      ],
      [song.single, song.albums]
    );

    const membersObj = React.useMemo(
      () => arrayToObject(data.allMembersJson.nodes, "name"),
      [data.allMembersJson.nodes]
    );

    const formation = React.useMemo(
      () =>
        [
          song.formations.firstRow,
          song.formations.secondRow,
          song.formations.thirdRow,
          song.formations.fourthRow,
        ].filter(formation => formation.length > 0),
      [song.formations]
    );

    return (
      <Layout>
        <motion.div whileHover={{ x: -7, scale: 1.5 }} className={styles.link}>
          {backTo !== "" ? (
            <LocalizedLink to={backTo}>
              <ArrowBackIcon className={styles.back} />
            </LocalizedLink>
          ) : (
            <button
              onClick={() => {
                window.history.back();
              }}
            >
              <ArrowBackIcon className={styles.back} />
            </button>
          )}
        </motion.div>
        <div>
          {data ? (
            <motion.div
              variants={containerVariants}
              className={styles.container}
            >
              <motion.div variants={headingVariants} className={styles.heading}>
                <h1 className={styles.title}>{song.title}</h1>
                <h4 className={styles.tags}>
                  {songTags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </h4>
              </motion.div>
              <motion.div
                variants={contentContainerVariants}
                className={styles.flexbox}
              >
                <motion.div
                  variants={contentVariants}
                  className={styles.artwork}
                >
                  <img
                    src={song.artwork.medium}
                    srcSet={`${song.artwork.large} 1.5x`}
                    alt={song.title}
                  />
                </motion.div>
                <motion.div
                  variants={contentVariants}
                  className={styles.content}
                >
                  <section className={styles.section}>
                    <h2 className={styles.subheading}>
                      <FormattedMessage {...({ id: "performers" } as any)} />
                    </h2>
                    <PerformersTag
                      singleNumber={song.performersTag.singleNumber}
                      tagName={song.performersTag.name}
                    />
                    <div className={styles.formation}>
                      {formation.length > 1 ? (
                        formation.map((row, index) => (
                          <div key={index} className={styles.row}>
                            <h4 className={styles.rowindex}>
                              <LocalizedNumber num={index + 1} type="row" />
                            </h4>
                            <div className={styles.grid}>
                              {row.map(memberName => {
                                const member = membersObj[memberName];
                                return (
                                  <MemberCard
                                    key={member.name}
                                    name={member.nameNotations}
                                    image={member.profileImage}
                                    isCenter={song.performers.center.includes(
                                      member.name
                                    )}
                                  />
                                );
                              })}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className={styles.grid}>
                          {formation[0].map(memberName => {
                            const member = membersObj[memberName];
                            return (
                              <MemberCard
                                key={member.name}
                                name={member.nameNotations}
                                image={member.profileImage}
                                isCenter={song.performers.center.includes(
                                  member.name
                                )}
                              />
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </section>
                  <section className={styles.section}>
                    <h2
                      className={
                        styles.subheading + " " + styles.creatorscontainer
                      }
                    >
                      <FormattedMessage {...({ id: "creators" } as any)} />
                    </h2>
                    <div className={styles.creators}>
                      {song.creators.lyrics.length > 0 ? (
                        <div className={styles.creatorsitem}>
                          <span className={styles.creatorwork}>
                            <FormattedMessage {...({ id: "lyrics" } as any)} />
                          </span>
                          <span className={styles.creatornames}>
                            <LocalizedList list={song.creators.lyrics} />
                          </span>
                        </div>
                      ) : null}
                      {song.creators.compose.length > 0 ? (
                        <div className={styles.creatorsitem}>
                          <span className={styles.creatorwork}>
                            <FormattedMessage {...({ id: "compose" } as any)} />
                          </span>
                          <span className={styles.creatornames}>
                            <LocalizedList list={song.creators.compose} />
                          </span>
                        </div>
                      ) : null}
                      {song.creators.arrange.length > 0 ? (
                        <div className={styles.creatorsitem}>
                          <span className={styles.creatorwork}>
                            <FormattedMessage {...({ id: "arrange" } as any)} />
                          </span>
                          <span className={styles.creatornames}>
                            <LocalizedList list={song.creators.arrange} />
                          </span>
                        </div>
                      ) : null}
                      {song.creators.direct.length > 0 ? (
                        <div className={styles.creatorsitem}>
                          <span className={styles.creatorwork}>
                            <FormattedMessage {...({ id: "direct" } as any)} />
                          </span>
                          <span className={styles.creatornames}>
                            <LocalizedList list={song.creators.direct} />
                          </span>
                        </div>
                      ) : null}
                    </div>
                  </section>
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            <h1>Song Page</h1>
          )}
        </div>
      </Layout>
    );
  }

  return null;
};

export default Song;

export const query = graphql`
  query($key: String!) {
    songsJson(key: { eq: $key }) {
      title
      type
      artwork {
        large
        medium
      }
      single {
        number
      }
      albums {
        number
      }
      performersTag {
        singleNumber
        name
      }
      performers {
        center
      }
      formations {
        firstRow
        fourthRow
        secondRow
        thirdRow
      }
      creators {
        arrange
        compose
        direct
        lyrics
      }
    }
    allMembersJson {
      nodes {
        name
        nameNotations {
          firstName
          firstNameEn
          lastName
          lastNameEn
        }
        profileImage {
          large
          small
        }
      }
    }
  }
`;
