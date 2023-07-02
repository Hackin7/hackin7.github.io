<script context="module">
  
  let tagCategories = {
    "event": ["Team Project","Personal Project", "Event"],
    "usage": ["Deployed","Award Winning", "Highlight"], 
    "type": [
      "IoT", "Electronics", "3D Printing", 
      "Web", "App Dev","Android", "Unity", "React Native",
      "Machine Learning", "Computer Vision", ],
  }; //"Casing"
  export function tagCat(tag){
    for (let key in tagCategories){
      if (tagCategories[key].includes(tag)){
        return key;
      }
    }
    return "";
  }
  
  let categoryColours = {
    "": "bg-amber-300",
    "event": "bg-green-300",
    "usage": "bg-red-300",
    "type": "bg-blue-300",
  }
  let order = ["usage", "type", "", "event"];
  
  export function tagPriority(a, b){
    let catA = tagCat(a);
    let catB = tagCat(b);
    if (catA == catB){ return 0; }
    if (order.indexOf(catA) > order.indexOf(catB)){
      return 1;
    }
    return -1;
  }
  export function tagSort(tagList){
    let tags = tagList;
    tags.sort(tagPriority);
    return tags;
  }
</script>

<script>
  export let name;
  let colour=categoryColours[tagCat(name)];
</script>

<div
  class={`text-sm inline-flex items-center font-bold leading-sm uppercase 
    px-3 py-1 ${colour} text-gray-800 rounded-full my-1 capitalize mr-1`}
>
  {name}
</div>
