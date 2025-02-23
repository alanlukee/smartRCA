package com.dev.smartApp.service;

import com.dev.smartApp.dto.LoginRequest;
import com.dev.smartApp.model.User;
import com.dev.smartApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {
    private final UserRepository userRepository;

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String authenticateUser(LoginRequest request) {
        Optional<User> user = userRepository.findByUsername(request.getUsername());

        if (user.isPresent() && user.get().getPassword().equals(request.getPassword())) {
            return "Login successful";
        } else {
            return "Invalid username or password";
        }
    }
}
