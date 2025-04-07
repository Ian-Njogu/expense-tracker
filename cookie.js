// Cookie - a small text file stored on your computer
            //used to remember information about the use
            //saved in name value pairs

setCookie("email", "Sponge@gmail.com", 365)

console.log(document.cookie);
function setCookie(name,value,daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 100))
    let expires = "expired=" +date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path/`
}