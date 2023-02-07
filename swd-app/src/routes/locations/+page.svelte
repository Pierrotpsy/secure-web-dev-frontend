<script>
	import Location from "./location.svelte";
	export let data;
	let role = data.role.value;
	let jwt = data.jwt.value;
	let showFeatures = false;
</script>


<a href="/logout">Log out</a>

{#if role === "admin"}
	<div>
		<button on:click={() => (showFeatures = !showFeatures)}>Add new film location</button>
	</div>
	{#if showFeatures}
		<form method="POST">
		<input name="name" placeholder="Film Name" />
		<input name="type" placeholder="Film Type" />
		<input name="producername" placeholder="Producer Name" />
		<input name="directorname" placeholder="Director Name" />
		<input name="address" placeholder="Address" />
		<input name="year" placeholder="Year" />
		<button on:click={() => {window.location.reload()}} type="submit">Save</button>
		</form>
	{/if}
{/if}
{#each data.locationslist as loc}
  	<Location location={loc} {role} {jwt} />
{/each}

<style>
	div,
	form {
		text-align: left;
		margin-bottom: 20px;
	}
</style>