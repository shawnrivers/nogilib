import * as React from "react";
import styles from "./member.module.scss";
import { Layout } from "components/atoms/Layout";
import { motion } from "framer-motion";
import { ArrowBackIcon } from "components/atoms/icons/ArrowBackIcon";
import { graphql } from "gatsby";
import { useScrollRestoration } from "utils/hooks";
import { FormattedMessage, FormattedDate } from "react-intl";
import { LocalizedList } from "components/atoms/locales/LocalizedList";
import { PositionBadge } from "components/atoms/PositionBadge";
import {
  PositionType,
  GLOW_STICK_COLORS,
  GlowStickColorType,
} from "utils/constants";
import { PositionCounter } from "components/atoms/PositionCounter";
import LazyLoad from "react-lazyload";

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

interface MemberProps {
  data: {
    membersJson: {
      name: string;
      nameNotations: {
        firstName: string;
        firstNameEn: string;
        firstNameFurigana: string;
        lastName: string;
        lastNameEn: string;
        lastNameFurigana: string;
      };
      sites: {
        title: string;
        url: string;
      }[];
      join: string;
      graduation: {
        isGraduated: boolean;
      };
      birthday: string;
      height: number;
      bloodType: string;
      origin: string;
      units: {
        name: string;
        type: string;
      }[];
      glowStickColor: {
        left: GlowStickColorType;
        right: GlowStickColorType;
      };
      profileImage: {
        large: string;
        small: string;
      };
      photoAlbums: {
        title: string;
      }[];
      positionsHistory: {
        position: PositionType;
        singleNumber: string;
      }[];
      positionsCounter: {
        center: number;
        fukujin: number;
        selected: number;
        under: number;
      };
      singleImages: {
        large: string;
        small: string;
      }[];
    };
  };
}

const Member = ({ data }: MemberProps) => {
  useScrollRestoration();

  if (data) {
    const member = data.membersJson;

    const { units, corps } = React.useMemo(() => {
      let units: string[] = [];
      let corps: string[] = [];

      for (const unit of member.units) {
        if (unit.type === "unit") {
          units.push(unit.name);
        } else {
          corps.push(unit.name);
        }
      }

      return {
        units,
        corps,
      };
    }, [member.units]);

    const positionsHistory = React.useMemo(
      () =>
        member.positionsHistory.filter(history => history.position !== "none"),
      [member.positionsHistory]
    );

    const willShowPositionCounter = React.useMemo(
      () =>
        member.positionsCounter.center +
          member.positionsCounter.fukujin +
          member.positionsCounter.selected +
          member.positionsCounter.under >
        0,
      [member.positionsCounter]
    );

    const gallery = React.useMemo(() => {
      const list = member.singleImages
        .reverse()
        .filter(image => image.large !== "");

      let uniqueList = [];

      for (const item of list) {
        let isSeen = false;

        for (const seenItem of uniqueList) {
          if (seenItem.large === item.large) {
            isSeen = true;
            break;
          }
        }

        if (!isSeen) {
          uniqueList.push(item);
        }
      }

      return uniqueList;
    }, [member.singleImages]);

    return (
      <Layout>
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
        <div>
          <motion.div variants={containerVariants} className={styles.container}>
            <motion.div variants={headingVariants} className={styles.heading}>
              <h1 className={styles.title}>
                {member.nameNotations.lastName +
                  " " +
                  member.nameNotations.firstName}
              </h1>
              <h4 className={styles.tags}>
                <span>
                  {member.nameNotations.lastNameEn +
                    " " +
                    member.nameNotations.firstNameEn}
                </span>
                <span>|</span>
                <span>
                  {member.nameNotations.lastNameFurigana +
                    " " +
                    member.nameNotations.firstNameFurigana}
                </span>
              </h4>
            </motion.div>
            <motion.div
              variants={contentContainerVariants}
              className={styles.flexbox}
            >
              <motion.div
                variants={contentVariants}
                className={styles.profileimage}
              >
                <img
                  src={member.profileImage.small}
                  srcSet={`${member.profileImage.large} 2x`}
                  alt={member.name}
                />
                <div className={styles.stickcolors}>
                  <span
                    style={{
                      backgroundColor:
                        member.glowStickColor.left !== GlowStickColorType.None
                          ? GLOW_STICK_COLORS[member.glowStickColor.left]
                          : "#ffffff",
                    }}
                    className={styles.stick}
                  />
                  <span
                    style={{
                      backgroundColor:
                        member.glowStickColor.right !== GlowStickColorType.None
                          ? GLOW_STICK_COLORS[member.glowStickColor.right]
                          : "#ffffff",
                    }}
                    className={styles.stick}
                  />
                </div>
              </motion.div>
              <motion.div variants={contentVariants} className={styles.content}>
                {member.sites.length > 0 ? (
                  <section className={styles.section}>
                    <h2 className={styles.subheading}>
                      <FormattedMessage {...({ id: "websites" } as any)} />
                    </h2>
                    <div className={styles.body + " " + styles.websites}>
                      {member.sites.map(site => (
                        <motion.a
                          key={site.title}
                          href={site.url}
                          target="_blank"
                          rel="noopener"
                        >
                          <FormattedMessage {...({ id: site.title } as any)} />
                        </motion.a>
                      ))}
                    </div>
                  </section>
                ) : null}
                <section className={styles.section + " " + styles.profile}>
                  <h2
                    className={styles.subheading + " " + styles.infocontainer}
                  >
                    <FormattedMessage {...({ id: "profile" } as any)} />
                  </h2>
                  <div className={styles.info}>
                    <div className={styles.infoitem}>
                      <span className={styles.infotitle}>
                        <FormattedMessage {...({ id: "join" } as any)} />
                      </span>
                      <span className={styles.infocontent}>
                        <FormattedMessage
                          {...({ id: "join: " + member.join } as any)}
                        />{" "}
                        {member.graduation.isGraduated ? (
                          <span>
                            (
                            <FormattedMessage
                              {...({ id: "graduate" } as any)}
                            />
                            )
                          </span>
                        ) : null}
                      </span>
                    </div>
                    <div className={styles.infoitem}>
                      <span className={styles.infotitle}>
                        <FormattedMessage {...({ id: "birthday" } as any)} />
                      </span>
                      <span className={styles.infocontent}>
                        <FormattedDate
                          value={member.birthday}
                          year="numeric"
                          month="short"
                          day="numeric"
                        />
                      </span>
                    </div>
                    <div className={styles.infoitem}>
                      <span className={styles.infotitle}>
                        <FormattedMessage {...({ id: "height" } as any)} />
                      </span>
                      <span
                        className={styles.infocontent + " " + styles.height}
                      >
                        {member.height} cm
                      </span>
                    </div>
                    <div className={styles.infoitem}>
                      <span className={styles.infotitle}>
                        <FormattedMessage {...({ id: "blood type" } as any)} />
                      </span>
                      <span className={styles.infocontent}>
                        <FormattedMessage
                          {...({ id: member.bloodType } as any)}
                        />
                      </span>
                    </div>
                    <div className={styles.infoitem}>
                      <span className={styles.infotitle}>
                        <FormattedMessage {...({ id: "birthplace" } as any)} />
                      </span>
                      <span className={styles.infocontent}>
                        <FormattedMessage {...({ id: member.origin } as any)} />
                      </span>
                    </div>
                    {units.length > 0 ? (
                      <div className={styles.infoitem}>
                        <span className={styles.infotitle}>
                          <FormattedMessage {...({ id: "units" } as any)} />
                        </span>
                        <span className={styles.infocontent}>
                          <LocalizedList list={units} />
                        </span>
                      </div>
                    ) : null}
                    {corps.length > 0 ? (
                      <div className={styles.infoitem}>
                        <span className={styles.infotitle}>
                          <FormattedMessage {...({ id: "corps" } as any)} />
                        </span>
                        <span className={styles.infocontent}>
                          <LocalizedList list={corps} />
                        </span>
                      </div>
                    ) : null}
                  </div>
                </section>
                {member.photoAlbums.length > 0 ? (
                  <section className={styles.section}>
                    <h2
                      className={styles.subheading + " " + styles.infocontainer}
                    >
                      <FormattedMessage {...({ id: "photo albums" } as any)} />
                    </h2>
                    <ol className={styles.photoalbums}>
                      {member.photoAlbums.map((photoAlbum, index) => (
                        <li key={photoAlbum.title}>
                          <span>{index + 1}.</span>
                          <span>{photoAlbum.title}</span>
                        </li>
                      ))}
                    </ol>
                  </section>
                ) : null}
                {positionsHistory.length > 0 ? (
                  <section className={styles.section}>
                    <h2 className={styles.subheading}>
                      <FormattedMessage
                        {...({ id: "position history" } as any)}
                      />
                    </h2>
                    <div className={styles.history}>
                      {positionsHistory.map(position => (
                        <div
                          key={position.singleNumber}
                          className={styles.positionrecord}
                        >
                          <span className={styles.positionnumber}>
                            {position.singleNumber}
                          </span>
                          <PositionBadge position={position.position} />
                        </div>
                      ))}
                    </div>
                  </section>
                ) : null}
                {willShowPositionCounter ? (
                  <section className={styles.section}>
                    <h2 className={styles.subheading}>
                      <FormattedMessage
                        {...({ id: "position counter" } as any)}
                      />
                    </h2>
                    <div className={styles.counter}>
                      <div className={styles.indicators}>
                        <div className={styles.indicator}>
                          <PositionBadge position={PositionType.Center} />
                          <span className={styles.indicatorcaption}>
                            <FormattedMessage {...({ id: "center" } as any)} />
                          </span>
                        </div>
                        <div className={styles.indicator}>
                          <PositionBadge position={PositionType.Fukujin} />
                          <span className={styles.indicatorcaption}>
                            <FormattedMessage {...({ id: "fukujin" } as any)} />
                          </span>
                        </div>
                        <div className={styles.indicator}>
                          <PositionBadge position={PositionType.Selected} />
                          <span className={styles.indicatorcaption}>
                            <FormattedMessage
                              {...({ id: "selected" } as any)}
                            />
                          </span>
                        </div>
                        <div className={styles.indicator}>
                          <PositionBadge position={PositionType.Under} />
                          <span className={styles.indicatorcaption}>
                            <FormattedMessage {...({ id: "under" } as any)} />
                          </span>
                        </div>
                      </div>
                      <PositionCounter {...member.positionsCounter} />
                    </div>
                  </section>
                ) : null}
                {gallery.length > 0 ? (
                  <section className={styles.section}>
                    <h2 className={styles.subheading}>
                      <FormattedMessage {...({ id: "gallery" } as any)} />
                    </h2>
                    <div className={styles.gallery}>
                      {gallery.map((profileImage, index) => (
                        <div
                          className={styles.galleryimagecontainer}
                          key={index}
                        >
                          <LazyLoad offset={100}>
                            <img
                              src={profileImage.small}
                              srcSet={profileImage.large + " 2x"}
                              alt={member.name}
                              className={styles.galleryimage}
                            />
                          </LazyLoad>
                        </div>
                      ))}
                    </div>
                  </section>
                ) : null}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return null;
};

export const query = graphql`
  query($name: String!) {
    membersJson(name: { eq: $name }) {
      name
      nameNotations {
        firstName
        firstNameEn
        firstNameFurigana
        lastName
        lastNameEn
        lastNameFurigana
      }
      sites {
        title
        url
      }
      join
      graduation {
        isGraduated
      }
      birthday
      height
      bloodType
      origin
      units {
        name
        type
      }
      glowStickColor {
        left
        right
      }
      profileImage {
        large
        small
      }
      photoAlbums {
        title
      }
      positionsHistory {
        position
        singleNumber
      }
      positionsCounter {
        center
        fukujin
        selected
        under
      }
      singleImages {
        large
        small
      }
    }
  }
`;

export default Member;
