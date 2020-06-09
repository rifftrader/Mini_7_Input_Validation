let vm = new Vue({
    el: "#app",

    data: {
        firstName: "",
        surname: "",
        enterEmail: "",
        confirmEmail: "",
        enterPassword: "",
        confirmPassword: "",
        complaint: "",
        firstNameFeedback: "",
        surnameFeedback: "",
        enterEmailFeedback: "",
        confirmEmailFeedback: "",
        enterPasswordFeedback: "",
        confirmPasswordFeedback: "",
    },
    methods: {
        firstNameAnalysis: function () {

            this.firstNameFeedback = this.nameValidCharacter(this.firstName) + this.nameLength(this.firstName);
        },
        surnameAnalysis: function () {

            this.surnameFeedback = this.nameValidCharacter(this.surname) + this.nameLength(this.surname);
        },
        nameLength: function (input) {

            if (input.length == 0) {
                return "Write something, damn you!";
            } else if (input.length == 1) {
                return " Surely your name has more than 1 character. Try harder.";
            } else if (input.length > 42) {
                return " I seriously doubt your name is " + input.length + " characters long.";
            } else {
                return "";
            }
        },
        nameValidCharacter: function (input) {

            return (input.match(/\W|[0-9]|_/gi) == null)
                ? ""
                : "Don't be silly: please don't use special characters or numbers.";
        },
        emailAnalysis: function () {

            return (this.enterEmail.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/gi) == this.enterEmail)
                ? this.enterEmailFeedback = ""
                : this.enterEmailFeedback = "Please enter an email whose format at least looks valid.";
        },
        compareEmail: function () {

            return this.confirmEmail.match(this.enterEmail) && (this.confirmEmail.length === this.enterEmail.length)
                ? this.confirmEmailFeedback = ""
                : this.confirmEmailFeedback = "Your email addresses don't match";
        },
        passwordAnalysis: function () {

            let passwordRegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

            if (this.enterPassword.match(passwordRegExp)) {
                this.enterPasswordFeedback = "";
            } else {
                this.enterPasswordFeedback = "Password must be between 7 and 15 characters in length and have at least one number and special character (!@#%^&*)";
            }
        },
        comparePassword: function () {

            return this.confirmPassword.match(this.enterPassword) && (this.confirmPassword.length === this.enterPassword.length)
                ? this.confirmPasswordFeedback = ""
                : this.confirmPasswordFeedback = "Your passwords do not match.";
        },
    },
    computed: {
        complaintFeedback: function () {
            return this.complaint.length > 1000
                ? "You have used " + this.complaint.length + " characters. Please delete " + (this.complaint.length - 1000) + " characters."
                : "You have used " + this.complaint.length + " characters. " + (1000 - this.complaint.length) + " characters remaining.";
        }
    }

});

