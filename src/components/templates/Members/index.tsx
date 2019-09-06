import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./members.module.scss";
import { JoinedGenerationType, MembersType } from "types/responseTypes";
import { MemberCard } from "components/atoms/MemberCard";

const listVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.04,
      duration: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const itemVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

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
  );
};
