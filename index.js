function get_gpa(marks) {
    if (marks > 84 && marks <= 100) {
        return '4.0';
    } else if (marks >= 80 && marks <= 84) {
        return '3.66';
    } else if (marks >= 75 && marks < 80) {
        return '3.33';
    } else if (marks >= 70 && marks < 75) {
        return '3.0';
    } else if (marks >= 65 && marks < 70) {
        return '2.66';
    } else if (marks >= 60 && marks < 65) {
        return '2.33';
    } else if (marks >= 55 && marks < 60) {
        return '2.0';
    } else {
        return 'FAIL';
    }
}

module.exports = get_gpa;