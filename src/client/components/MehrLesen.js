import React from 'react';

const MehrLesen = ({name}) => {

	return (
		<div className="mehrlesen">
			<span className="mehrlesen_text">{name}&nbsp;&nbsp;</span>
      <div className="mehrlesen_graph">
        <svg x="0px" y="0px" width="160px" height="6px" viewBox="0 0 160 6">
          <rect x="-0.032" y="2.5" fill="#C2AC84" width="159" height="1"/>
          <polygon fill="#C2AC84" points="154.979,6 158.682,3 154.979,0 156.392,0 160,3 156.633,6 "/>
        </svg>
      </div>
		</div>
	)
};

export default MehrLesen;