
// 1 st step = api karana action aniwaren function ekak wenne one eka
import {FETCH_BUTTON_CLICKED} from "./types";

export const fetchPost=()=>{
    return{

        // 2 nd step = api karana action eka gana podi description ekak type eke danne
        type:FETCH_BUTTON_CLICKED,

        // 3 rd ekata adala mokk hari data ekak thiynawa nam eka yawanne payload eken
        payload:[
            {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
            {
                "userId": 1,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
            },
            {
                "userId": 1,
                "id": 3,
                "title": "fugiat veniam minus",
                "completed": false
            },
            {
                "userId": 1,
                "id": 4,
                "title": "et porro tempora",
                "completed": true
            },
            {
                "userId": 1,
                "id": 5,
                "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                "completed": false
            }]


    }
}