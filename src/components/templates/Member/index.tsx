import * as React from "react";
import styles from "./member.module.scss";
import { Layout } from "components/atoms/Layout";
import { motion } from "framer-motion";
import { ArrowBackIcon } from "components/atoms/icons/ArrowBackIcon";
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
  name: string;
  names: {
    ja: string;
    en: string;
    furigana: string;
  };
  profileImage: {
    large: string;
    small: string;
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
  units: string[];
  corps: string[];
  glowStickColor: {
    left: GlowStickColorType;
    right: GlowStickColorType;
  };
  photoAlbums: {
    title: string;
  }[];
  positionsHistory: {
    position: PositionType;
    singleNumber: string;
  }[];
  shouldShowPositionCounter: boolean;
  positionsCounter: {
    center: number;
    fukujin: number;
    selected: number;
    under: number;
  };
  gallery: {
    large: string;
    small: string;
  }[];
}

export const Member = ({
  name,
  names,
  profileImage,
  glowStickColor,
  sites,
  join,
  graduation,
  birthday,
  height,
  bloodType,
  origin,
  units,
  corps,
  photoAlbums,
  shouldShowPositionCounter,
  positionsHistory,
  positionsCounter,
  gallery,
}: MemberProps) => {
  useScrollRestoration();

  return (
    <div className={styles.background}>
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
              <h1 className={styles.title}>{names.ja}</h1>
              <h4 className={styles.tags}>
                <span>{names.en}</span>
                <span>|</span>
                <span>{names.furigana}</span>
              </h4>
            </motion.div>
            <motion.div
              variants={contentContainerVariants}
              className={styles.flexBox}
            >
              <motion.div
                variants={contentVariants}
                className={styles.profileImage}
              >
                <img
                  src={profileImage.small}
                  srcSet={`${profileImage.large} 2x`}
                  alt={name}
                />
                <div className={styles.stickColors}>
                  <span
                    style={{
                      backgroundColor:
                        glowStickColor.left !== GlowStickColorType.None
                          ? GLOW_STICK_COLORS[glowStickColor.left]
                          : "#ffffff",
                    }}
                    className={styles.stick}
                  />
                  <span
                    style={{
                      backgroundColor:
                        glowStickColor.right !== GlowStickColorType.None
                          ? GLOW_STICK_COLORS[glowStickColor.right]
                          : "#ffffff",
                    }}
                    className={styles.stick}
                  />
                </div>
              </motion.div>
              <motion.div variants={contentVariants} className={styles.content}>
                {sites.length > 0 ? (
                  <section className={styles.section}>
                    <h2 className={styles.subheading}>
                      <FormattedMessage {...({ id: "websites" } as any)} />
                    </h2>
                    <div className={styles.websites}>
                      {sites.map(site => (
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
                    className={styles.subheading + " " + styles.infoContainer}
                  >
                    <FormattedMessage {...({ id: "profile" } as any)} />
                  </h2>
                  <div className={styles.info}>
                    <div className={styles.infoItem}>
                      <span className={styles.infoTitle}>
                        <FormattedMessage {...({ id: "join" } as any)} />
                      </span>
                      <span className={styles.infoContent}>
                        <FormattedMessage
                          {...({ id: "join: " + join } as any)}
                        />{" "}
                        {graduation.isGraduated ? (
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
                    <div className={styles.infoItem}>
                      <span className={styles.infoTitle}>
                        <FormattedMessage {...({ id: "birthday" } as any)} />
                      </span>
                      <span className={styles.infoContent}>
                        <FormattedDate
                          value={birthday}
                          year="numeric"
                          month="short"
                          day="numeric"
                        />
                      </span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoTitle}>
                        <FormattedMessage {...({ id: "height" } as any)} />
                      </span>
                      <span
                        className={styles.infoContent + " " + styles.height}
                      >
                        {height} cm
                      </span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoTitle}>
                        <FormattedMessage {...({ id: "blood type" } as any)} />
                      </span>
                      <span className={styles.infoContent}>
                        <FormattedMessage {...({ id: bloodType } as any)} />
                      </span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoTitle}>
                        <FormattedMessage {...({ id: "birthplace" } as any)} />
                      </span>
                      <span className={styles.infoContent}>
                        <FormattedMessage {...({ id: origin } as any)} />
                      </span>
                    </div>
                    {units.length > 0 ? (
                      <div className={styles.infoItem}>
                        <span className={styles.infoTitle}>
                          <FormattedMessage {...({ id: "units" } as any)} />
                        </span>
                        <span className={styles.infoContent}>
                          <LocalizedList list={units} />
                        </span>
                      </div>
                    ) : null}
                    {corps.length > 0 ? (
                      <div className={styles.infoItem}>
                        <span className={styles.infoTitle}>
                          <FormattedMessage {...({ id: "corps" } as any)} />
                        </span>
                        <span className={styles.infoContent}>
                          <LocalizedList list={corps} />
                        </span>
                      </div>
                    ) : null}
                  </div>
                </section>
                {photoAlbums.length > 0 ? (
                  <section className={styles.section}>
                    <h2
                      className={styles.subheading + " " + styles.infoContainer}
                    >
                      <FormattedMessage {...({ id: "photo albums" } as any)} />
                    </h2>
                    <ol className={styles.photoAlbums}>
                      {photoAlbums.map(photoAlbum => (
                        <li key={photoAlbum.title}>{photoAlbum.title}</li>
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
                          className={styles.positionRecord}
                        >
                          <span className={styles.positionNumber}>
                            {position.singleNumber}
                          </span>
                          <PositionBadge position={position.position} />
                        </div>
                      ))}
                    </div>
                  </section>
                ) : null}
                {shouldShowPositionCounter ? (
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
                          <span className={styles.indicatorCaption}>
                            <FormattedMessage {...({ id: "center" } as any)} />
                          </span>
                        </div>
                        <div className={styles.indicator}>
                          <PositionBadge position={PositionType.Fukujin} />
                          <span className={styles.indicatorCaption}>
                            <FormattedMessage {...({ id: "fukujin" } as any)} />
                          </span>
                        </div>
                        <div className={styles.indicator}>
                          <PositionBadge position={PositionType.Selected} />
                          <span className={styles.indicatorCaption}>
                            <FormattedMessage
                              {...({ id: "selected" } as any)}
                            />
                          </span>
                        </div>
                        <div className={styles.indicator}>
                          <PositionBadge position={PositionType.Under} />
                          <span className={styles.indicatorCaption}>
                            <FormattedMessage {...({ id: "under" } as any)} />
                          </span>
                        </div>
                      </div>
                      <PositionCounter {...positionsCounter} />
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
                          className={styles.galleryImageContainer}
                          key={index}
                        >
                          <div className={styles.wrapper}>
                            <LazyLoad offset={100}>
                              <img
                                src={profileImage.small}
                                srcSet={profileImage.large + " 2x"}
                                alt={name}
                                className={styles.galleryImage}
                              />
                            </LazyLoad>
                          </div>
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
    </div>
  );
};
