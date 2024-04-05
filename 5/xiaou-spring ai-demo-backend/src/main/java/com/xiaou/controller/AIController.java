package com.xiaou.controller;

import jakarta.annotation.Resource;
import org.springframework.ai.ollama.OllamaChatClient;
import org.springframework.ai.openai.OpenAiChatClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AIController {
    @Resource
    private OllamaChatClient ollamaChatClient;

    @Resource
    private OpenAiChatClient openAiChatClient;

    @GetMapping("/chat")
    public String chat(@RequestParam(name = "message") String message) {
        return ollamaChatClient.call(message);
    }

    @GetMapping("/chat")
    public String OpenAiChat(@RequestParam(name = "message") String message) {
        return openAiChatClient.call(message);
    }

}
