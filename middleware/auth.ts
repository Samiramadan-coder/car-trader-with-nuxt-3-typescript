export default defineNuxtRouteMiddleware((to, from) => {
  const isLogged = true;

  if (isLogged) return;
  return navigateTo("/login");
});
