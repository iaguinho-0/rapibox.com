package com.software.rapibox.model;

import com.fasterxml.jackson.annotation.JsonBackReference;


import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "info_negocio")
@Getter
@Setter
public class Info_Negocio {

    public Info_Negocio() {
    }

    public Info_Negocio(String nomeEmpresa, String cnpj, String cep, String cidade, String estado, String rua, String bairro) {
        this.nomeEmpresa = nomeEmpresa;
        this.cnpj = cnpj;
        this.cep = cep;
        this.cidade = cidade;
        this.estado = estado;
        this.rua = rua;
        this.bairro = bairro;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome_empresa", nullable = false)
    private String nomeEmpresa;

    @Column(name = "cnpj", nullable = false, unique = true)
    @Size(min = 14, max = 14, message = "O CNPJ deve ter exatamente 14 dígitos.")
    private String cnpj;

    @Column(name = "cep", nullable = false)
    @Size(min = 8, max = 8, message = "O CEP deve ter exatamente 8 dígitos.")
    private String cep;

    @Column(name = "cidade", nullable = false)
    private String cidade;

    @Column(name = "estado", nullable = false)
    private String estado;

    @Column(name = "rua", nullable = false)
    private String rua;

    @Column(name = "bairro", nullable = false)
    private String bairro;

    // Relacionamento com a tabela Cadastro_Login
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cadastro_login_id")
    @JsonBackReference
    private Cadastro_Login cadastroLogin;
}
