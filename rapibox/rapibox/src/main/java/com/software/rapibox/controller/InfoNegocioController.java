package com.software.rapibox.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.software.rapibox.model.Info_Negocio;
import com.software.rapibox.service.InfoNegocioService;

@RestController
@CrossOrigin(origins = "http://localhost:5173/") //Encaminhando requisição para o React
public class InfoNegocioController {
    
    @Autowired
    InfoNegocioService infoNegocioService;

    @GetMapping("/infopessoal")
    public ResponseEntity<List<Info_Negocio>> AllUsuarios() {
        List<Info_Negocio> usuarios = infoNegocioService.mostrar_usuarios();
        return ResponseEntity.ok(usuarios);
    } 

}
