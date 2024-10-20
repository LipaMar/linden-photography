package dev.lipam.lindenphotography.config;

import io.micrometer.common.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;


@Configuration
public class ResourceConfig {

    private final Path photosPath;

    @Autowired
    public ResourceConfig(PhotosProperties photosProperties) {
        final var dirLocation = photosProperties.getDirLocation();
        if (StringUtils.isBlank(dirLocation)) {
            throw new RuntimeException("photosDirLocation is empty");
        }
        this.photosPath = Paths.get(dirLocation);
    }

    public List<String> listAllFiles() throws IOException {
        try (final var files = Files.list(photosPath)) {
            return files.toList().stream().map(Path::toString).toList();
        }
    }
}
