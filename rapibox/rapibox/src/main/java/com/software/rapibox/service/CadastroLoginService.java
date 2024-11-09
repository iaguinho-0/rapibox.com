package com.software.rapibox.service;

import com.software.rapibox.model.Cadastro_Login;
import com.software.rapibox.model.Info_Negocio;
import com.software.rapibox.model.RespostaModel;
import com.software.rapibox.repository.CadastroLoginRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Service
public class CadastroLoginService {

    @Autowired
    private CadastroLoginRepository cadastroLoginRepository;

    private final RespostaModel rm = new RespostaModel(); 

    private final BCryptPasswordEncoder criptografia = new BCryptPasswordEncoder();

    public List<Cadastro_Login> mostrar_usuarios(){
        return cadastroLoginRepository.findAll();
    }

    public ResponseEntity<?> cadastrar(Cadastro_Login cadastroLogin) {
        if (cadastroLogin.getNomeCompleto() == null || cadastroLogin.getNomeCompleto().isEmpty() ||
            cadastroLogin.getEmail() == null || cadastroLogin.getEmail().isEmpty() || cadastroLogin.getNomeUsuario() == null || 
            cadastroLogin.getNomeUsuario().isEmpty() || cadastroLogin.getSenha() == null || cadastroLogin.getSenha().isEmpty() ||
            cadastroLogin.getConfirmeSenha() == null || cadastroLogin.getConfirmeSenha().isEmpty()) {
            
            rm.setMensagem("Preencha todos os campos.");
            return new ResponseEntity<>(rm, HttpStatus.BAD_REQUEST);
        }
    
        else if (!cadastroLogin.getSenha().equals(cadastroLogin.getConfirmeSenha())) {
            rm.setMensagem("As senhas não coincidem.");
            return new ResponseEntity<>(rm, HttpStatus.BAD_REQUEST);
        }
    
        else if (cadastroLoginRepository.existsByEmail(cadastroLogin.getEmail()) || cadastroLoginRepository.existsBySenha(cadastroLogin.getSenha()) ||  cadastroLoginRepository.existsByNomeUsuario(cadastroLogin.getNomeUsuario())) {
            rm.setMensagem("Esta conta já existe.");
            return new ResponseEntity<>(rm, HttpStatus.CONFLICT);
        }

        cadastroLogin.setSenha(criptografia.encode(cadastroLogin.getSenha()));
        Cadastro_Login salvar_cadastro = cadastroLoginRepository.save(cadastroLogin);
        return new ResponseEntity<>(salvar_cadastro, HttpStatus.CREATED);
    }

    public ResponseEntity<?> login(Cadastro_Login cadastroLogin){
        Cadastro_Login login = cadastroLoginRepository.findByEmail(cadastroLogin.getEmail());

        if (login != null && criptografia.matches(cadastroLogin.getSenha(), login.getSenha())){
            return new ResponseEntity<>(login, HttpStatus.OK);
        }

        rm.setMensagem("Email ou Senha incorretos.");
        return new ResponseEntity<RespostaModel>(rm, HttpStatus.UNAUTHORIZED);
    }

    public ResponseEntity<Cadastro_Login> buscarUsuarioPorId(Long id) {
        Optional<Cadastro_Login> usuarioOptional = cadastroLoginRepository.findById(id);
        if (!usuarioOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Retorna 404 se não encontrado
        }
        return new ResponseEntity<>(usuarioOptional.get(), HttpStatus.OK); // Retorna o usuário se encontrado
    }

    public Cadastro_Login atualizarTelefoneEFoto(Long id, String telefone, byte[] fotoUsuario, Info_Negocio infoNegocio) {
        // Busque o Cadastro_Login do banco de dados
        Cadastro_Login cadastro = cadastroLoginRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
    
        if (telefone != null) {
            cadastro.setTelefone(telefone);
        }
    
        if (fotoUsuario != null) {
            cadastro.setFotoUsuario(fotoUsuario);
        }
    
        // Verifique se a instância de Info_Negocio já está associada ao Cadastro_Login
        Info_Negocio cadastroInfoNegocio = cadastro.getInfoNegocio();
    
        // Se já existe, atualize os campos. Caso contrário, não faça nenhuma alteração
        if (cadastroInfoNegocio != null && infoNegocio != null) {
            if (infoNegocio.getNomeEmpresa() != null) {
                cadastroInfoNegocio.setNomeEmpresa(infoNegocio.getNomeEmpresa());
            }
            if (infoNegocio.getCnpj() != null) {
                cadastroInfoNegocio.setCnpj(infoNegocio.getCnpj());
            }
            if (infoNegocio.getCep() != null) {
                cadastroInfoNegocio.setCep(infoNegocio.getCep());
            }
            if (infoNegocio.getCidade() != null) {
                cadastroInfoNegocio.setCidade(infoNegocio.getCidade());
            }
            if (infoNegocio.getEstado() != null) {
                cadastroInfoNegocio.setEstado(infoNegocio.getEstado());
            }
            if (infoNegocio.getRua() != null) {
                cadastroInfoNegocio.setRua(infoNegocio.getRua());
            }
            if (infoNegocio.getBairro() != null) {
                cadastroInfoNegocio.setBairro(infoNegocio.getBairro());
            }
        } else if (cadastroInfoNegocio == null && infoNegocio != null) {
            // Usuário não possui Info_Negocio. Criar um novo registro.
            System.out.println("Usuário não possui Info_Negocio. Criando novo registro.");
    
            // Criação de um novo registro de Info_Negocio
            Info_Negocio novoInfoNegocio = new Info_Negocio();
            novoInfoNegocio.setNomeEmpresa(infoNegocio.getNomeEmpresa());
            novoInfoNegocio.setCnpj(infoNegocio.getCnpj());
            novoInfoNegocio.setCep(infoNegocio.getCep());
            novoInfoNegocio.setCidade(infoNegocio.getCidade());
            novoInfoNegocio.setEstado(infoNegocio.getEstado());
            novoInfoNegocio.setRua(infoNegocio.getRua());
            novoInfoNegocio.setBairro(infoNegocio.getBairro());
    
            // Associa o novo Info_Negocio ao Cadastro_Login
            novoInfoNegocio.setCadastroLogin(cadastro);
            cadastro.setInfoNegocio(novoInfoNegocio);
        }
    
        // Salva as alterações
        return cadastroLoginRepository.save(cadastro);
    }
}