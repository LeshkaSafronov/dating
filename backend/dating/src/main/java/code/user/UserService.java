package code.user;

import code.user.web.dto.UserLoginDto;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;

import static org.springframework.security.web.context.HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY;

@Service
public class UserService {

    private final UserRepository repository;
    private final AuthenticationManager authManager;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository repository,
                       AuthenticationManager authManager,
                       PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.authManager = authManager;
        this.passwordEncoder = passwordEncoder;
    }

    public void login(HttpServletRequest request,
                      UserLoginDto userLoginDto) {
        UsernamePasswordAuthenticationToken authReq
                = new UsernamePasswordAuthenticationToken(userLoginDto.getEmail(), userLoginDto.getPassword());
        Authentication auth = authManager.authenticate(authReq);

        SecurityContext sc = SecurityContextHolder.getContext();
        sc.setAuthentication(auth);

        HttpSession session = request.getSession(true);
        session.setAttribute(SPRING_SECURITY_CONTEXT_KEY, sc);
    }

    @Transactional
    public User register(User user, String password) {
        user.setEncryptedPassword(passwordEncoder.encode(password));
        return repository.save(user);
    }
}
