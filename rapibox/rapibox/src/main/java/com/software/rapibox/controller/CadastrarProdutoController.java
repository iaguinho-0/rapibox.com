package com.software.rapibox.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.software.rapibox.model.Cadastrar_Produto;
import com.software.rapibox.repository.CadastroProdutoRepository;
import com.software.rapibox.service.CadastrarProdutoService;

@RestController
@CrossOrigin(origins = "http://localhost:5173/") //Encaminhando requisição para o React
public class CadastrarProdutoController {
    
    @Autowired
    private CadastrarProdutoService cadastroProdutoService;

    @Autowired
    private CadastroProdutoRepository cadastroProdutoRepository;

    @GetMapping("/produtos")
    public ResponseEntity<List<Cadastrar_Produto>> Allprodutos(){
        List<Cadastrar_Produto> produtos = cadastroProdutoRepository.findAll();
        return ResponseEntity.ok(produtos);
    }

     @GetMapping("/produtos/{usuarioId}")
        public ResponseEntity<List<Cadastrar_Produto>> getProdutosByUsuarioId(@PathVariable Long usuarioId) {
        List<Cadastrar_Produto> produtos = cadastroProdutoRepository.findByCadastroLoginId(usuarioId);
        return ResponseEntity.ok(produtos);
    }

     @PostMapping("/cadastrar-produto")
        public ResponseEntity<?> cadastrarProduto(
            @RequestParam("nome") String nome,
            @RequestParam("descricao") String descricao,
            @RequestParam("categoria") String categoria,
            @RequestParam("valor") Double valor,
            @RequestParam("quantidade") Integer quantidade,
            @RequestParam("peso") Double peso,
            @RequestParam("foto") MultipartFile foto,
            @RequestParam("cadastroLoginId") Long cadastroLoginId) {

            System.out.println("Nome"+nome);
            System.out.println(descricao);
            System.out.println(categoria);
            System.out.println("...");
        // Criando um objeto do produto com os dados recebidos
        Cadastrar_Produto produto = new Cadastrar_Produto();
        produto.setNome(nome);
        produto.setDescricao(descricao);
        produto.setCategoria(categoria);
        produto.setValor(valor);
        produto.setQuantidade(quantidade);
        produto.setPeso(peso);
        
        try {
            // Converte o MultipartFile (foto) para um array de bytes e seta no produto
            produto.setFoto(foto.getBytes());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro ao processar a imagem.");
        }
        
        return cadastroProdutoService.cadastrar(produto, cadastroLoginId);
    }


}
