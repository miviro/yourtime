declare var browser: any;
const LogInURL = "https://xmi.lu/yourtime/auth/auth.html";

browser.storage.local.get("yourtimeauth")
	.then((content) => {
		console.log(content)
		if (Object.keys(content).length) {
			$("#loginStatus").text(`Logged in as ${content.yourtimeauth.username}`);
			$("#login")
				.text("Log out")
				.attr("href", "javascript:logOut()");
		}
	}, (error) => {
		console.log(error)
	});

function logOut() {
	window.open(LogInURL, "_blank").focus();
}
