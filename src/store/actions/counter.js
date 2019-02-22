import { createAction } from 'redux-actions';
import { GETHEALTH_DATA, UPHEALTH_DATA } from '../types/counter';
import wepy from 'wepy';
export const gethealthdata = createAction(GETHEALTH_DATA, (id) => {
    return new Promise(resolve => {
        wepy.request({
            url: 'https://tdf.qq.com/service/jkcp/interface.php?action=getRecipeItemByCategory&id=' + id + '&page=1',
            header: {
                'content-type': 'application/json'
            }
        }).then(res => {
            let newData = res.data.map(item => {
                item.flag = false;
                return item;
            })
            resolve({
                data: newData,
                id: id
            })
        })
    })
})
export const uphealthdata = createAction(UPHEALTH_DATA, (id, index) => {
    return {
        id,
        index
    }
})