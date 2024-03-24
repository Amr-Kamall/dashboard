import supabase from "./supabase";

//login
export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }
  console.log(data);
  return data;
}

//autorization
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  const { data, error } = await supabase.auth.getUser();
  console.log(data);
  if (error) {
    throw new Error(error.message);
  }
  return data?.user;
}

//logout
export async function logOut() {
  let { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
}

//signin

export async function signUp({ email, password, firstName, lastName }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { firstName, lastName, avatar: "" } },
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
