import * as React from "react";
import { motion } from "framer-motion";
import { injectIntl } from "react-intl";
import styles from "./song.module.scss";
import { PageContentLayout } from "client/components/atoms/PageContentLayout";
import { ArrowBackIcon } from "client/components/atoms/icons/ArrowBackIcon";
import { LocalizedList } from "client/components/atoms/locales/LocalizedList";
import { MemberCard } from "client/components/atoms/MemberCard";
import { LocalizedNumber } from "client/components/atoms/locales/LocalizedNumber";
import { useScrollRestoration } from "client/utils/hooks";
import { Message } from "client/components/atoms/Message";
import { KOJIHARU, Language } from "client/utils/constants";
import { SongType } from "server/utils/constants";
import { Image } from "client/components/atoms/Image";

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
          #<Message text={tagName} />
        </p>
      );
    }

    if (tagName === "selected" || tagName === "under") {
      return locale === Language.En ? (
        <p className={styles.caption}>
          #<LocalizedNumber num={singleNumber} type="cd" />{" "}
          <Message text="single" /> <Message text={tagName} />{" "}
          <Message text="members" />
        </p>
      ) : (
        <p className={styles.caption}>
          #<LocalizedNumber num={singleNumber} type="cd" />
          <Message text="single" />
          <Message text={tagName} />
          <Message text="members" />
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
    image="members/others/kojimaharuna_large.jpg"
    isCenter={isCenter}
  />
);

type SongPerformerType = {
  name: string;
  nameNotations: {
    lastName: string;
    firstName: string;
    lastNameEn: string;
    firstNameEn: string;
  };
  profileImage: string;
  singleImages: string[];
};

interface SongProps {
  title: string;
  songTags: string[];
  type: SongType;
  artwork: string;
  performersTag: {
    singleNumber: string;
    name: string;
  };
  formation: string[][];
  members: { [key: string]: SongPerformerType };
  centers: string[];
  creators: {
    arrange: string[];
    compose: string[];
    direct: string[];
    lyrics: string[];
  };
}

export const Song = ({
  title,
  type,
  songTags,
  artwork,
  performersTag,
  formation,
  members,
  centers,
  creators,
}: SongProps) => {
  useScrollRestoration();

  return (
    <div className={styles.background}>
      <PageContentLayout>
        <motion.div whileHover={{ x: -7, scale: 1.5 }} className={styles.link}>
          <button
            onClick={() => {
              window.history.back();
            }}
            aria-label="Go Back"
          >
            <ArrowBackIcon className={styles.back} />
          </button>
        </motion.div>
        <motion.div variants={containerVariants} className={styles.container}>
          <motion.div variants={headingVariants} className={styles.heading}>
            <h1 className={styles.title}>{title}</h1>
            <h4 className={styles.tags}>
              <span>
                #<Message text={type} />
              </span>
              {songTags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </h4>
          </motion.div>
          <motion.div
            variants={contentContainerVariants}
            className={styles.flexBox}
          >
            <motion.div variants={contentVariants} className={styles.artwork}>
              <div className={styles.artworkImageWrapper}>
                <Image src={artwork} alt={title} />
              </div>
            </motion.div>
            <motion.div variants={contentVariants} className={styles.content}>
              <section className={styles.section}>
                <h2 className={styles.subheading}>
                  <Message text="performers" />
                </h2>
                <PerformersTag
                  singleNumber={performersTag.singleNumber}
                  tagName={performersTag.name}
                />
                <div className={styles.formation}>
                  {formation.length > 1 ? (
                    formation.map((row, index) => (
                      <div key={index} className={styles.row}>
                        <h4 className={styles.rowIndex}>
                          <LocalizedNumber num={index + 1} type="row" />
                        </h4>
                        <div className={styles.grid}>
                          {row.map(memberName => {
                            if (memberName !== KOJIHARU) {
                              const member = members[memberName];
                              return (
                                <div className={styles.card} key={member.name}>
                                  <MemberCard
                                    nameKey={memberName}
                                    name={member.nameNotations}
                                    image={member.profileImage}
                                    isCenter={centers.includes(member.name)}
                                  />
                                </div>
                              );
                            } else {
                              return (
                                <div className={styles.card} key={memberName}>
                                  <KojiharuCard
                                    isCenter={centers.includes(memberName)}
                                  />
                                </div>
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
                          const member = members[memberName];
                          return (
                            <div className={styles.card} key={member.name}>
                              <MemberCard
                                nameKey={member.name}
                                name={member.nameNotations}
                                image={member.profileImage}
                                isCenter={centers.includes(memberName)}
                              />
                            </div>
                          );
                        } else {
                          return (
                            <div className={styles.card} key={memberName}>
                              <KojiharuCard
                                isCenter={centers.includes(memberName)}
                              />
                            </div>
                          );
                        }
                      })}
                    </div>
                  )}
                </div>
              </section>
              {creators.lyrics.length +
                creators.compose.length +
                creators.arrange.length +
                creators.direct.length >
              0 ? (
                <section className={styles.section}>
                  <h2
                    className={
                      styles.subheading + " " + styles.creatorsContainer
                    }
                  >
                    <Message text="creators" />
                  </h2>
                  <div className={styles.creators}>
                    {creators.lyrics.length > 0 ? (
                      <div className={styles.creatorsItem}>
                        <span className={styles.creatorWork}>
                          <Message text="lyrics" />
                        </span>
                        <span className={styles.creatorNames}>
                          <LocalizedList list={creators.lyrics} />
                        </span>
                      </div>
                    ) : null}
                    {creators.compose.length > 0 ? (
                      <div className={styles.creatorsItem}>
                        <span className={styles.creatorWork}>
                          <Message text="compose" />
                        </span>
                        <span className={styles.creatorNames}>
                          <LocalizedList list={creators.compose} />
                        </span>
                      </div>
                    ) : null}
                    {creators.arrange.length > 0 ? (
                      <div className={styles.creatorsItem}>
                        <span className={styles.creatorWork}>
                          <Message text="arrange" />
                        </span>
                        <span className={styles.creatorNames}>
                          <LocalizedList list={creators.arrange} />
                        </span>
                      </div>
                    ) : null}
                    {creators.direct.length > 0 ? (
                      <div className={styles.creatorsItem}>
                        <span className={styles.creatorWork}>
                          <Message text="direct" />
                        </span>
                        <span className={styles.creatorNames}>
                          <LocalizedList list={creators.direct} />
                        </span>
                      </div>
                    ) : null}
                  </div>
                </section>
              ) : null}
            </motion.div>
          </motion.div>
        </motion.div>
      </PageContentLayout>
    </div>
  );
};
