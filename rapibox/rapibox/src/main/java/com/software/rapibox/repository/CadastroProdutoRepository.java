package com.software.rapibox.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.software.rapibox.model.Cadastrar_Produto;

public interface CadastroProdutoRepository extends JpaRepository<Cadastrar_Produto, Long> {
    List<Cadastrar_Produto> findByCadastroLoginId(Long cadastroLoginId);
}
