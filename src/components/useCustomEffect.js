import { useRef } from "react";

const useCustomEffect = (effect, deps) => {
    //first render
    const isFirstRender = useRef(true);
    const prevDeps = useRef([]);

    if(isFirstRender.current){
        isFirstRender.current = false;
        effect();
        return;
    }
    //deps changes and no deps array
    const depsChanged = deps ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current) : true;
    if(depsChanged){
        effect();
    }
    //clean up
    prevDeps.current = deps || [];
}

export default useCustomEffect;