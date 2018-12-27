package credit.user.web;

import credit.MyResponse;
import credit.user.UserService;
import credit.user.web.dto.UserLoginDto;
import credit.user.web.dto.UserMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

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

    @RequestMapping("/api/v1/login")
    public ResponseEntity login(HttpServletRequest request, @Valid UserLoginDto userLoginDto) {
        this.userService.login(request, userLoginDto);
        return ResponseEntity.ok().build();
    }


}
