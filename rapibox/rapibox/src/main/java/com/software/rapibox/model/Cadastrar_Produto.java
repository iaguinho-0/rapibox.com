package com.software.rapibox.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "produto")
@Getter
@Setter
public class Cadastrar_Produto {

    public Cadastrar_Produto() {

    }

    public Cadastrar_Produto(String nome, String descricao, String categoria, Double valor, Integer quantidade, Double peso, byte[] foto, Cadastro_Login cadastroLogin) {
        this.nome = nome;
        this.descricao = descricao;
        this.categoria = categoria;
        this.valor = valor;
        this.quantidade = quantidade;
        this.peso = peso;
        this.foto = foto;
        this.cadastroLogin = cadastroLogin;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "descricao", nullable = false)
    private String descricao;

    @Column(name = "categoria", nullable = false)
    private String categoria;

    @Column(name = "valor", nullable = false)
    private Double valor;

    @Column(name = "quantidade", nullable = false)
    private Integer quantidade;

    @Column(name = "peso", nullable = false)
    private Double peso;

    @Lob
    @Column(name = "foto", nullable = false)
    private byte[] foto;

    // Relacionamento ManyToOne com Cadastro_Login
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "cadastro_login_id", nullable = false)
    private Cadastro_Login cadastroLogin;

    public void setCadastroLogin(Cadastro_Login cadastroLogin) {
        this.cadastroLogin = cadastroLogin;
    }
}
