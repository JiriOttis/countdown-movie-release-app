import moment from "moment/moment";

export const changeDateFormat = (date) => {
    return moment(new Date(date)).format("D MMMM YYYY");
};