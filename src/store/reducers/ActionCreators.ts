import axios from "axios";
import {IUser} from "../../models/IUser";
import {createAsyncThunk} from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(usersFetching())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(usersFetchingSuccess(response.data))
//     } catch (e) {
//         dispatch(usersFetchingError((e as Error).message))
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        return response.data
    }
)