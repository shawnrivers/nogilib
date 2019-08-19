import * as React from "react";
import styles from "./song.module.scss";
import { Layout } from "components/atoms/Layout";
import { ArrowBackIcon } from "components/atoms/icons/ArrowBackIcon";
import { motion } from "framer-motion";
import { graphql } from "gatsby";
import { SongType } from "types/responseTypes";
import { toCdNumber } from "utils/strings";
import { FormattedMessage, injectIntl } from "react-intl";
import { Language, KOJIHARU } from "utils/constants";
import { LocalizedList } from "components/atoms/locales/LocalizedList";
import { arrayToObject } from "utils/arrays";
import { MemberCard } from "components/atoms/MemberCard";
import { LocalizedNumber } from "components/atoms/locales/LocaleNumber";
import { useScrollRestoration } from "utils/hooks";

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

const KojiharuCard = ({ isCenter }: { isCenter: boolean }) => (
  <MemberCard
    nameKey={KOJIHARU}
    name={{
      lastName: "小嶋",
      lastNameEn: "kojima",
      firstName: "陽菜",
      firstNameEn: "haruna",
    }}
    image={{
      large:
        "https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/images/members/others/kojimaharuna_large.jpg",
      small:
        "https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/images/members/others/kojimaharuna_small.jpg",
    }}
    isCenter={isCenter}
  />
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
        singleImages: {
          large: string;
          small: string;
        }[];
      }[];
    };
  };
}

const Song = ({ data }: SongData) => {
  useScrollRestoration();

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

    const membersObj = React.useMemo(() => {
      const singleNumber = Number(song.single.number);

      let members = data.allMembersJson.nodes;

      for (const member of members) {
        if (song.single.number !== "") {
          member.profileImage = member.singleImages[singleNumber - 1];
        }
      }

      return arrayToObject(members, "name");
    }, [data.allMembersJson.nodes, song.single.number]);

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
          <button
            onClick={() => {
              window.history.back();
            }}
          >
            <ArrowBackIcon className={styles.back} />
          </button>
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
                                if (memberName !== KOJIHARU) {
                                  const member = membersObj[memberName];
                                  return (
                                    <MemberCard
                                      key={member.name}
                                      nameKey={memberName}
                                      name={member.nameNotations}
                                      image={member.profileImage}
                                      isCenter={song.performers.center.includes(
                                        member.name
                                      )}
                                    />
                                  );
                                } else {
                                  return (
                                    <KojiharuCard
                                      key={memberName}
                                      isCenter={song.performers.center.includes(
                                        memberName
                                      )}
                                    />
                                  );
                                }
                              })}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className={styles.grid}>
                          {formation[0].map(memberName => {
                            if (memberName !== KOJIHARU) {
                              const member = membersObj[memberName];
                              return (
                                <MemberCard
                                  key={memberName}
                                  nameKey={memberName}
                                  name={member.nameNotations}
                                  image={member.profileImage}
                                  isCenter={song.performers.center.includes(
                                    memberName
                                  )}
                                />
                              );
                            } else {
                              return (
                                <KojiharuCard
                                  key={memberName}
                                  isCenter={song.performers.center.includes(
                                    memberName
                                  )}
                                />
                              );
                            }
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
        singleImages {
          large
          small
        }
      }
    }
  }
`;

export default Song;
