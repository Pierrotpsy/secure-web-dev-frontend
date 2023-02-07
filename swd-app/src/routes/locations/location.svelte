<script>
    import * as api from "../../api-link.js";
    export let location;
    export let role;
    export let jwt;
    let modified = false;
    let showDetails = false;
    
    async function deleteLocation() {
      console.log(location._id)
      console.log(jwt)
      await api.deleteLocation(location._id, jwt)
      //await invalidateAll()
      window.location.reload()
    }
  
    async function modifyLocation() {
      showDetails = modified = false;
      const locationObject = {
        filmType: document.getElementById("filmType").value,
        filmProducerName: document.getElementById("filmProducerName").value,
        filmDirectorName: document.getElementById("filmDirectorName").value,
        address: document.getElementById("address").value,
        year: document.getElementById("year").value,
      };
      await api.updateLocation(location._id, jwt, locationObject);
      window.location.reload();
    }
</script>
  
<div>
    {#if role === "admin"}
      <button
        on:click={() => {
          modified = !modified;
          showDetails = true;
        }}>Modify</button
      >
    <button on:click={deleteLocation}>Delete</button>
    {/if}
    <button
      on:click={() => {
        showDetails = !showDetails;
      }}>-</button
    >
    <p id="location">{location.filmName}</p>
    {#if showDetails && modified}
      <div>
        <input id="filmType" placeholder="Film type" value={location.filmType} />
        <input
          id="filmProducerName"
          placeholder="Film producer name"
          value={location.filmProducerName}
        />
        <input
          id="startDate"
          placeholder="Start date"
          value={location.startDate}
        />
        <input
          id="endDate"
          placeholder="End date"
          value={location.endDate}
        /><input
          id="endDate"
          placeholder="End date"
          value={location.endDate}
        />
        <input
          id="district"
          placeholder="District"
          value={location.district}
        />
        <input
          id="filmDirectorName"
          placeholder="Film director name"
          value={location.filmDirectorName}
        />
        <input id="address" placeholder="Address" value={location.address} />
        <input id="year" placeholder="Year" value={location.year} />
        <button on:click={modifyLocation}>Save</button>
      </div>
    {:else if showDetails}
    <p>Type : {location.filmType} </p>
    <p>Producer : {location.filmProducerName}</p>
    <p>Start Date: {location.startDate}</p>
    <p>End Date: {location.endDate}</p>
    <p>District: {location.district}</p>
    <p>Film Director : {location.filmDirectorName}</p>
    <p>Address: {location.address}</p>
    <p>Year: {location.year}</p>
    {/if}
</div>
  
<style>
    div {
      text-align: center;
    }
    #location {
      display: inline-block;
    }
    input {
      margin-right: 7px;
    }
</style>
