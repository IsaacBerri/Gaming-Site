import React from "react";
import { Icon } from "@iconify/react";

const BarInfo = () => {
  return (
    <div className="BarInfo">
      <section>
        <Icon
          icon="mdi:microsoft-xbox-controller"
          color="#01D457"
          width="60"
          height="60"
        />
        <h2>Games</h2>
      </section>
      <section>
        <Icon
          icon="material-symbols:supervised-user-circle"
          color="#01D457"
          width="60"
          height="60"
        />
        <h2>Community</h2>
      </section>
      <section>
        <Icon
         icon="mdi:downloads"
         color="#01D457"
         width="60"
         height="60"
       />
       <h2>Downloads</h2>
      </section>
    </div>
  );
};

export default BarInfo;
