package com.software.rapibox.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.software.rapibox.model.Info_Negocio;
import com.software.rapibox.model.RespostaModel;
import com.software.rapibox.repository.CadastroLoginRepository;
import com.software.rapibox.repository.InfoNegocioRepository;

@Service
public class InfoNegocioService {
    
    @Autowired
    private CadastroLoginRepository cadastroLoginRepository;

    @Autowired
    private InfoNegocioRepository infoNegocioRepository;

    private final RespostaModel rm = new RespostaModel();

    public List<Info_Negocio> mostrar_usuarios(){
        return (List<Info_Negocio>) infoNegocioRepository.findAll();
    }
    
}
