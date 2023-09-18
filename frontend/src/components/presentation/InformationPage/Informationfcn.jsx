import React from 'react';
import "../../../styles/components/InformationPage/informationfcn.scss"
import "../../../styles/components/InformationPage/Gatefcn.scss"
import DesignfcnContainer from '../../container/InformationPage/DesignfcnContainer';
import GateFcnContainer from '../../container/InformationPage/GatefcnContainer';
import "../../../styles/components/InformationPage/informationfcn.scss"

const Informationfcn = ({selectedTag, onClickSelButton}) => {
    return (
        <div>
            <div className="informaion-container">
            <div className="navigation-cp-container">
                <div className="navigation-cp-space">
                <div className="navigation-button">
                    <button
                    className={`navigation-cp ${
                        selectedTag === "design" ? "active" : ""
                    }`}
                    onClick={() => onClickSelButton("design")}
                    >
                    학생회관
                    </button>
                    <div
                    className={`border-bottom ${
                        selectedTag === "design" ? "active" : ""
                    }`}
                    ></div>
                </div>

                <div className="navigation-button">
                    <button
                    className={`navigation-cp ${
                        selectedTag === "gate" ? "active" : ""
                    }`}
                    onClick={() => onClickSelButton("gate")}
                    >
                    도서관
                    </button>
                    <div
                    className={`border-bottom ${
                        selectedTag === "gate" ? "active" : ""
                    }`}
                    ></div>
                </div>
                </div>
            </div>
            <div className="navigation-line" />
                {selectedTag === "design" ? <DesignfcnContainer /> : <GateFcnContainer />}
            </div>
        </div>
    );
};

export default Informationfcn;