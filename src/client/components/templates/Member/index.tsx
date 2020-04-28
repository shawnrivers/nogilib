import { motion } from "framer-motion";
import * as React from "react";
import { FormattedDate } from "react-intl";
import styles from "./member.module.scss";
import { ArrowBackIcon } from "client/components/atoms/icons/ArrowBackIcon";
import { Image } from "client/components/atoms/Image";
import { LocalizedList } from "client/components/atoms/locales/LocalizedList";
import { Message } from "client/components/atoms/Message";
import { PageContentLayout } from "client/components/atoms/PageContentLayout";
import { PositionBadge } from "client/components/atoms/PositionBadge";
import { PositionCounter } from "client/components/atoms/PositionCounter";
import {
  GlowStickColorType,
  GLOW_STICK_COLORS,
  PositionType,
} from "client/utils/constants";
import { useScrollRestoration } from "client/utils/hooks";
import { classNames } from "client/utils/strings";

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
  profileImage: string;
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
  gallery: string[];
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
                className={styles.profileImageContainer}
              >
                <div className={styles.profileImageWrapper}>
                  <Image src={profileImage} alt={name} />
                </div>
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
                      <Message text="websites" />
                    </h2>
                    <div className={styles.websites}>
                      {sites.map(site => (
                        <motion.a
                          key={site.title}
                          href={site.url}
                          target="_blank"
                          rel="noopener"
                        >
                          <Message text={site.title} />
                        </motion.a>
                      ))}
                    </div>
                  </section>
                ) : null}
                <section className={styles.section + " " + styles.profile}>
                  <h2
                    className={styles.subheading + " " + styles.infoContainer}
                  >
                    <Message text="profile" />
                  </h2>
                  <div className={styles.info}>
                    <div className={styles.infoItem}>
                      <span className={styles.infoTitle}>
                        <Message text="join" />
                      </span>
                      <span className={styles.infoContent}>
                        <Message text={"join: " + join} />{" "}
                        {graduation.isGraduated ? (
                          <span>
                            (
                            <Message text="graduate" />)
                          </span>
                        ) : null}
                      </span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoTitle}>
                        <Message text="birthday" />
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
                        <Message text="height" />
                      </span>
                      <span
                        className={styles.infoContent + " " + styles.height}
                      >
                        {height} cm
                      </span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoTitle}>
                        <Message text="blood type" />
                      </span>
                      <span
                        className={classNames(
                          styles.infoContent,
                          styles.bloodType
                        )}
                      >
                        <Message text={bloodType} />
                      </span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoTitle}>
                        <Message text="birthplace" />
                      </span>
                      <span className={styles.infoContent}>
                        <Message text={origin} />
                      </span>
                    </div>
                    {units.length > 0 ? (
                      <div className={styles.infoItem}>
                        <span className={styles.infoTitle}>
                          <Message text="units" />
                        </span>
                        <span className={styles.infoContent}>
                          <LocalizedList list={units} />
                        </span>
                      </div>
                    ) : null}
                    {corps.length > 0 ? (
                      <div className={styles.infoItem}>
                        <span className={styles.infoTitle}>
                          <Message text="corps" />
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
                      <Message text="photo albums" />
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
                      <Message text="position history" />
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
                      <Message text="position counter" />
                    </h2>
                    <div className={styles.counter}>
                      <div className={styles.indicators}>
                        <div className={styles.indicator}>
                          <PositionBadge position={PositionType.Center} />
                          <span className={styles.indicatorCaption}>
                            <Message text="center" />
                          </span>
                        </div>
                        <div className={styles.indicator}>
                          <PositionBadge position={PositionType.Fukujin} />
                          <span className={styles.indicatorCaption}>
                            <Message text="fukujin" />
                          </span>
                        </div>
                        <div className={styles.indicator}>
                          <PositionBadge position={PositionType.Selected} />
                          <span className={styles.indicatorCaption}>
                            <Message text="selected" />
                          </span>
                        </div>
                        <div className={styles.indicator}>
                          <PositionBadge position={PositionType.Under} />
                          <span className={styles.indicatorCaption}>
                            <Message text="under" />
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
                      <Message text="gallery" />
                    </h2>
                    <div className={styles.gallery}>
                      {gallery.map((profileImage, index) => (
                        <div
                          className={styles.galleryImageContainer}
                          key={index}
                        >
                          <div className={styles.wrapper}>
                            <Image
                              src={profileImage}
                              alt={name}
                              className={styles.galleryImage}
                            />
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
      </PageContentLayout>
    </div>
  );
};
