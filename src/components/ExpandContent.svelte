<script>
	export let height;
	export let redirect;
	let expanded = false;
</script>

<div>
	<div style={expanded ? '' : `max-height: ${height}; overflow: hidden;`}>
		<slot />
	</div>
	<a
		href={redirect ? redirect : ''}
		on:click={() => {
			expanded = !expanded;
		}}>{!expanded ? 'View More' : 'View Less'}</a
	>
</div>
