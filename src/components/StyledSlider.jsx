import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const StyledSlider = ({ minValue, maxValue, value, setValue }) => {
    return (
        <div className="slider">
            <div>
                <Slider
                    min={minValue}
                    max={maxValue}
                    value={value}
                    tooltip={false}
                    onChange={setValue}
                    railStyle={{
                        height: 12
                    }}
                    handleStyle={{
                        height: 20,
                        width: 20,
                        marginLeft: -10,
                        marginTop: -5,
                        backgroundColor: "var(--slider)",
                        border: 0
                    }}
                    trackStyle={{
                        background: "var(--slider)",
                        height: 12
                    }}
                />
            </div>
        </div>
    );
};

export default StyledSlider;
