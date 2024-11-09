package com.software.rapibox.model;



import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "cadastro_login")
@Getter
@Setter
public class Cadastro_Login {

    public Cadastro_Login() {
    }

    public Cadastro_Login(String email, String senha){
        this.email = email;
        this.senha = senha;
    }

    public Cadastro_Login(String nomeCompleto, String email, String nomeUsuario, String senha, String confirmeSenha){
        this.nomeCompleto = nomeCompleto;
        this.email = email;
        this.nomeUsuario = nomeUsuario;
        this.senha = senha;
        this.confirmeSenha = confirmeSenha;
    }

    public Cadastro_Login(String telefone, byte[] fotoUsuario, Info_Negocio infoNegocio){
        this.telefone = telefone;
        this.fotoUsuario = fotoUsuario;
        this.infoNegocio = infoNegocio;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome_completo", nullable = false)
    private String nomeCompleto;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "nome_usuario", nullable = false, unique = true)
    private String nomeUsuario;

    @Column(name = "senha", nullable = false)
    private String senha;

    @Column(name = "telefone")
    @Size(max = 15)
    private String telefone;

    @Lob
    @Column(name = "foto_usuario")
    private byte[] fotoUsuario;

    // Este campo não será persistido no banco
    @Transient
    private String confirmeSenha;

    @OneToOne(mappedBy = "cadastroLogin", cascade = CascadeType.ALL, fetch = FetchType.EAGER, optional = true)
    @JsonManagedReference
    private Info_Negocio infoNegocio;


}