import React from "react";
import { LdsEllipsisStyle } from './styles';

const LdsEllipsisLoading = ({ m, left, w, h }) => {
  return (
    <LdsEllipsisStyle
      w={w}
      left={left}
      h={h}
      m={m}
      class="lds-ellipsis"
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LdsEllipsisStyle>
  );
};

export default LdsEllipsisLoading;
