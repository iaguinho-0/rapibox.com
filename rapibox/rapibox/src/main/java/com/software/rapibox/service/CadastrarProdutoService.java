package com.software.rapibox.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.software.rapibox.model.Cadastrar_Produto;
import com.software.rapibox.model.Cadastro_Login;
import com.software.rapibox.model.RespostaModel;
import com.software.rapibox.repository.CadastroLoginRepository;
import com.software.rapibox.repository.CadastroProdutoRepository;

@Service
public class CadastrarProdutoService {
    
    @Autowired
    private CadastroProdutoRepository cadastroProdutoRepository;

    @Autowired
    private CadastroLoginRepository cadastroLoginRepository;

    @Autowired
    private RespostaModel rm;

    public ResponseEntity<?> cadastrar(Cadastrar_Produto produto, Long cadastroLoginId) {

        if (produto.getNome() == null || produto.getNome().isEmpty() ||
            produto.getDescricao() == null || produto.getDescricao().isEmpty() ||
            produto.getCategoria() == null || produto.getCategoria().isEmpty() ||
            produto.getValor() == null ||
            produto.getQuantidade() == null ||
            produto.getPeso() == null ||
            produto.getFoto() == null || produto.getFoto().length == 0) {
            
            rm.setMensagem("Preencha todos os campos obrigatórios.");
            return new ResponseEntity<>(rm, HttpStatus.BAD_REQUEST);
        }

        // Buscar o Cadastro_Login pelo ID
        Cadastro_Login cadastroLogin = cadastroLoginRepository.findById(cadastroLoginId)
                .orElseThrow(() -> new RuntimeException("Cadastro de login não encontrado"));

        // Associar o cadastroLogin ao produto
        produto.setCadastroLogin(cadastroLogin);

        // Salvar o produto no banco de dados
        Cadastrar_Produto cadastro = cadastroProdutoRepository.save(produto);

        return new ResponseEntity<>(cadastro, HttpStatus.CREATED);
    }
}
