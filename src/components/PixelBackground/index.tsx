import { motion } from "framer-motion";
import styles from "./style.module.scss";

const WIDTH_SIZE = 0.05;
const PixelBackground = (): JSX.Element => {
  const variant = {
    initial: { opacity: 0 },
    open: { opacity: 1 },
    close: { opacity: 0 },
  };

  const getBlocks = () => {
    const { innerWidth, innerHeight } = window;
    const blockSize = innerWidth * WIDTH_SIZE;
    const amountOfBlocks = Math.ceil(innerHeight / blockSize);
    return [...Array(amountOfBlocks)].map((_, i) => (
      <motion.div
        key={`${i}-block`}
        className={styles.block}
        variants={variant}
        initial="initial"
        // animate={isLoaded ? "open" ?"closed"} this needs to be open when loading bar goes to 100, otherwise it's closed
      ></motion.div>
    ));
  };
  return (
    <div className={styles.pixelBackground}>
      {[...Array(20)].map((_, i) => {
        return (
          <div key={`${i}-column`} className={styles.column}>
            {getBlocks()}
          </div>
        );
      })}
    </div>
  );
};

export default PixelBackground;
