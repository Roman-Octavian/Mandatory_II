<script>
    import Toastr from "toastr";
    let email= "";
    let subject = "";
    let text = "";
    async function handleContact(){
        const data = { email, subject, text}
        try{
            const response = await fetch('http://localhost:8080/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                Toastr.info("Your email has been sent")
            } else {
                const error = await response.json();
                Toastr.error(error.message);
            }
        } catch(error) {
        Toastr.error(`Oops! An error has occured: ${error}`);
        }
    }
</script>

<div id="container">
  <form on:submit|preventDefault={handleContact} id="contact">
    <label for="email" >Email address:</label>
    <input type="email" id="email" name="email"  required bind:value={email}>
  
    <label for="subject">Mail Subject:</label>
    <input type="text" id="subject" name="subject" required bind:value={subject}>
  
    <label for="message">Message:</label>
    <textarea id="message" name="message" required bind:value={text}></textarea>
  
    <button type="submit">Send</button>
  </form>
</div>

  <style>
    #container {
    display: flex;
    height: 100%;
    justify-content: center;
    height: 100vh;
    }
    #contact {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    justify-content: center;
    }
    label {
      margin: 1rem auto;
      text-align: center;
      font-size: 1.3rem;
    }
    input,
    textarea {
      width: 100%; 
      padding: 10px;
    }
    textarea {
      height: 20%;
      margin-bottom: 10px;
    }
    button {
    display: block;
    width: 25%;
    height: 2em;
    font-size: 1.4rem;
    cursor: pointer;
    border-radius: 10px;
    }
  </style>