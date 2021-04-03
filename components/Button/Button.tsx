import { FC } from "react"
import { Style } from "~/utils/Style"
import styles from "./Button.module.css"


type Props = {
  cb?: () => void;
}

const Button: FC<Props & Style> = ({ style, cb, children }) => (
  <button className={styles.button} style={style} onClick={cb}>{children}</button>
)

export default Button;