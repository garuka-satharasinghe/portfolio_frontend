export default function ({ store, redirect }) {
  // Check if the user is authenticated
  if (!localStorage.getItem("authToken")) {
    // If not authenticated, redirect to login page
    return redirect("/login");
  }
}
