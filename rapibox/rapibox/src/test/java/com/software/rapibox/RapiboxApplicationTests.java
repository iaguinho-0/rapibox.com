package com.software.rapibox;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.software.rapibox.model.Cadastro_Login;
import com.software.rapibox.model.Info_Negocio;
import com.software.rapibox.repository.CadastroLoginRepository;
import com.software.rapibox.repository.InfoNegocioRepository;

@SpringBootTest
class RapiboxApplicationTests {

	@Autowired
    private CadastroLoginRepository cadastroLoginRepository;

    @Autowired
    private InfoNegocioRepository infoNegocioRepository;

	@Test
	public void testRelacionamentoCadastroLoginInfoNegocio() {
}
}
