<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Tasks :tasks="buildings" />
    <Dropdown :options="buildings"> </Dropdown>

   
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Tasks from "../components/Tasks";
import Dropdown from "../components/Dropdown";
// import DropDownContent from "../components/DropDownContent";
// import DropDownItem from "../components/DropDownItem";

export default {
  name: "App",
  components: {
    // HelloWorld
    Tasks,
    Dropdown,
  },
  data() {
    return {
      buildings: [],
      companyId: "",
      APIKey: "czxyAeSyhSBcCliKkhdaSIDBaidYIBff",
    };
  },
  methods: {},

  async created() {
    // get user info
    const asyncUser = await fetchTestUser(this.APIKey);
    // console.log(asyncUser);
    this.companyId = asyncUser.company.id;
    // console.log(this.companyId);

    // get buildings
    const asyncBuildings = await fetchBuildings(this.APIKey);
    // console.log(asyncBuildings);

    for (let index = 0; index < asyncBuildings.content.length; index++) {
      const building = asyncBuildings.content[index];
      // console.log(building);
      // building.floors.forEach((floor) => {
      //   console.log(floor.id);
      //   const x =  fetchFloorPlans(this.companyId, floor.id);
      //   // console.log(x);
      // });
      this.buildings.push({
        id: building.id,
        name: building.name,
        floors: building.floors.length,
      });
    }
    console.log(this.buildings);
  },
};

// fetch building
async function fetchBuildings(key) {
  console.log(key);
  const http = `https://apps.cloud.us.kontakt.io/v2/locations/buildings?
  page=0
  &size=50
  &sort=name`;
  const res = await fetch(http, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Api-Key": "ilcGMcUsxAQEUWGHZPHiCTCqVafdMfFx",
    },
  });
  const ret = await res.json();
  // const data = await res;
  return ret;
}

// async function fetchFloorPlans(companyId, floorId) {
//   const http = `https://apps.cloud.us.kontakt.io/v2/locations/floors/plans/get/${companyId}/${floorId}`;
//   const res = await fetch(http, {
//     method: "GET",
//   });
//   // const data = await res.json();
//   const data = res;
//   console.log(data);
//   return data;
// }

async function fetchTestUser(key) {
  if (key === undefined) {
    confirm("There was a error in the fetch credentials.");
    return;
  }
  const res = await fetch(
    "https://apps-api.test.kontakt.io/v2/organization/account/me",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Api-Key": key,
      },
    }
  );
  const ret = await res.json();
  return ret;
}
</script>
