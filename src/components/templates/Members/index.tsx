import * as React from "react";
import styles from "./members.module.scss";
import { JoinedGenerationType, MembersType } from "types/responseTypes";
import { PageTab, TabItem } from "components/molecules/PageTab";
import { MemberCard } from "components/atoms/MemberCard";
import { AnimatePresence, motion } from "framer-motion";
import { Links } from "utils/constants";

const listVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.03,
      delayChildren: 0.2,
      duration: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const itemVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

const pageTabItems: TabItem[] = [
  {
    link: Links.FirstGeneration,
    page: MembersType.FirstGeneration,
  },
  {
    link: Links.SecondGeneration,
    page: MembersType.SecondGeneration,
  },
  {
    link: Links.ThirdGeneration,
    page: MembersType.ThirdGeneration,
  },
  {
    link: Links.FourthGeneration,
    page: MembersType.FourthGeneration,
  },
  {
    link: Links.Graduated,
    page: MembersType.Graduated,
  },
];

export type MemberType = {
  name: string;
  nameNotations: {
    lastName: string;
    firstName: string;
    lastNameEn: string;
    firstNameEn: string;
  };
  join: JoinedGenerationType;
  graduation: {
    isGraduated: boolean;
  };
  profileImage: {
    large: string;
    small: string;
  };
};

interface MembersProps {
  page: MembersType;
  members: MemberType[];
}

export const Members = ({ page, members }: MembersProps) => {
  return (
    <div>
      <PageTab
        items={pageTabItems}
        selectedItem={page}
        className={styles.tabs}
      />
      <AnimatePresence>
        <motion.div
          key={page}
          exit="hidden"
          variants={listVariants}
          className={styles.grid}
        >
          {members.map(({ name, profileImage, nameNotations }) => (
            <motion.div
              key={name}
              variants={itemVariants}
              className={styles.card}
            >
              <MemberCard
                image={profileImage}
                nameKey={name}
                name={nameNotations}
                highlightBgColor="#e887a3"
                highlightTextColor="#ffffff"
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
