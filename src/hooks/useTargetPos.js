import { useState, useRef } from "react";
import useWindowDimensions from './useWindowDimensions'
import useMousePosition from './useMousePosition';

const offsetRatio = -100;
const diifRatioGroup = 200;
const ACT_RESOLUTION = 10;

const useTargetPos = () => {
    // const [targetPos1, setTargetPos1] = useState({ x: 100, y: 100 });
    // const [targetPos2, setTargetPos2] = useState({ x: 0, y: 0 });

    const { height, width } = useWindowDimensions();
    const { mousePosition } = useMousePosition();
    const targetPos1 = useRef({ x: 100, y: 100 });
    const targetPos2 = useRef({ x: 0, y: 0 });

    // let targetPos1 = { x: 100, y: 100 };
    // let targetPos2 = { x: 0, y: 0 };
    if (mousePosition.x && Math.round(mousePosition.x) % ACT_RESOLUTION === 0) {
        targetPos1.current = {
            x: -(mousePosition.x - width / 2) + width / offsetRatio,
            y: -(mousePosition.y - height / 2) + height / offsetRatio
        };
    }
    if (mousePosition.x && Math.round(mousePosition.x + 5) % ACT_RESOLUTION === 0) {
        targetPos2.current = {
            x: -(mousePosition.x - width / 2) + width / diifRatioGroup + width / offsetRatio,
            y: -(mousePosition.y - height / 2) + height / diifRatioGroup + height / offsetRatio
        };
    }

    return { targetPos1: targetPos1.current, targetPos2: targetPos2.current };
};

export default useTargetPos;