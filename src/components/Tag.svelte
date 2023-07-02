<script>
  export let name;
  let colour='bg-amber-300';
  if (["Team Project","Personal Project", "Event"].includes(name)){
    colour = 'bg-green-300';
  }
  if (["Deployed","Award Winning", "Highlight"].includes(name)){
    colour = 'bg-red-300';
  }

</script>

<div
  class={`text-sm inline-flex items-center font-bold leading-sm uppercase 
    px-3 py-1 ${colour} text-gray-800 rounded-full my-1 capitalize mr-1`}
>
  {name}
</div>
