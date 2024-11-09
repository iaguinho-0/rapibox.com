package com.software.rapibox.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.software.rapibox.model.Cadastro_Login;

public interface CadastroLoginRepository extends JpaRepository<Cadastro_Login, Long>{
    boolean existsByEmail(String email);
    boolean existsBySenha(String senha);
    boolean existsByNomeUsuario(String nomeUsuario);
    Cadastro_Login findByEmail(String email);
}
