import { handleActions } from 'redux-actions';
import { GETHEALTH_DATA, UPHEALTH_DATA } from '../types/counter';
let initState = {
    obj: {},
    count: 0
}
export default handleActions({
    [GETHEALTH_DATA](state, action) {
        let { id, data } = action.payload;
        if (!state.obj[id]) {
            state.obj[id] = [...data];
        }
        return state;
    },
    [UPHEALTH_DATA](state, action) {
        let { id, index } = action.payload;
        state.obj[id].map((item, idx) => {
            if (index === idx) {
                item.flag = !item.flag;
            }
            return item;
        })
        let count = 0;
        Object.values(state.obj).map((item) => {
            item.map(itm => {
                if (itm.flag) {
                    count++;
                }
            })
        })
        state.count = count;
        return state;
    }
}, initState)