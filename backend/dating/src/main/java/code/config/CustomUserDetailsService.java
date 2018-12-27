package code.config;

import code.user.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collections;

@Service
@Transactional
public class CustomUserDetailsService implements UserDetailsService {

    private UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepository.findByEmail(email).map(user ->
                new org.springframework.security.core.userdetails.User(
                        user.getEmail(),
                        user.getEncryptedPassword(),
                        true,
                        true,
                        true,
                        true,
                        Collections.emptyList()
                )
        ).orElseThrow(() -> new UsernameNotFoundException("No user found with username: " + email));
    }
}
