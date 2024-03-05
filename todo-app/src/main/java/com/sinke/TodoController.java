package com.sinke;

import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;
@Controller
@RequestMapping("/hello")
public class TodoController
{
    @GetMapping("/")
    public String index(){
        return "index";
    }
}
