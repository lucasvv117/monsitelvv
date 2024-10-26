document.addEventListener('DOMContentLoaded', () => {
    fetch('/LLMs')
        .then(response => response.json())
        .then(data => {
            const llmsContainer = document.getElementById('llms'); // Adaptation pour contenir des LLMs
            data.forEach(llm => {
                const llmDiv = document.createElement('div');
                llmDiv.textContent = `Nom: ${llm.Nom}, Propriétaire: ${llm.Owner}, Création: ${new Date(llm.Création).toLocaleDateString()}, Note: ${llm.Note}`;
                llmsContainer.appendChild(llmDiv);
            });
        })
        .catch(error => console.error('Erreur:', error));
});
