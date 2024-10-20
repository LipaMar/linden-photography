package dev.lipam.lindenphotography.controllers;

import dev.lipam.lindenphotography.config.ResourceConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/photo")
public class PhotoController {

    private final ResourceConfig resourceConfig;

    @GetMapping
    public List<String> getPhoto() throws IOException {
        return resourceConfig.listAllFiles();
    }

}
