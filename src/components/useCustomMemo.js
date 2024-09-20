import { memo, useEffect, useRef } from "react";

const areEqual = (prevDeps, nextDeps) => {
    if(prevDeps === null) return false;
    if(prevDeps.length !== nextDeps.length) return false;

    for(let i=0; i<prevDeps.length; i++){
        if(prevDeps[i] !== nextDeps[i]){
            return false;
        }
    }
    return true;
}

const useCustomMemo  = (func, deps) => {
//variable or state -> cahce value
const memoizedRef = useRef(null);
//changes indeps
if(!memoizedRef.current || !areEqual(memoizedRef.current.deps,deps)){
    memoizedRef.current = {
        value: func(),
        deps,
    }
}
//cleanup logic when unmounting
useEffect(() => {
    return () => {memoizedRef.current = null};
}, []);
//return the memoised value 
return memoizedRef.current.value;
}

export default useCustomMemo;;