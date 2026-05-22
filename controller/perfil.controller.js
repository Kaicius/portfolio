import { perfilModel } from '../model/perfil.model.js';
import { perfilView } from '../view/perfil.view.js';

export const perfilController = {
    inicializar() {
        perfilView.renderizarPerfil(perfilModel);
        perfilView.renderizarProjetos(perfilModel.projetos);
        perfilView.renderizarContato(perfilModel.contato);
    }
};