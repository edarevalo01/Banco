package com.banco;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.banco.entities.Location;

@SpringBootTest
class BancoApplicationTests {

	@Test
	void SaveLocation() {
		Location location = new Location();
		location.setId(9999);
		location.setName("Test Location");
		location.setArea(0);
		location.setParent(null);
	}

}
