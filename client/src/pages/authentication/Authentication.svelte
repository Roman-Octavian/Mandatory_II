<script>
import { useNavigate } from 'svelte-navigator'
import { onMount } from 'svelte';
import { user } from '../../stores/userStore.js';
// @ts-ignore
import toast, { Toaster } from 'svelte-french-toast';


const navigate = useNavigate();
let username = "";
let password = "";
async function handleSubmit() {
const data = { username, password };

try {
  const response = await fetch('http://localhost:8080/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (response.ok) {
    const userData = await response.json();
    user.set(userData);
    navigate("/dashboard");
  } else {
    const error = await response.json();
    toast.error(error.message);
  }
} catch (error) {
  toast.error(error);
}
}


</script>

<Toaster />

<div id="container">
  <form on:submit|preventDefault={handleSubmit} id="login">
      <h1>Welcome</h1>
      <label>
        Username:
        <input type="text" bind:value={username} />
      </label>
      <label>
        Password:
        <input type="password" bind:value={password} />
      </label>
      <button type="submit" class="button">Sign In</button>
      <a href="/contact"> Contact</a>
  </form>
</div>

<style>
  #container {
    display: flex;
    height: 100%;
    justify-content: center;
    height: 100vh;
  }
  #login {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    padding: 50px 50px;
    border-radius: 10px;
    color: white;
    
  }
  h1 {
    text-align: center;
    font-size: 5rem;
  }
  a {
    margin: 1rem auto;
    text-align: center;
    font-size: 1.3rem;
  }
  input {
    margin: 1em auto;
    width: 100%; 
    min-height: 3rem;
    border-radius: 3px; 
    margin-top: 8px;
    border: none;
    font-size: 20px;
    border-radius: 10px;
    padding: 0 10px;
  }
  label{
      font-size: 1.5rem;
  }
  .button {
    display: block;
    width: 25%;
    height: 2em;
    font-size: 1.4rem;
    cursor: pointer;
    border-radius: 10px;
  }
</style>