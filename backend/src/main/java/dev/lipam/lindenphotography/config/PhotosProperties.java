package dev.lipam.lindenphotography.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Setter
@Getter
@ConfigurationProperties("photos")
public class PhotosProperties {

    private String dirLocation;

}
