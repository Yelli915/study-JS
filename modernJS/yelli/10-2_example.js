button.addEventListener("click", () => {
    let username, domain;

    if (email.value !== "") {
        username = email.value.split("@")[0];
        username = username.substring(0, 3);
        domain = email.value.split("@")[1];
        result.innerText = `${username}...@${domain}`;
        email.value = "";
    }

    if (email.value === "") {
        username = email.value.split("@")[0];
        half = username.length / 2;
        username = username.substring(0, (username.length - half));
        domain = email.value.split("@")[1];
        result.innerText = `${username}...@${domain}`;
        email.value = "";
    } //절반표시버전
});