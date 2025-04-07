const count=0;

export default function reducer(state,action){
    const{type,payload}=action;
    switch(type){
        case "INCREMENT":
          return count+payload;
        case "DECREMENT":
            return count-1;
            case "default":
            return count;  

    }
}