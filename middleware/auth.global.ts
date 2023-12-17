export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.includes("profile")) {
    // console.log("Profile");
  } else {
    // console.log("not Profile");
  }
});
