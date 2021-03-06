package com.shendehaizi.controller;

import com.shendehaizi.request.LoginRequest;
import com.shendehaizi.response.LoginUserInfo;
import com.shendehaizi.response.Response;
import com.shendehaizi.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RestController
@RequestMapping("/api/")
public class LoginController {
    @Autowired
    private LoginService loginService;

    @PostMapping(value = "user/login")
    public Response<LoginUserInfo> handleLogin(@RequestBody LoginRequest request) {
        Response<LoginUserInfo> response = loginService.loginCheck(request);
        return response;
    }

}
