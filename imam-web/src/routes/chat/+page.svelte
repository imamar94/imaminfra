<script lang="ts">
    let text: string = $state('');
    function createChat(msg: string) {
        return {
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                {
                role: "user",
                content: msg,
                },
            ],
        };
    }

    function handleSubmit(event: Event) {
        event.preventDefault();
        fetch(`${window.location.origin}/api/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(createChat(text)),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

</script>

<input type="text" name="action" bind:value={text} />
<button onclick={handleSubmit}>Submit</button>
