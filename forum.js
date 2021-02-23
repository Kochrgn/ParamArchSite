<html>
<head>
<title>forum</title>
</head>
<body>
<form action="#">
<p>name</p> <input id="username" type="text">
<p>message</p> <textarea id="text" cols="30" rows="3"></textarea>

<input type="button" value="send a message" onclick="run()">
<input type="reset" value="reset">
</form>
<hr>
<div id="report"></div>
<script>
function run()
{
report.innerHTML += '<p><b>'+username.value+':</b>' + text.value + '</p>';
}
</script>
</body>
