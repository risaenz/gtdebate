/**
 * Created by Ricardo on 3/8/2016.
 */
Handlebars.registerHelper('isAdminUser', function() {
    return Roles.userIsInRole(Meteor.user(), ['admin']);
});