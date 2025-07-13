let  userRole, accessLevel, isLoggedIn, userMessage, userType, userCategory, isAuthenticated, authenticationStatus;

if (userRole == "Employee") {
    accessLevel = "You have access to the Dietary Services";
} else if (userRole == "Enrolled Member") {
     accessLevel = "You have access to  the Dietary Services and one-on-one interaction with a dietician.";
} else if (userRole == "Subscriber") {
     accessLevel = "You have partial access the Dietary Services";
}
 else {
     accessLevel = "No access granted. You need to enroll or subscribe first to get access.";
}