package code.user.web;

import code.user.MyResponse;
import code.user.User;
import code.user.UserService;
import code.user.web.dto.UserDto;
import code.user.web.dto.UserLoginDto;
import code.user.web.dto.UserMapper;
import code.user.web.dto.UserRegisterDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.net.URI;

@RestController
public class UserController {

    private final UserService userService;
    private final UserMapper mapper;

    public UserController(UserService userService,
                          UserMapper mapper) {
        this.userService = userService;
        this.mapper = mapper;
    }

    @RequestMapping("/api/v1/hello")
    public MyResponse index() {
        return new MyResponse();
    }

    @PostMapping("/api/v1/login")
    public ResponseEntity login(HttpServletRequest request, @RequestBody @Valid UserLoginDto userLoginDto) {
        userService.login(request, userLoginDto);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/api/v1/register")
    public ResponseEntity<UserDto> register(@RequestBody @Valid UserRegisterDto userRegisterDto) {
        User created = userService.register(mapper.map(userRegisterDto), userRegisterDto.getPassword());
        return ResponseEntity.created(locationURIFrom(created)).body(mapper.map(created));
    }

    public URI locationURIFrom(User created) {
        return ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/api/users/{id}")
                .buildAndExpand(created.getId())
                .toUri();
    }
}
