package dev.lipam.lindenphotography;

import dev.lipam.lindenphotography.config.PhotosProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(PhotosProperties.class)
public class LindenPhotographyApplication {

	public static void main(String[] args) {
		SpringApplication.run(LindenPhotographyApplication.class, args);
	}

}
