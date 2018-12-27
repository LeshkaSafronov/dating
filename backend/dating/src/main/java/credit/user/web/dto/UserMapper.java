package credit.user.web.dto;

import credit.user.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public abstract class UserMapper {

    @Mapping(target = "id", ignore = true)
    public abstract User map(UserRegisterDto dto);
}
