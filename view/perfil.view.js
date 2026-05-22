export const perfilView = {
    renderizarPerfil(dados) {
        const container = document.getElementById("perfil-conteudo");
        
        container.innerHTML = `
            <p class="cargo">${dados.cargo}</p>
            <p class="biografia">${dados.biografia}</p>
        `;
    },

    renderizarProjetos(projetos) {
        const container = document.getElementById("lista-projetos");
        container.innerHTML = "";

        projetos.forEach(projeto => {
            const article = document.createElement("article");
            article.className = "card-projeto";
            
            const tagsTecnologias = projeto.tecnologias
                .map(tech => `<span class="tag">${tech}</span>`)
                .join("");

            article.innerHTML = `
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <div class="tecnologias" aria-label="Tecnologias utilizadas">
                    ${tagsTecnologias}
                </div>
                <a href="${projeto.link}" class="link-projeto" aria-label="Ver projeto ${projeto.titulo}">
                    Visualizar Projeto <span aria-hidden="true">&rarr;</span>
                </a>
            `;

            container.appendChild(article);
        });
    },

    renderizarContato(contato) {
        const container = document.getElementById("dados-contato");
        
        container.innerHTML = `
            <ul>
                <li>
                    <strong>E-mail:</strong> 
                    <a href="mailto:${contato.email}" aria-label="Enviar um e-mail para ${contato.email}">
                        ${contato.email}
                    </a>
                </li>
                <li>
                    <strong>GitHub:</strong> 
                    <a href="${contato.github}" target="_blank" rel="noopener noreferrer" aria-label="Acessar perfil do GitHub (abre em nova aba)">
                        GitHub
                    </a>
                </li>
                <li>
                    <strong>LinkedIn:</strong> 
                    <a href="${contato.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="Acessar perfil do LinkedIn (abre em nova aba)">
                        LinkedIn
                    </a>
                </li>
            </ul>
        `;
    }
};