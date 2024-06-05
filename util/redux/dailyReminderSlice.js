import { createSlice } from "@reduxjs/toolkit";

export const dailyReminderSlice = createSlice({
    name: 'dailyReminder',
    initialState: {
        reminders: [
            {id: 1, title: 'Breakfast', image: require('../../assets/icons/breakfast.png')},
            {id: 2, title: 'Clean Room', image: require('../../assets/icons/bed.png')},
            {id: 3, title: 'Exercise', image: require('../../assets/icons/exercise.png')},
            {id: 4, title: 'Music', image: require('../../assets/icons/guitar.png')},
            {id: 5, title: 'Jog', image: require('../../assets/icons/jogging.png')},
            {id: 6, title: 'Meditate', image: require('../../assets/icons/meditation.png')},
            {id: 7, title: 'Drink Milk', image: require('../../assets/icons/milk-bottle.png')},
            {id: 8, title: 'Read', image: require('../../assets/icons/open-book.png')},
            {id: 9, title: 'Shower', image: require('../../assets/icons/shower.png')},
            {id: 10, title: 'Rest', image: require('../../assets/icons/sleeping.png')},
            {id: 11, title: 'Sleep', image: require('../../assets/icons/slumber.png')},
            {id: 12, title: 'Walk', image: require('../../assets/icons/walk.png')},
            {id: 13, title: 'Write', image: require('../../assets/icons/writing.png')},
        ],
        dailyReminders: [],
    },
    reducers: {
        addToDailyReminder: (state, actions) => {
            state.dailyReminders = actions.payload;
        },
        removeFromDailyReminder: (state, actions) => {
            state.dailyReminders = actions.payload;
        }
    }
});

export const { addToDailyReminder, removeFromDailyReminder } = dailyReminderSlice.actions;
export default dailyReminderSlice.reducer;