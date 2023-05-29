<script>
	import { Router, Route, Link, useNavigate, navigate } from "svelte-navigator";
	import { user } from "../../stores/userStore";

	function handleLogout() {
		$user = null;
        navigate("/")
	}
</script>

<h1>You've made it to the private route</h1>
<button on:click={handleLogout}>Logout</button>