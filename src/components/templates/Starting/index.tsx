import * as React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import styles from "./starting.module.scss";
import { Layout } from "components/atoms/Layout";
import { Links } from "utils/constants";
import { Message } from "components/atoms/Message";
import { LocalizedLink } from "components/atoms/locales/LocalizedLink";
import { getUrlWithTrailingSlash, classNames } from "utils/strings";
import favicon128 from "assets/images/favicon-128.png";
import favicon256 from "assets/images/favicon-256.png";
import favicon512 from "assets/images/favicon-512.png";
import cdListPcLarge from "assets/images/screenshots/cd_list-pc-large.jpg";
import cdListSpLarge from "assets/images/screenshots/cd_list-sp-large.jpg";
import cdListSpSmall from "assets/images/screenshots/cd_list-sp-small.jpg";
import cdPcLarge from "assets/images/screenshots/cd-pc-large.jpg";
import cdSpLarge from "assets/images/screenshots/cd-sp-large.jpg";
import cdSpSmall from "assets/images/screenshots/cd-sp-small.jpg";
import songPcLarge from "assets/images/screenshots/song-pc-large.jpg";
import songSpLarge from "assets/images/screenshots/song-sp-large.jpg";
import songSpSmall from "assets/images/screenshots/song-sp-small.jpg";
import memberListPcLarge from "assets/images/screenshots/member_list-pc-large.jpg";
import memberListSpLarge from "assets/images/screenshots/member_list-sp-large.jpg";
import memberListSpSmall from "assets/images/screenshots/member_list-sp-small.jpg";
import memberPcLarge from "assets/images/screenshots/member-pc-large.jpg";
import memberSpLarge from "assets/images/screenshots/member-sp-large.jpg";
import memberSpSmall from "assets/images/screenshots/member-sp-small.jpg";
import searchPcLarge from "assets/images/screenshots/search-pc-large.jpg";
import searchSpLarge from "assets/images/screenshots/search-sp-large.jpg";
import searchSpSmall from "assets/images/screenshots/search-sp-small.jpg";
import { LazyImage } from "components/atoms/LazyImage";

export const Starting = () => {
  return (
    <article className={styles.container}>
      <Layout>
        <div className={styles.titleSection}>
          <img
            src={favicon128}
            srcSet={`${favicon256} 2x`}
            alt="Nogizaka Lib"
            className={styles.faviconSmall}
          />
          <section className={styles.titleText}>
            <h1 className={styles.title}>NOGIZAKA LIB</h1>
            <p className={styles.text}>
              <Message text="This is a web application aiming at showing the information about Nogizaka46 in a user-friendly way." />
            </p>
            <LocalizedLink to={Links.Singles}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={styles.appLink}
              >
                <Message text="go to app" />
              </motion.div>
            </LocalizedLink>
          </section>
          <div className={styles.faviconLarge}>
            <img
              src={favicon256}
              srcSet={`${favicon512} 2x`}
              alt="Nogizaka Lib"
            />
          </div>
        </div>
      </Layout>
      <section className={styles.languagesSection}>
        <Layout>
          <h2 className={styles.subtitle}>
            <Message text="supported languages" />
          </h2>
          <p className={classNames(styles.languages, styles.text)}>
            <Link to={getUrlWithTrailingSlash("/en")}>
              <motion.span
                whileHover={{
                  backgroundColor: "#e887a3",
                  color: "#ffffff",
                  borderBottomColor: "#ffffff",
                }}
                className={styles.textLink}
              >
                ENGLISH
              </motion.span>
            </Link>
            <Link to={getUrlWithTrailingSlash("/")}>
              <motion.span
                whileHover={{
                  backgroundColor: "#e887a3",
                  color: "#ffffff",
                }}
                className={styles.textLink}
              >
                日本語
              </motion.span>
            </Link>
            <Link to={getUrlWithTrailingSlash("/zh")}>
              <motion.span
                whileHover={{
                  backgroundColor: "#e887a3",
                  color: "#ffffff",
                  borderBottomColor: "#ffffff",
                }}
                className={styles.textLink}
              >
                简体中文
              </motion.span>
            </Link>
          </p>
        </Layout>
      </section>
      <section className={styles.cdsSection}>
        <Layout>
          <LocalizedLink to={Links.Singles}>
            <motion.h2
              whileHover={{
                backgroundColor: "#595959",
                color: "#ffffff",
              }}
              className={classNames(styles.subtitle, styles.subtitleLink)}
            >
              <Message text="Feature - Music" />
            </motion.h2>
          </LocalizedLink>
        </Layout>
        <div className={styles.cdsSectionContainer}>
          <Layout>
            <div className={styles.sectionItems}>
              <div className={styles.sectionItem}>
                <LazyImage
                  src={cdListPcLarge}
                  alt="CD List"
                  className={styles.cdsScreenshotLarge}
                />
                <LazyImage
                  src={cdListSpSmall}
                  srcSet={`${cdListSpLarge} 2x`}
                  alt="CD List"
                  className={styles.cdsScreenshotSmall}
                />
                <section className={styles.sectionItemText}>
                  <h3>
                    <Message text="CD List" />
                  </h3>
                  <p>
                    <Message text="CD List page shows released a grid of CD cards (singles and albums)." />
                  </p>
                  <p>
                    <Message text="By tapping/clicking on any CD card, it will navigate to the corresponding CD page." />
                  </p>
                </section>
              </div>
              <div className={styles.sectionItem}>
                <LazyImage
                  src={cdPcLarge}
                  alt="CD"
                  className={styles.cdsScreenshotLarge}
                />
                <LazyImage
                  src={cdSpSmall}
                  srcSet={`${cdSpLarge} 2x`}
                  alt="CD"
                  className={styles.cdsScreenshotSmall}
                />
                <section className={styles.sectionItemText}>
                  <h3>
                    <Message text="CD" />
                  </h3>
                  <p>
                    <Message text="CD Page shows detailed information about each CD." />
                  </p>
                  <p>
                    <Message text="The artwork part on the top is tappable/clickable so that you can see artworks in different types of this CD." />
                  </p>
                  <p>
                    <Message text="A list of cards of songs included in this CD will also be displayed here. By tapping/clicking on any card, it will lead you to the Song Page." />
                  </p>
                </section>
              </div>
              <div className={styles.sectionItem}>
                <LazyImage
                  src={songPcLarge}
                  alt="Song"
                  className={styles.cdsScreenshotLarge}
                />
                <LazyImage
                  src={songSpSmall}
                  srcSet={`${songSpLarge} 2x`}
                  alt="Song"
                  className={styles.cdsScreenshotSmall}
                />
                <section className={styles.sectionItemText}>
                  <h3>
                    <Message text="Song" />
                  </h3>
                  <p>
                    <Message text="Song Page shows detailed information about each song." />
                  </p>
                  <p>
                    <Message text="The artwork part shows the artwork of the song’s CD." />
                  </p>
                  <p>
                    <Message text="A list of cards of members who perform this song will be displayed here. By tapping/clicking on any card, it will lead you to the corresponding Member Page." />
                  </p>
                  <p>
                    <Message text="Below the performers is the information about creators like songwriters and MV directors." />
                  </p>
                </section>
              </div>
            </div>
          </Layout>
        </div>
      </section>
      <section className={styles.membersSection}>
        <Layout>
          <LocalizedLink to={Links.FirstGeneration}>
            <motion.h2
              whileHover={{
                backgroundColor: "#595959",
                color: "#ffffff",
              }}
              className={classNames(styles.subtitle, styles.subtitleLink)}
            >
              <Message text="Feature - Members" />
            </motion.h2>
          </LocalizedLink>
        </Layout>
        <div className={styles.membersSectionContainer}>
          <Layout>
            <div className={styles.sectionItems}>
              <div className={styles.sectionItem}>
                <LazyImage
                  src={memberListSpSmall}
                  srcSet={`${memberListSpLarge} 2x`}
                  alt="Member List"
                  className={styles.membersScreenshotSmall}
                />
                <section className={styles.sectionItemText}>
                  <h3>
                    <Message text="Member List" />
                  </h3>
                  <p>
                    <Message text="Member List Page shows a grid of member cards (1st. gen to 4th. gen, graduated)." />
                  </p>
                  <p>
                    <Message text="By tapping/clicking on any member card, it will navigate to the corresponding Member page." />
                  </p>
                </section>
                <LazyImage
                  src={memberListPcLarge}
                  alt="Member List"
                  className={styles.membersScreenshotLarge}
                />
              </div>
              <div className={styles.sectionItem}>
                <LazyImage
                  src={memberSpLarge}
                  srcSet={`${memberSpSmall} 2x`}
                  alt="Member"
                  className={styles.membersScreenshotSmall}
                />
                <section className={styles.sectionItemText}>
                  <h3>
                    <Message text="Member" />
                  </h3>
                  <p>
                    <Message text="Member page shows detailed information about each member." />
                  </p>
                  <p>
                    <Message text="The badges below the profile image show the member’s glow stick colors." />
                  </p>
                  <p>
                    <Message text="Member’s profile (e.g. name, sites / social networks, birthday, birthplace, etc.) is showed." />
                  </p>
                  <p>
                    <Message text="Position History shows the records of members positions in each single." />
                  </p>
                  <p>
                    <Message text="Position Counter shows how many times she has been in each position." />
                  </p>
                  <p>
                    <Message text="Gallery shows the member’s profile images from her first single to the latest one." />
                  </p>
                </section>
                <LazyImage
                  src={memberPcLarge}
                  alt="Member"
                  className={styles.membersScreenshotLarge}
                />
              </div>
            </div>
          </Layout>
        </div>
      </section>
      <section className={styles.searchSection}>
        <Layout>
          <LocalizedLink to={Links.Search}>
            <motion.h2
              whileHover={{
                backgroundColor: "#595959",
                color: "#ffffff",
              }}
              className={classNames(styles.subtitle, styles.subtitleLink)}
            >
              <Message text="Feature - Search" />
            </motion.h2>
          </LocalizedLink>
        </Layout>
        <div className={styles.searchSectionContainer}>
          <Layout>
            <div className={styles.sectionItems}>
              <div className={styles.sectionItem}>
                <LazyImage
                  src={searchPcLarge}
                  alt="Search"
                  className={styles.searchScreenshotLarge}
                />
                <LazyImage
                  src={searchSpSmall}
                  srcSet={`${searchSpLarge} 2x`}
                  alt="Search"
                  className={styles.searchScreenshotSmall}
                />
                <section className={styles.sectionItemTextNoBg}>
                  <h3>
                    <Message text="search" />
                  </h3>
                  <p>
                    <Message text="By typing CD/song title or member name in the top input area, you can search for CDs and members." />
                  </p>
                  <p>
                    <Message text="The search results will be displayed below the input area." />
                  </p>
                </section>
              </div>
            </div>
          </Layout>
        </div>
      </section>
      <section className={styles.copyrightSection}>
        <Layout>
          <h2 className={styles.subtitle}>
            <Message text="copyright" />
          </h2>
          <p className={styles.text}>
            © 2019{" "}
            <a
              href="https://shawnrivers.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.textLink}
            >
              <motion.span
                whileHover={{
                  backgroundColor: "#e887a3",
                  color: "#ffffff",
                }}
                className={styles.textLink}
              >
                Yuxiao He
              </motion.span>
            </a>
            . Some rights reserved.
          </p>
          <p className={styles.text}>
            Member images and CD artworks ©{" "}
            <a
              href="http://www.nogizaka46.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.span
                whileHover={{
                  backgroundColor: "#e887a3",
                  color: "#ffffff",
                }}
                className={styles.textLink}
              >
                乃木坂46LLC
              </motion.span>
            </a>
            .
          </p>
        </Layout>
      </section>
      <section className={styles.sourceCodeSection}>
        <Layout>
          <h2 className={styles.subtitle}>
            <Message text="source code" />
          </h2>
          <a
            href="https://github.com/shawnrivers/nogizaka-lib-redesign"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.textLink}
          >
            <motion.span
              whileHover={{
                backgroundColor: "#e887a3",
                color: "#ffffff",
              }}
              className={styles.textLink}
            >
              shawnrivers/nogizaka-lib-redesign
            </motion.span>
          </a>
        </Layout>
      </section>
    </article>
  );
};
