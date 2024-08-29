// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.

// My Solution

function isToday(date) {
    let today = new Date()
    return date.toDateString() == today.toDateString() ? true : false
}