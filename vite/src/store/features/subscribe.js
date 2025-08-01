import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    modalShow: false
}

const subscribe = createSlice({
    name: 'subscribe',
    initialState,
    reducers: {
        showModal(state, action) {
            state.modalShow = true;
        }
    },
    selectors: {
        selectModalShown: state => state.ModalShown
    }
})

export const { showModal } = subscribe.actions;
export const { selectModalShow } = subscribe.selectors;

export default subscribe.reducer;