import { observable, action, computed, makeObservable, runInAction } from 'mobx';

class MeetingStore {
    meetingList = [];

    constructor() {
        makeObservable(this, {
            meetingList: observable,
            addMeeting: action,
            getMeetingList: computed,
        });

        this.fetchMeeting();
    }

    addMeeting(appointment) {
        fetch('http://localhost:8787/appointment', {
            method: 'POST',
            body: JSON.stringify(appointment),
            headers: {
                "Content-Type": "application/json",
              },
        }).then((res) => {
            console.log(res);
             this.meetingList.push(appointment);
        }).catch((error) => {
            console.log(error);
        });
    }

    fetchMeeting = async () => {
        try {
            console.log("fetchMeeting");
            const response = await fetch("http://localhost:8787/appointments", {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error('Failed to fetch Meeting');
            }

            const data = await response.json();
            runInAction(() => {
                this.meetingList = data;
            });
        } catch (error) {
            console.error('Error fetching Meeting:', error);
        }
    }

    get getMeetingList() {
        return this.meetingList;
    }
}

export default new MeetingStore();