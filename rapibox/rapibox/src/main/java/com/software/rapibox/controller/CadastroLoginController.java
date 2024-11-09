package com.software.rapibox.controller;

import java.io.IOException;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.software.rapibox.model.Cadastro_Login;
import com.software.rapibox.model.Info_Negocio;
import com.software.rapibox.model.RespostaModel;
import com.software.rapibox.repository.CadastroLoginRepository;
import com.software.rapibox.service.CadastroLoginService;


@RestController
@CrossOrigin(origins = "http://localhost:5173/") //Encaminhando requisição para o React
public class CadastroLoginController {
    
    @Autowired
    CadastroLoginService cadastroLoginService;

    @Autowired
    CadastroLoginRepository cadastroLoginRepository;

    @Autowired
    RespostaModel rm;

    @GetMapping("/usuarios")
    public ResponseEntity<List<Cadastro_Login>> AllUsuarios() {
        List<Cadastro_Login> usuarios = cadastroLoginService.mostrar_usuarios();
        return ResponseEntity.ok(usuarios);
    }

    @GetMapping("/usuarios/{id}")
    public ResponseEntity<Cadastro_Login> getUsuarioById(@PathVariable Long id) {
    return cadastroLoginService.buscarUsuarioPorId(id);
}

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody Cadastro_Login cadastrologin){
        return cadastroLoginService.cadastrar(cadastrologin);
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Cadastro_Login cadastrologin){
        return cadastroLoginService.login(cadastrologin);
    }

    @PutMapping("usuarios/{id}/atualizar-telefone-foto")
    public ResponseEntity<?> atualizarTelefoneEFoto(
        @PathVariable Long id,
        @RequestParam(required = false) String telefone,
        @RequestParam(required = false) MultipartFile fotoUsuario,
        @RequestParam(required = false) String nomeEmpresa,
        @RequestParam(required = false) String cnpj,
        @RequestParam(required = false) String cep,
        @RequestParam(required = false) String cidade,
        @RequestParam(required = false) String estado,
        @RequestParam(required = false) String rua,
        @RequestParam(required = false) String bairro) {

            System.out.println("Entrada no Controller: ");
            System.out.println(nomeEmpresa);
            System.out.println(cnpj);
            System.out.println(cep);
            System.out.println(cidade);
            System.out.println("...");

            if (telefone != null && (telefone.length() < 11 || telefone.length() > 13)) {
                rm.setMensagem("O Telefone deve conter 11 ou 13 dígitos");
                return new ResponseEntity<RespostaModel>(rm, HttpStatus.BAD_REQUEST);
            }
        
            if (cnpj != null && cnpj.length() != 14) {
                rm.setMensagem("O CNPJ deve conter 14 dígitos");
                return new ResponseEntity<RespostaModel>(rm, HttpStatus.BAD_REQUEST);
            }
        
            if (cep != null && cep.length() != 8) {
                rm.setMensagem("O CEP deve conter 8 dígitos");
                return new ResponseEntity<RespostaModel>(rm, HttpStatus.BAD_REQUEST);
            }

        try {
            byte[] fotoBytes = (fotoUsuario != null && !fotoUsuario.isEmpty()) ? fotoUsuario.getBytes() : null;

            Info_Negocio infoNegocio = new Info_Negocio();
            infoNegocio.setNomeEmpresa(nomeEmpresa);
            infoNegocio.setCnpj(cnpj);
            infoNegocio.setCep(cep);
            infoNegocio.setCidade(cidade);
            infoNegocio.setEstado(estado);
            infoNegocio.setRua(rua);
            infoNegocio.setBairro(bairro);

            Cadastro_Login cadastroAtualizado = cadastroLoginService.atualizarTelefoneEFoto(id, telefone, fotoBytes, infoNegocio);

            return new ResponseEntity<>(cadastroAtualizado, HttpStatus.OK);

        } catch (IOException e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.singletonMap("error", "Erro ao processar a imagem"));
        } catch (RuntimeException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(Collections.singletonMap("error", e.getMessage()));
        }
    }

    @GetMapping("usuario/{id}/info") //Pretendo ainda usar para fazer um negocin
    public ResponseEntity<?> verificarCampos(@PathVariable Long id){
        Cadastro_Login usuario = cadastroLoginRepository.findById(id).orElse(null);

        if(usuario.getTelefone() == null){
            return ResponseEntity.status(404).body("Telefone não encontrado"); /*Estou comparando apenas o telefone pq os outros campos
            do Cadastro_Login foram registradas, só o telefone que ainda não foi*/
        }

        Info_Negocio infoNegocio = usuario.getInfoNegocio();

        if(infoNegocio != null){
            return ResponseEntity.ok(infoNegocio);
        } else {
            return ResponseEntity.status(404).body("Informações de negócio não encontradas.");
        }
    }
}
    
