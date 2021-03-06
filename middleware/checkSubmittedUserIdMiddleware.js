const Request = require("../models/Request");

module.exports = async function (req, res, next) {
    const selectedRequestId = req.params._id;
    const selectedRequest = await Request.findById(selectedRequestId);
    const submittedUsername = selectedRequest.username;

    console.log(selectedRequest.user_id, currentUserId);
    console.log(submittedUsername, currentUsername);

    if (userRole === "user") {
        if (selectedRequest.user_id.equals(currentUserId) || submittedUsername === currentUsername) {
            next();
        } else {
            return res.render("error-unauthorized");
        }
    } else if (userRole === "admin") {
        next();
    }
} 