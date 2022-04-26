import React from "react";
import styles from "./CSSModule.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

// function CSSModule(props) {
//   return (
//     // 1개만 쓸 때는 className={styles.wrapper}
//     // 2개 이상의 클래스를 함께 사용할 경우 백틱을 이용한다
//     <div className={`${styles.wrapper} ${styles.inverted}`}>
//       안녕하세요. 저는 <span className="something">css module!</span>
//     </div>
//   );
// }

// classNames 라이브러리를 사용하는 경우
function CSSModule(props) {
  return (
    <div className={cx("wrapper", "inverted")}>
      안녕하세요. 저는 <span className="something">css module!</span>
    </div>
  );
}

export default CSSModule;
