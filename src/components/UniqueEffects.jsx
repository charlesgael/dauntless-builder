import React from "react";
import PropTypes from "prop-types";
import ItemUtility from "../utility/ItemUtility";
import PropTypeUtility from "../utility/PropTypeUtility";
import BuildModel from "../models/BuildModel";

export default class UniqueEffects extends React.Component {

    render() {
        let uniqueEffects = [];

        if(this.props.item.unique_effects) {
            uniqueEffects = BuildModel.getAvailableUniqueEffectsByLevel(
                this.props.item.name, ItemUtility.itemType(this.props.item.type),
                this.props.level
            ).map(uniqueEffect =>
                <div key={uniqueEffect.name} className="item-title-wrapper">
                    <div className="item-wrapper unset-height">
                        <div className="item part-unique-effect no-cells">
                            <div className="item-data">
                                <strong>{this.props.item.name} {uniqueEffect.title || "Unique Effect"}</strong>: <br/>
                                {uniqueEffect.description}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return uniqueEffects;
    }
}

UniqueEffects.propTypes = {
    item: PropTypeUtility.item(),
    level: PropTypes.number
};
