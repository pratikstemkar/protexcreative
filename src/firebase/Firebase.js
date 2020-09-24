import app from 'firebase';
import 'firebase/analytics';
import 'firebase/database';

const config = {
    apiKey: 'AIzaSyC_S5306NdoyO7UahTM_2W3lnZcQSdpaZ4',
    authDomain: 'protexcreative-6c1c8.firebaseapp.com',
    databaseURL: 'https://protexcreative-6c1c8.firebaseio.com',
    projectId: 'protexcreative-6c1c8',
    storageBucket: 'protexcreative-6c1c8.appspot.com',
    messagingSenderId: '883473139602',
    appId: '1:883473139602:web:0b8ba74a3a789fea91234b',
    measurementId: 'G-Z293K8552Q'
};

class Firebase{
    constructor() {
        app.initializeApp(config);

        // Helper
        this.serverValue = app.database.ServerValue;

        // Firebase APIs
        this.db = app.database();
        this.analytics = app.analytics();
    }

    // *** Comment API ***
    comments = (postUid) => this.db.ref(`comments/${postUid}`);
}

export default Firebase;