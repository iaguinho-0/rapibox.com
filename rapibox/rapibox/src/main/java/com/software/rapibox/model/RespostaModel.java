package com.software.rapibox.model;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Component
@Getter
@Setter
public class RespostaModel {
    private String mensagem; //Será responsável pelas mensagens de retorno
}

