import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false,
    mailData: [],
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: state => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: state => {
      state.sendMessageIsOpen = false;
    },
    sendEmailContent: (state, action) => {
      const newMail = {id :Date.now(),
        to: action.payload.to,
        title: action.payload.subject,
        description: action.payload.message
      }
        state.mailData.push(newMail)
    },
  }
});

export const {
  selectMail,
  openSendMessage,
  closeSendMessage,
  sendEmailContent,
} = mailSlice.actions;

export const selectOpenMail = state => state.mail.selectedMail;
export const selectEmailContent = state => state.mail.mailData;

export const selectSendMessageIsOpen = state => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
